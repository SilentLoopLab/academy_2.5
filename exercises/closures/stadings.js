// ---------- functions ----------

// (matches: Match[]) => Row[]   sorted
function calculateStandings(matches) {}

// (matches: Match[], team: string) => string
function getTeamForm(matches, team) {}

// bonus: (standings: Row[]) => void
function printTable(standings) {}

// ---------- state ----------

// Match: { home: string, away: string, homeGoals: number, awayGoals: number }   goals — integer >= 0
// Row:   { team, played, won, drawn, lost, goalsFor, goalsAgainst, goalDiff, points }

const POINTS = { win: 3, draw: 1, loss: 0 };
const SORT_BY = ["points", "goalDiff", "goalsFor", "team"]; // desc, desc, desc, asc

const matches = [
    { home: "Lions", away: "Tigers", homeGoals: 2, awayGoals: 1 },
    { home: "Eagles", away: "Wolves", homeGoals: 0, awayGoals: 0 },
    { home: "Tigers", away: "Eagles", homeGoals: 3, awayGoals: 0 },
    { home: "Wolves", away: "Lions", homeGoals: 1, awayGoals: 1 },
    { home: "Lions", away: "Eagles", homeGoals: 0, awayGoals: 2 },
    { home: "Tigers", away: "Wolves", homeGoals: 2, awayGoals: 2 }
];

// ---------- calls ----------

const standings = calculateStandings(matches);

console.log(standings.map(r => `${r.team} ${r.points} ${r.goalDiff} ${r.goalsFor}`));
// ["Tigers 4 2 6", "Lions 4 -1 3", "Eagles 4 -1 2", "Wolves 3 0 3"]

console.log(standings[0]);
// { team: "Tigers", played: 3, won: 1, drawn: 1, lost: 1,
//   goalsFor: 6, goalsAgainst: 4, goalDiff: 2, points: 4 }

console.log(standings[3]);
// { team: "Wolves", played: 3, won: 0, drawn: 3, lost: 0,
//   goalsFor: 3, goalsAgainst: 3, goalDiff: 0, points: 3 }

console.log(calculateStandings([])); // []
console.log(matches[0]);             // { home: "Lions", away: "Tigers", homeGoals: 2, awayGoals: 1 }

console.log(getTeamForm(matches, "Lions"));  // "WDL"
console.log(getTeamForm(matches, "Tigers")); // "LWD"
console.log(getTeamForm(matches, "Eagles")); // "DLW"
console.log(getTeamForm(matches, "Wolves")); // "DDD"
console.log(getTeamForm(matches, "Bears"));  // ""

printTable(standings);
// #  Team    P  W  D  L  GF GA GD  Pts
// 1  Tigers  3  1  1  1  6  4  +2  4
// 2  Lions   3  1  1  1  3  4  -1  4
// 3  Eagles  3  1  1  1  2  3  -1  4
// 4  Wolves  3  0  3  0  3  3  0   3