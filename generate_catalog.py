import json
import re

DB_PATH = r'd:\CoreThree\TRIO\app\js\data.js'
OUT_PATH = r'd:\CoreThree\TRIO\Game_Catalog_Cheat_Sheet.md'

with open(DB_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('{')
end_idx = content.rfind(';', 0, content.find('function getQuestions'))
if end_idx == -1: end_idx = len(content)

json_str = content[start_idx:end_idx].strip()
if json_str.endswith(';'): json_str = json_str[:-1]

db = json.loads(json_str)

md = "# 🎤 QOOL Quiz - Official Host Catalog & Cheat Sheet\n\n"
md += "*Print this document or open it on your phone so you can securely reference the answers while the players look at the main screen!*\n\n"
md += "---\n\n"

# Round 1
md += "## 🏓 Round 1: Ping-Pong Battle\n\n"
for idx, q in enumerate(db.get('round1', [])):
    md += f"**Q{idx+1} ({q.get('category', 'general').capitalize()}):**\n"
    parts = q['ar'].split('\n(الإجابة:')
    if len(parts) == 2:
        md += f"> {parts[0].strip()}\n"
        md += f"> **Answer:** {parts[1].replace(')', '').strip()}\n\n"
    else:
        parts_en = q['ar'].split('\n(Ans:')
        if len(parts_en) == 2:
            md += f"> {parts_en[0].strip()}\n"
            md += f"> **Answer:** {parts_en[1].replace(')', '').strip()}\n\n"
        else:
            md += f"> {q['ar']}\n\n"

# Round 2
md += "---\n\n## 👨‍👩‍👧‍👦 Round 2: Family Feud\n\n"
for idx, q in enumerate(db.get('round2', [])):
    md += f"**Q{idx+1} ({q.get('category', 'general').capitalize()}):**\n"
    md += f"> {q['ar']}\n\n"
    md += "| Rank | Points | Answer |\n"
    md += "|---|---|---|\n"
    for a_idx, ans in enumerate(q.get('answers_ar', [])):
        pts = q['points'][a_idx]
        md += f"| {a_idx+1} | {pts} | {ans} |\n"
    md += "\n"

# Round 3
md += "---\n\n## ⚡ Round 3: Speed Round\n\n"
for idx, q in enumerate(db.get('round3', [])):
    md += f"**Q{idx+1} ({q.get('category', 'general').capitalize()}):**\n"
    parts = q['ar'].split('\n(الإجابة:')
    if len(parts) == 2:
        md += f"> {parts[0].strip()}  \n"
        md += f"> **Answer:** {parts[1].replace(')', '').strip()}\n\n"
    else:
        parts_en = q['ar'].split('\n(Ans:')
        if len(parts_en) == 2:
            md += f"> {parts_en[0].strip()}  \n"
            md += f"> **Answer:** {parts_en[1].replace(')', '').strip()}\n\n"
        else:
            md += f"> {q['ar']}\n\n"

with open(OUT_PATH, 'w', encoding='utf-8') as f:
    f.write(md)

print("Catalog generated successfully!")
