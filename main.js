const img_path = 'img/';
let credits = 300;

document.getElementById('spin').addEventListener('click', spin);

//I used google gemini to help get this code//
function spin(){
  if (credits <= 0){
    document.getElementById("result").textContent = "Game Over! Looks like you're out of credits, you lose!";
    return;
  }
//I understood how to get the randomization but wasn't sure how to get the credits//

credits -= 50;

  let slot1 = Math.floor(Math.random() * 5) + 1;
  let slot2 = Math.floor(Math.random() * 5) + 1;
  let slot3 = Math.floor(Math.random() * 5) + 1;

  document.getElementById('slot1').src = `${img_path}slot${slot1}.png`;
  document.getElementById('slot2').src = `${img_path}slot${slot2}.png`;
  document.getElementById('slot3').src = `${img_path}slot${slot3}.png`;

  let result = document.getElementById("result");

  if (slot1 === slot2 && slot2 === slot3){
    result.textContent = "You Matched All Three! JACKPOT!!! +75 coins";
    credits += 75; //This is where I also wasn't sure for the credits parts. Used google gemini to help with that//
  } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3){
    result.textContent = "You almost got all three! +30 coins";
    credits += 30;
  } else {
    result.textContent = "Yikes! No matches... No coins back";
  }


  document.getElementById("credits").textContent = credits;
}