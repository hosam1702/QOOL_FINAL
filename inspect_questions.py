import openpyxl, csv, os, json

base = r'd:\CoreThree\TRIO\questions assets'

files = [
    (r'Turn-Based questions', 'geo multi.xlsx'),
    (r'Turn-Based questions', 'history multi.xlsx'),
    (r'Turn-Based questions', 'islamic multi v3.xlsx'),
    (r'Turn-Based questions', 'تحدي الدوره كره القدم.xlsx'),
    (r'Turn-Based questions', 'تحدي الدور معلومات عامة.xlsx'),
    (r'Turn-Based questions', 'أعمال فنانين تحدي الدور.xlsx'),
    (r'family feud questions', 'family feud 7.xlsx'),
    (r'fast based questions', 'art.xlsx'),
    (r'fast based questions', 'football_quiz_questions.csv'),
    (r'fast based questions', 'geography easy.xlsx'),
    (r'fast based questions', 'islamic quiz (1).xlsx'),
    (r'fast based questions', 'world history easy.xlsx'),
]

output = {}

for folder, fname in files:
    fpath = os.path.join(base, folder, fname)
    if not os.path.exists(fpath):
        output[fname] = {'error': 'File not found'}
        continue
        
    try:
        rows_data = []
        if fname.endswith('.csv'):
            with open(fpath, encoding='utf-8', errors='ignore') as fh:
                reader = csv.reader(fh)
                for i, row in enumerate(reader):
                    if i < 5:
                        rows_data.append(row)
        else:
            wb = openpyxl.load_workbook(fpath, data_only=True)
            ws = wb.active
            for i, row in enumerate(ws.iter_rows(values_only=True)):
                if i < 5:
                    rows_data.append([str(c) if c is not None else '' for c in row])
                    
        output[fname] = rows_data
    except Exception as e:
        output[fname] = {'error': str(e)}

with open(r'd:\CoreThree\TRIO\questions_preview.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)
