/* ============================================================
   TRIO — Firebase Integration
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyChm7NVcrh4Vk1fRtWO--ig_rla4KxvetE",
  authDomain: "trio-quiz-game.firebaseapp.com",
  projectId: "trio-quiz-game",
  storageBucket: "trio-quiz-game.firebasestorage.app",
  messagingSenderId: "574882513861",
  appId: "1:574882513861:web:e32bec7e7e53d6496e41ac"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// Check URL for specific room ID, default to a generic 'public' room if none provided
const urlParams = new URLSearchParams(window.location.search);
let roomId = urlParams.get('room');
if (!roomId) roomId = 'public_game';
const GAME_DOC = db.collection('games').doc(roomId);
console.log('Firebase initialized. Room ID:', roomId);

const FirebaseDB = {
  enabled: true,
  isListening: false,
  _lastListenDataStr: null,

  // Called to push the current UI state up to Firestore
  saveState() {
    if (!this.enabled || typeof GameState === 'undefined') return;
    
    // We make a clean object of the critical state
    const state = {
      teamA: GameState.teamA,
      teamB: GameState.teamB,
      categories: GameState.categories,
      currentRound: GameState.currentRound,
      gameLength: GameState.gameLength,
      stats: GameState.stats,
      r1: GameState.r1,
      r2: GameState.r2,
      r3: GameState.r3,
      currentScreen: Router.current,
      // We append a timestamp so we know when it was last pushed
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    const cleanState = JSON.parse(JSON.stringify(state));
    // Save locally so our listener doesn't trigger a visual refresh on our own writes
    this._lastListenDataStr = JSON.stringify(cleanState);
    
    console.log("FirebaseDB: Attempting to save state to cloud...", cleanState);
    GAME_DOC.set(cleanState, { merge: true })
      .then(() => {
        console.log("FirebaseDB: ✅ State successfully saved to the cloud!");
      })
      .catch(err => {
        console.error("Firebase save error:", err);
      });
  },

  // Called ONCE at boot to load the game state if it exists, and listen for external changes
  initListener(onUpdateFn) {
    this.isListening = true;
    GAME_DOC.onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        
        // Don't trigger an update if it's the exact same data we just saved.
        const sortObj = (obj) => {
          if (obj === null || typeof obj !== 'object') return obj;
          if (Array.isArray(obj)) return obj.map(sortObj);
          return Object.keys(obj).sort().reduce((result, key) => {
            result[key] = sortObj(obj[key]);
            return result;
          }, {});
        };
        
        const incomingDataStr = JSON.stringify(sortObj({ ...data, updatedAt: null }));
        const localDataStr = JSON.stringify(sortObj({ ...JSON.parse(this._lastListenDataStr || '{}'), updatedAt: null }));
        
        if (incomingDataStr !== localDataStr) {
           this._lastListenDataStr = JSON.stringify(data);
           onUpdateFn(data);
        }
      }
    }, err => {
      console.error("Firebase listener error:", err);
      if(window.showToast) showToast('⚠️ Database error', 'warn');
    });
  }
};
