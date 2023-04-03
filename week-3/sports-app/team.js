/*
Title: team.js
Author: Amanda Groves
Date: 2/April/2023
Description: The class/constructor for the sports-app module
*/

//enable strict mode
"use-strict";

//introduce the classes for the sports-app
class Team {
    name;
    mascot;
    playerCount;

    //utilize the constructors for each of the classes
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

//export the module
module.exports = Team;