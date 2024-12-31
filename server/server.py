from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, origins= '*')

@app.route('/api/data', methods=['GET'])
def get_data():
    #get result
    return jsonify({'prediction': '2000000'})

@app.route('/api/data', methods=['POST'])
def post_data():
    data = request.json
    print("Received Data:", data) 
    return jsonify({'received': data})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
