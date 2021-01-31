const shootteam1button = document.querySelector("#teamone-shoot-button");
const teamonenumgoals = document.querySelector("#teamone-numgoals");
const teamonenumshots = document.querySelector("#teamone-numshots");
shootteam1button.addEventListener("click", function () {
    console.log(" team1 button clicked");

let newCounterValue = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = newCounterValue;
    if (Math.random() * 100 < 80) {
        console.log("shot");
        let newCounterValue = Number(teamonenumgoals.innerHTML) + 1;
        teamonenumgoals.innerHTML = newCounterValue;
        if (Math.random() * 100 < 80) {
            console.log("goal")
        }
    }                                                                                                   
})
const shootteam2button = document.querySelector("#teamtwo-shoot-button");
const teamtwonumshots = document.querySelector("#teamtwo-numshots");
const teamtwonumgoals = document.querySelector("#teamtwo-numgoals");
shootteam2button.addEventListener("click", function () {
    console.log("team2 button clicked");
let newCounterValue = Number(teamtwonumshots.innerHTML) + 1;
teamtwonumshots.innerHTML = newCounterValue;
if (Math.random() * 100 < 80) {
    console.log("shot");
    let newCounterValue = Number(teamtwonumgoals.innerHTML) + 1;
    teamtwonumgoals.innerHTML = newCounterValue;
    if (Math.random() * 100 < 80) {
        console.log("goal")
    }
}
    
})
const resetbutton = document.querySelector("#reset-button");
const numberReset = document.querySelector("#num-resets");
resetbutton.addEventListener("click" , function(){
console.log("reset")

let resetbutton = Number(numberReset.innerHTML) +1;
numberReset.innerHTML = resetbutton;
teamonenumshots.innerHTML = 0;
teamtwonumshots.innerHTML = 0;
teamonenumgoals.innerHTML = 0;
teamtwonumgoals.innerHTML = 0;

   
})
