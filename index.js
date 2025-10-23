
//Created the names array
const names = [];
const teams = [];

//Created function
function addName() {
    const inputNames = document.getElementById("input-names");
    const nameValue = inputNames.value.trim();

//Created if statement 

const newNames = nameValue.split(/\s+/);

names.push(...newNames);

inputNames.value = "";
console.log("Names:", names);

//Created for loop to iterate the loop 
    for(let i = 0; i < names.length; i++) {
        console.log(names[i]);
        }
}


function addTeam(){
    const inputTeams = document.getElementById("input-teams");
    const teamValue = Number(inputTeams.value);

    if(teamValue > 0){
        teams.length = 0;
        for (let i = 0; i < teamValue; i++) {
            teams.push([]);
        }
        console.log(`Created ${teamValue} teams`, teams);
    }else{
        console.log("Please enter a valid number");
    } 
}

function generateTeam() {

    if (teams.length === 0 || names.length === 0) {
    alert("Please add names and create teams first!");
    return;
    }

    //shuffle the names 
    const shuffled = [...names].sort(() => Math.random() - 0.5);

    //put names into teams
    shuffled.forEach((name, index) => {
        const teamIndex = index % teams.length;
        teams[teamIndex].push(name);
    });

   document.getElementById("outputList").innerHTML = teams
  .map((team, i) => `<p><strong>Team ${i + 1}:</strong> ${team.join(", ")}</p>`)
  .join("");

}