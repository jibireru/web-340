const Team = require('./team').Team;
const moment = require('moment');
const teamManager = require('./team-manager');

let teamsList = teamManager.findTeams();

let championTeam1 = teamManager.findTeam('Detroit Red Wings');
let championTeam2 = teamManager.findTeam('Pittsburgh Penguins');

console.log('---DISPLAYING TEAMS---');

teamsList.forEach((team) => {
    console.log(`Name: ${team.name}\nMascot: ${team.mascot}\nPlayer Count: ${team.playerCount}\n`);
});

console.log('--CHAMPIONSHIP GAME--');

console.log(`${championTeam1.name} is playing ${championTeam2.name} on ${moment().add(7, 'days').format('MM-DD-YYYY')} at 8:30PM EST`);