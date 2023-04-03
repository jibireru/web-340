/*
Title: index.js
Author: Amanda Groves
Date: 2/April/2023
Description: The main index for the sports-app module
*/

//enable strict mode
"use-strict";

const TeamManager = require("./team-manager");

const teams = TeamManager.getTeams(); 

//display the data for teams
console.log("-- DISPLAYING TEAMS --");
teams.forEach(team => {
    console.log(TeamManager.displayTeam(team));
});
console.log("\n")

//display the data for the teams
console.log("-- DISPLAYING A SINGLE TEAM --");
const Anemo = TeamManager.getTeam("Anemo");
console.log(TeamManager.displayTeam(Anemo));

console.log("-- DISPLAYING A SINGLE TEAM --");
const Geo = TeamManager.getTeam("Geo");
console.log(TeamManager.displayTeam(Geo));