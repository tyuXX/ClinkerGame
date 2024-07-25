ApiTickConnector.push(UpdateTick);

function UpdateTick() {
  UpdScreen();
  AddMoney(GetLvLOfSameType("autobasic"));
}

function UpdScreen(){
    document.getElementById("mcounter").textContent = "Money: $" + _score;
    document.getElementById("mamount").textContent = "Multiplier: X" + GetLvLOfSameType("multbasic");
    document.getElementById("aamount").textContent = "Addition: +" + GetLvLOfSameType("adderbasic");
}

function Exponent(number, exponent) {
  let rt = number;
  for (let index = 0; index < exponent - 1; index++) {
    rt *= number;
  }
  return rt;
}

function OnBtnClick() {
  AddMoney(GetMoney());
}

function AddMoney(inte){
  _score += inte;
  FillBar("levelbar",inte);
}

function GetMoney() {
  return GetLvLOfSameType("adderbasic") * GetLvLOfSameType("multbasic");
}

SetupBar("levelbar");

