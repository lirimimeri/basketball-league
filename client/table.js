const URL = "http://134.122.87.241/api/league"

const createNode = (element) => {
  return document.createElement(element);
};

const append = (parent, element) => {
    return parent.appendChild(element);
};

const table = document.getElementById("ranking-table")

fetch(URL)
    .then((response) => response.json())
    .then((data) => {

        data.map((club, index) => {
            
            let {team, matches, wins, loses, scored_points, accepted_points, difference, league_points} = club  
            

            let row = createNode("tr")

            let td0 = createNode("td")
            let td1 = createNode("td")
            let td2 = createNode("td")
            let td3 = createNode("td")
            let td4 = createNode("td")
            let td5 = createNode("td")
            let td6 = createNode("td")
            let td7 = createNode("td")

            td0.innerHTML = ` ${index+1}`
            td1.innerHTML = ` ${team}`
            td2.innerHTML = ` ${matches}`
            td3.innerHTML = ` ${wins}`
            td4.innerHTML = ` ${loses}`
            td5.innerHTML = ` ${scored_points} : ${accepted_points}`
            td6.innerHTML = ` ${difference}`
            td7.innerHTML = ` ${league_points}`

            append(row, td0)
            append(row, td1)
            append(row, td2)
            append(row, td3)
            append(row, td4)
            append(row, td5)
            append(row, td6)
            append(row, td7)

            append(table, row)
            

            
        })
    })
