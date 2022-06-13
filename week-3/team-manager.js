const Team = require('./team').Team;
const moment = require('moment');

function findTeams() {
    let team1 = new Team('Vegas Golden Knights', 'Chance', '27')
    let team2 = new Team('Nashville Predators', 'Gnash', '31')
    let team3 = new Team('Philadelphia Flyers', 'Gritty', '25')
    let team4 = new Team('Pittsburgh Penguins', 'Iceburgh', '27')
    let team5 = new Team('Detroit Red Wings', 'Al the Octopus', '28')
}

function findTeam(name) {
    let teams = findTeams();
    let teamFound = teams.find(team => team.name === name);
    return teamFound;
}

function getGame(team1, team2) {
    let gameDate = moment().add('d', 5);
    console.log(`${team1.name} ${team1.mascot} is playing ${team2.name} ${team2.mascot} on $ at 8:30PM EST`);
}

exports.findTeams = findTeams;
exports.getGame = getGame;
exports.findTeam = findTeam;