function cal() {
    let w = document.getElementById('weight').value;
    let h = document.getElementById('height').value;
    h /= 100;
    let bmi = w / (h * h);
    console.log(bmi);
   

    let det = "";
    if (bmi < 18.5) {
        det = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        det = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        det = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        det = "Obesity Class I";
    } else if (bmi >= 35 && bmi <= 39.9) {
        det = "Obesity Class II";
    } else {
        det = "Obesity Class III";
    }
    document.getElementById('result').innerHTML='Your BMI is ' + bmi.toFixed(2) + '  and you are ' + det;


    
    
    
    
    
}
