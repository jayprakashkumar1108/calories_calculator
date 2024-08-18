from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load('calorie_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = [
        data['age'],
        data['height'],
        data['weight'],
        data['exerciseDuration'],
        data['heartRate'],
        data['bodyTemp']
    ]
    prediction = model.predict([features])
    return jsonify({'calories': prediction[0]})

if __name__ == '__main__':
    app.run(port=5000)
