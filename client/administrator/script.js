var selectHome = document.getElementById("select-home")
var selectAway = document.getElementById("select-away")

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

// document.getElementById('addMatchForm').addEventListener('submit', (ev) => {
//     home_score = home_score.value
//     away_score = away_score.value
//     home_id = home_id.value
//     date = date.value
//     week_id = week_id.value
//     away_id = away_id.value
//     fetch("http://134.122.87.241/api/matches", {
//         method: 'POST',
//         headers: {
//             'Authentication': `Bearer ${sessionStorage.getItem('token')}`
//         },
//         body: JSON.stringify({
//             'week_id': week_id,
//             'date': date,
//             'home_id': home_id,
//             'home_score': home_score,
//             'away_score': away_score,
//             'away_id': away_id,
//         })
//     })
//     .then(response => response.json())
    
// })
