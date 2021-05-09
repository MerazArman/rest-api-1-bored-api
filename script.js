

fetch('https://www.boredapi.com/api/activity/')
.then(response => response.json())
.then(data => {
    document.getElementById("activity").innerHTML = `Your Task: ${data.activity}`;
    document.getElementById("type").innerHTML = `Work Type: ${data.type}`;
    document.getElementById("price").innerHTML= `Price: ${data.price}`
})


