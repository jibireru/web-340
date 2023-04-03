/*
Title: team-manager.js
Author: Amanda Groves
Date: 2/April/2023
Description: The functions file for the sports-app module.
*/

//enable strict mode
"use-strict";

const Team = require("./team");

//create the array for the teams
const teams = [
    new Team("Anemo", "Kazuha", "10"),
    new Team("Geo", "Zhongli", "7"),
    new Team("Dendro", "Tighnari", "7"),
    new Team("Electro", "Cyno", "12"),
    new Team("Cryo", "Kaeya", "11"),
];


//export module function for teams
module.exports.getTeams = function() {
    return teams;
}


//export module function for the names
module.exports.getTeam = function(name) {
    return teams.find(team => team.name === name);
}


//export module function for the display of the data
module.exports.displayTeam = function(team) {
    return "Name: " + team.name + "\nMascot: " + team.mascot + "\nPlayer Count: "+ team.playerCount + "\n";
}

