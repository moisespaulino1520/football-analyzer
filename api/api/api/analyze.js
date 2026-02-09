export default function handler(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const team = req.query.team || "Unknown";

  function random(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
  }

  let goalsFor = random(1,3);
  let goalsAgainst = random(0,2);
  let cardsAvg = random(2,6);
  let cornersAvg = random(5,11);

  let over25 = Math.min(95, (goalsFor + goalsAgainst)*25 + random(5,15));
  let btts = Math.min(95, (goalsFor*30 + goalsAgainst*35) + random(5,15));
  let cards = Math.min(95, cardsAvg*15);
  let corners = Math.min(95, cornersAvg*8);

  res.status(200).json({
    team: team,
    over25: over25,
    btts: btts,
    cards: cards,
    corners: corners
  });
}
