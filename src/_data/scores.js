const {parse} = require("csv-parse/sync");
const fs = require("fs");

function readCSV(round) {
  const input = fs.readFileSync(`./src/_data/round${round}.csv`);
  const records = parse(input, {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true
  });
  console.log(`${records.length} games in round ${round}.`);
  return records;
}

function formatRound(data) {
  return data.map( (game) => {
    let tags = [
      { tag: game.tag1, score: game.score1 },
      { tag: game.tag2, score: game.score2 },
      { tag: game.tag3, score: game.score3 },
      { tag: game.tag4, score: game.score4 }
    ]

    tags.sort((a,b) => {
      return parseFloat(b.score) - parseFloat(a.score)
    })

    return {
      "game": game.game,
      "tags": tags
    }
  })
}

module.exports = function () {
  const rounds = [1,2,3,4,5,6]
  const data = rounds.map( (round) => {
    let roundData = readCSV(round);
    return formatRound(roundData);
  })
  data.unshift('placeholder')
  console.log(data)
  return data;
};
