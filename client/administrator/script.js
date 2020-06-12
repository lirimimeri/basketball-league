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

$("#addMatchForm").submit(function (e) {
    e.preventDefault();
    validate()
    try
    {
      fetch('http://134.122.87.241/api/matches',
      {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "week_id": week_id,
          "date": date,
          "home_id": home_id,
          "home_score": home_score,
          "away_score": away_score,
          "away_id": away_id
        })
      })
      
    }
    catch(error){
      alert(error)
    }
  });
  function validate()
  {
    home_score = document.getElementById("home_score").value
    away_score = document.getElementById("away_score").value
    home_id = document.getElementById("select-home").value
    date = document.getElementById("date").value
    week_id = document.getElementById("week_id").value
    away_id = document.getElementById("select-away").value

    if(home_id === "" || away_id === "" || week_id === "" || home_score === "" || 
      away_score === "" || date === "")
    {
        alert("*please fill all the parameters")
    }
  }