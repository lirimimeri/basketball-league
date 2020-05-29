var selectHome = document.getElementById("select-home")
var selectAway = document.getElementById("select-away")

fetch("http://134.122.87.241/api/teams")
.then(response => response.json())
.then(data => {
    data.map(a => {
        var option1 = document.createElement("option")
        var option2 = document.createElement("option")

        option1.innerHTML = a.name
        option2.innerHTML = a.name

        selectHome.appendChild(option1)
        selectAway.appendChild(option2)
    })
})