import json
import re
import time
from deep_translator import GoogleTranslator

DB_PATH = r'd:\CoreThree\TRIO\app\js\data.js'
with open(DB_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract json
start_idx = content.find('{')
end_idx = content.rfind(';', 0, content.find('function getQuestions'))
if end_idx == -1: end_idx = len(content)

json_str = content[start_idx:end_idx].strip()
if json_str.endswith(';'): json_str = json_str[:-1]

db = json.loads(json_str)

translator = GoogleTranslator(source='en', target='ar')

def is_mostly_english(text):
    if not text: return False
    # count english letters
    en_chars = len(re.findall(r'[a-zA-Z]', text))
    ar_chars = len(re.findall(r'[\u0600-\u06FF]', text))
    return en_chars > (ar_chars * 2) + 5

def translate_en_to_ar(text):
    print(f"Translating to AR: {text[:40]}...")
    try:
        time.sleep(0.3)
        return translator.translate(text)
    except Exception as e:
        print("Error:", e)
        return text

count = 0

for round_name in ['round1', 'round3']:
    for q in db.get(round_name, []):
        text_to_check = q.get('ar', '')
        if is_mostly_english(text_to_check):
            count += 1
            # Ensure en is strictly English
            q['en'] = text_to_check
            
            # Now translate to Arabic 
            parts = text_to_check.split('\n(Ans:')
            if len(parts) == 2:
                q_ar = translate_en_to_ar(parts[0].strip())
                a_ar = translate_en_to_ar(parts[1].replace(')', '').strip())
                q['ar'] = f"{q_ar}\n(الإجابة: {a_ar})"
            else:
                q['ar'] = translate_en_to_ar(text_to_check)
                
for q in db.get('round2', []):
    if is_mostly_english(q.get('ar', '')):
        count += 1
        q['en'] = q['ar']
        q['ar'] = translate_en_to_ar(q['ar'])
        
    # check answers too
    if 'answers_ar' in q:
        for i, a in enumerate(q['answers_ar']):
            if is_mostly_english(a):
                q['answers_en'][i] = a
                q['answers_ar'][i] = translate_en_to_ar(a)

print(f"Translated {count} mostly-English questions to Arabic.")

out_json = json.dumps(db, ensure_ascii=False, indent=2)
out_str = f"const QUESTION_DB = {out_json};\n\n"
out_str += "function getQuestions(roundName, categories) {\n"
out_str += "  let all = QUESTION_DB[roundName] || [];\n"
out_str += "  if (categories && categories.length > 0) {\n"
out_str += "    const filtered = all.filter(q => categories.includes(q.category));\n"
out_str += "    all = filtered.length > 0 ? filtered : all;\n"
out_str += "  }\n"
out_str += "  return all.sort(() => Math.random() - 0.5);\n"
out_str += "}\n"

with open(DB_PATH, 'w', encoding='utf-8') as f:
    f.write(out_str)
print("Done fixing data.js")
