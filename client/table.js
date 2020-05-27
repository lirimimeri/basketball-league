const URL = "http://134.122.87.241/api/league";

const createNode = (element) => {
  return document.createElement(element);
};

const append = (parent, element) => {
  return parent.appendChild(element);
};

var dataSource;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    dataSource = data;
    const table = document.getElementById("ranking-table");
    data.map((club, index) => {
      let {
        team,
        matches,
        wins,
        loses,
        scored_points,
        accepted_points,
        difference,
        league_points,
      } = club;
      let row = createNode("tr");
      let td0 = createNode("td");
      let td1 = createNode("td");
      let td2 = createNode("td");
      let td3 = createNode("td");
      let td4 = createNode("td");
      let td5 = createNode("td");
      let td6 = createNode("td");
      let td7 = createNode("td");

      td0.innerHTML = ` ${index + 1}`;
      td1.innerHTML = ` ${team}`;
      td2.innerHTML = ` ${matches}`;
      td3.innerHTML = ` ${wins}`;
      td4.innerHTML = ` ${loses}`;
      td5.innerHTML = ` ${scored_points} : ${accepted_points}`;
      td6.innerHTML = ` ${difference}`;
      td7.innerHTML = ` ${league_points}`;

      append(row, td0);
      append(row, td1);
      append(row, td2);
      append(row, td3);
      append(row, td4);
      append(row, td5);
      append(row, td6);
      append(row, td7);
      append(table, row);
    });
  });



  fetch("http://134.122.87.241/api/results")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        var mainContainer = document.getElementById("matches")
        data.map(a => {
          
          var div = createNode("div")
          div.classList.add("week")
          div.innerHTML = "Week "+a.week
          a.matches.map(match => {
            var div1 = createNode("div")
            div1.classList.add("results")
            div1.innerHTML = `${match.home} ${match.home_score} - ${match.away_score} ${match.away}`
            mainContainer.appendChild(div1)
          })
          
          mainContainer.appendChild(div)

        })
        // for (var i = 0; i < data.length; i++) {
 
        //     var div = createNode("div");
        //     div.innerHTML = data[0].matches[i].home + " " +data[0].matches[i].home_score + " : " + data[0].matches[i].away_score + " "+data[0].matches[0].away 

        //     mainContainer.appendChild(div);

        // }
        
    });

