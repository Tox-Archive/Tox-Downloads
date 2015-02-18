import json, glob

def runonce():
    lang_json = {}
    lang_dir = "/etc/osiris/app/download/*.json"

    for lang in glob.glob(lang_dir):
        lang_code = lang.split('.')[1]
        file_obj = open("/etc/osiris/app/download/master." + lang_code + ".json")
        lang_json[lang_code] = json.loads(file_obj.read())
        file_obj.close()

    return lang_json

def reply(msg):
    try:
        lang = msg['header']['accept-language'].split(',')[0].split('-')[0]
    except:
        lang = 'en'

    return { "code": 200, "file": "index.mustache", "template": msg['runonce'][lang] }
