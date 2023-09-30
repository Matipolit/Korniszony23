from flask import Flask, request
import json

app = Flask(__name__)
PATH_TO_CANDIDATES = "Documents/repos/Korniszony23/backend/candidates.json"

@app.route('/')
def hello_world():
    with open(PATH_TO_CANDIDATES, "r") as json_file:
        data = json.load(json_file)
        return data["constituency_nr_"+request.args.get('constituency_number')]


if __name__ == '__main__':
    app.run()
