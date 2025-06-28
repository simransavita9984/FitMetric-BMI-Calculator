const form = document.querySelector('#bmi-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height <= 0 || isNaN(height)) {
        results.innerHTML = `⚠️ Please enter a valid height.`;
        results.style.color = "red";
    } else if (weight <= 0 || isNaN(weight)) {
        results.innerHTML = `⚠️ Please enter a valid weight.`;
        results.style.color = "red";
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        if (bmi < 18.5) {
            results.innerHTML = `<span class="badge under">Underweight</span> Your BMI is: <strong>${bmi}</strong>`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            results.innerHTML = `<span class="badge normal">Normal</span> Your BMI is: <strong>${bmi}</strong>`;
        } else {
            results.innerHTML = `<span class="badge over">Overweight</span> Your BMI is: <strong>${bmi}</strong>`;
        }
    }
});


// //simple way
// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });

