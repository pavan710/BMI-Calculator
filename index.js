function cal() {
    let w = document.getElementById('weight').value;
    let h = document.getElementById('height').value;
    let a=0;
    h /= 100;
    let bmi = w / (h * h);
    console.log(bmi);
   

    let det = "";
    if (bmi < 18.5) {
        a=1;
        det = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        a=2;
        det = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        a=3;
        det = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        a=4;
        det = "Obesity Class I";
    } else if (bmi >= 35 && bmi <= 39.9) {
        a=5;
        det = "Obesity Class II";
    } else if(bmi>40) {
        a=6;
        det = "Obesity Class III";
    }
    document.getElementById('result').innerHTML='Your BMI is ' + bmi.toFixed(2) + '  and you are ' + det;
    
    if(a==1){
        document.getElementById('lab').innerHTML="Suggestion from our side:)";
        document.getElementById('sug').innerHTML="Consult a healthcare professional: Before making any significant changes to your diet or lifestyle, it's essential to consult with a healthcare provider or a registered dietitian. They can assess your individual needs and provide personalized guidance.Balanced diet: Focus on a balanced and nutritious diet that includes a variety of food groups. Consume a mix of lean proteins, healthy fats, complex carbohydrates, fruits, and vegetables. Ensure you are meeting your daily calorie requirements.Increase caloric intake: If you're underweight, you may need to increase your daily caloric intake to promote weight gain. Try to eat more frequent, nutrient-dense meals and snacks.Protein-rich foods: Incorporate protein-rich foods like lean meats, poultry, fish, eggs, dairy products, legumes, and tofu into your diet to support muscle growth.Healthy fats: Include sources of healthy fats, such as avocados, nuts, seeds, and olive oil, to increase your calorie intake.";

    }
    else if(a==2){
        document.getElementById('lab').innerHTML="Suggestion from our side:)";
        document.getElementById('sug').innerHTML="Balanced diet: Continue to consume a well-balanced diet rich in fruits, vegetables, lean proteins, whole grains, and healthy fats to support overall health.Portion control: Be mindful of portion sizes to maintain your weight and avoid overeating.Regular physical activity: Engage in regular exercise to improve cardiovascular health, strength, and overall fitness.Hydration: Stay adequately hydrated by drinking plenty of water throughout the day.Variety in your diet: Incorporate a wide range of foods to ensure you get a diverse set of nutrients.Mindful eating: Pay attention to hunger and fullness cues, and avoid emotional or mindless eating.";
    }
    else if(a==3){
        document.getElementById('lab').innerHTML="Suggestion from our side:)";
             document.getElementById('sug').innerHTML="Consult a healthcare professional: Seek guidance from a doctor or registered dietitian to develop a personalized weight management plan that suits your specific needs.Balanced diet: Adopt a balanced and calorie-controlled diet that includes a variety of whole foods, such as fruits, vegetables, lean proteins, whole grains, and healthy fats.Portion control: Pay attention to portion sizes to prevent overeating and manage your calorie intake.Reduce sugar and processed foods: Limit the consumption of sugary beverages, processed snacks, and high-calorie, low-nutrient foods.Mindful eating: Eat slowly, savor your food, and pay attention to hunger and fullness cues to prevent overconsumption."
    }
    else if(a==4 || a==5|| a==6){
        document.getElementById('lab').innerHTML="Suggestion from our side:)";
        document.getElementById('sug').innerHTML="Consult a healthcare professional: Seek guidance from a healthcare provider or a registered dietitian who can help create a personalized plan for managing obesity.Balanced diet: Adopt a balanced and nutritious diet that includes whole foods, lean proteins, plenty of vegetables, and whole grains while reducing or eliminating processed and high-sugar foods.Portion control: Pay attention to portion sizes to manage calorie intake.Calorie management: Monitor your daily caloric intake and aim for a caloric deficit to promote weight loss. This can be achieved through a combination of diet and physical activity.Regular exercise: Incorporate regular physical activity into your routine, including both aerobic exercises (like walking, swimming, or cycling) and strength training to support weight loss and overall health.Gradual weight loss: Aim for gradual, sustainable weight loss of about 1-2 pounds per week, which is considered a healthy rate of weight loss.";

    }
    if(det==""){
        document.getElementById('sug').innerHTML="Please Enter Mentioned data fields:) ";}
    
    


    
    
    
    
    
}
