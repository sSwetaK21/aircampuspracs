//Selectors
let inputClass = document.querySelector('.inputClass');
let submitBtn = document.querySelector('.sbtn');
let container = document.querySelector('.container');


submitBtn.addEventListener('click',function(event){
    event.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
    `)
    .then(result=>result.json())
    .then(data =>{
        console.log(data)
        // let rec_meal = data["meals"];
        // console.log(rec_meal)
        data["meals"].forEach(e =>{
            let htmlTag = `<div class="cont">
            <div class="left">
            <h1 class="title">${e.strMeal}</h1>
            `

            container.innerHTML = htmlTag
        })

    })
})