const img_path = '../Slot-Machine/img/';
let credits = 300;

document.getElementById('spin').addEventListener('click', spin);

function spin(){
  if (credits <= 0){
    document.getElementById("result").textContent = "Game Over! Looks like you're out of credits, you lose!";
    return;
  }

credits -= 25;

  let slot1 = Math.floor(Math.random() * 5) + 1;
  let slot2 = Math.floor(Math.random() * 5) + 1;
  let slot3 = Math.floor(Math.random() * 5) + 1;

  document.getElementById('slot1').src = `${img_path}slot${slot1}.png`;
  document.getElementById('slot2').src = `${img_path}slot${slot2}.png`;
  document.getElementById('slot3').src = `${img_path}slot${slot3}.png`;

  let result = document.getElementById("result");

  if (slot1 === slot2 && slot2 === slot3){
    result.textContent = "You Matched All Three! JACKPOT!!! +75 credits";
    credits += 75;
  } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3){
    result.textContent = "You almost got all three! +25 credits";
    credits += 25;
  } else {
    result.textContent = "Yikes! No matches... No credits back";
  }


  document.getElementById("credits").textContent = credits;
}