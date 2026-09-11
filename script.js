const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');

calcBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        result.className = 'result show';
        result.style.background = '#f8d7da';
        result.style.color = '#721c24';
        result.textContent = 'Please enter valid weight and height';
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let category, className;
    if (bmi < 18.5) {
        category = 'Underweight';
        className = 'underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
        className = 'normal';
    } else if (bmi < 30) {
        category = 'Overweight';
        className = 'overweight';
    } else {
        category = 'Obese';
        className = 'obese';
    }

    result.className = `result show ${className}`;
    result.innerHTML = `Your BMI is <strong>${bmi}</strong><br>Category: <strong>${category}</strong>`;
});