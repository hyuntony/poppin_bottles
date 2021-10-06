// Function that returns total bottles of pop
// when given the dollar amount of investment

// function to redeem from bottles and caps
const redeem = function(total, bottles, caps, redeemBot, redeemCap) {
  if (bottles < 2 && caps < 4) {     // Base case
    return [total, redeemBot, redeemCap, bottles, caps];
  }

  let a = Math.floor(bottles / 2);
  let b = Math.floor(caps / 4);
  let empBottles = bottles - a + b;
  let empCaps = caps - (b * 3) + a;
  let newA = redeemBot + a;
  let newB = redeemCap + b;
  let newTotal = total + a + b;
  return redeem(newTotal, empBottles, empCaps, newA, newB);
};

const totalBots = function(investment) {
  // amount of bottles initially purchased
  let initBots = investment / 2;
  // amount of caps
  let redeemBottles = redeem(initBots, initBots, initBots, 0, 0);
  console.log("Total Bottles: " + redeemBottles[0]);
  console.log("Remaining Bottles: " + redeemBottles[3]);
  console.log("Remaining Caps: " + redeemBottles[4]);
  console.log("Total Earned: ");
  console.log("  Bottles: " + redeemBottles[1]);
  console.log("  Caps: " + redeemBottles[2]);
};

totalBots(40);
