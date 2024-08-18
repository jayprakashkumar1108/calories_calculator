from sklearn.linear_model import LinearRegression
import numpy as np
import joblib

# Example training data without gender and including bodyTemp
X_train = np.array([
    [30, 175, 70, 30, 70, 36],  # Example row without gender
    # Add more rows as needed
])
y_train = np.array([
    200,  # Example calorie value
    # Add more values as needed
])

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Save model
joblib.dump(model, 'calorie_model.pkl')
