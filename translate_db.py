import json
import os
import time

try:
    from deep_translator import GoogleTranslator
except ImportError:
    import sys
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "deep-translator==1.11.4"])
    from deep_translator import GoogleTranslator

DB_PATH = r'd:\CoreThree\TRIO\app\js\questions.json'
CACHE_PATH = r'd:\CoreThree\TRIO\translations_cache.json'

def load_cache():
    if os.path.exists(CACHE_PATH):
        try:
            with open(CACHE_PATH, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print("Could not load cache", e)
    return {}

def save_cache(cache):
    with open(CACHE_PATH, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

cache = load_cache()
translator = GoogleTranslator(source='ar', target='en')

def translate_text(text):
    if not text: return text
    if text in cache: return cache[text]
    
    # Simple regex to protect some structures if we want, but letting Google Translate
    # handle it, we might just split lines manually if it contains "(الإجابة: ...)"
    
    # Attempting translation
    print(f"Translating: {text[:40]}...")
    try:
        time.sleep(0.3) # be somewhat polite to free API
        res = translator.translate(text)
        cache[text] = res
        save_cache(cache)
        return res
    except Exception as e:
        print(f"Failed to translate {text[:40]}: {e}")
        return text

def translate_with_answer_block(ar_string):
    # e.g., "السؤال؟\n(الإجابة: كذا — كذا)" -> "The Question?\n(Answer: This — That)"
    parts = ar_string.split('\n(الإجابة:')
    if len(parts) == 2:
        q_text = parts[0].strip()
        ans_text = parts[1].replace(')', '').strip()
        
        q_en = translate_text(q_text)
        ans_en = translate_text(ans_text)
        
        return f"{q_en}\n(Answer: {ans_en})"
    
    # Try alternate format
    parts2 = ar_string.split('\n(Ans:')
    if len(parts2) == 2:
        q_text = parts2[0].strip()
        ans_text = parts2[1].replace(')', '').strip()
        
        q_en = translate_text(q_text)
        ans_en = translate_text(ans_text)
        
        return f"{q_en}\n(Answer: {ans_en})"
        
    return translate_text(ar_string)

def main():
    if not os.path.exists(DB_PATH):
        print(f"Error: {DB_PATH} not found.")
        return
        
    with open(DB_PATH, 'r', encoding='utf-8') as f:
        db = json.load(f)
        
    for r1_q in db.get('round1', []):
        r1_q['en'] = translate_with_answer_block(r1_q['ar'])
        
    for r2_q in db.get('round2', []):
        r2_q['en'] = translate_text(r2_q['ar'])
        # Translate each answer
        if 'answers_ar' in r2_q and isinstance(r2_q['answers_ar'], list):
            en_ans = []
            for a in r2_q['answers_ar']:
                en_ans.append(translate_text(a))
            r2_q['answers_en'] = en_ans
            
    for r3_q in db.get('round3', []):
        r3_q['en'] = translate_with_answer_block(r3_q['ar'])
        
    # Overwrite the db
    with open(DB_PATH, 'w', encoding='utf-8') as f:
        json.dump(db, f, ensure_ascii=False, indent=2)
        
    print("Translation completed and DB updated.")

if __name__ == '__main__':
    main()
