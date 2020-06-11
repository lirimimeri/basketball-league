var selectHome = document.getElementById("select-home")
var selectAway = document.getElementById("select-away")

var home_score = document.getElementById('home_score').value
var away_score = document.getElementById('home_score').value
var home_id = document.getElementById('home_score').value
var date = document.getElementById('home_score').value
var week_id = document.getElementById('home_score').value
var away_id = document.getElementById('home_score').value



fetch("http://134.122.87.241/api/teams")
.then(response => response.json())
.then(data => {
    data.map(a => {
        var option1 = document.createElement("option")
        var option2 = document.createElement("option")

        option1.innerHTML = a.name
        option1.value = a.id
        option2.innerHTML = a.name
        option2.value = a.id

        selectHome.appendChild(option1)
        selectAway.appendChild(option2)
    })
})

document.getElementById('submit-button').addEventListener('click', (ev) => {
    fetch("http://134.122.87.241/api/teams", {
        method: 'POST',
        headers: {
            'Authentication': `Bearer ${sessionStorage.getItem('token')}`
        },
        body: {
            'week_id': week_id,
            'date': date,
            'home_id': home_id,
            'home_score': home_score,
            'away_score': away_score,
            'away_id': away_id,
        }
    })
})
