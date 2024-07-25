var _score = 0;
var _maxupd = false;

ApiTickConnector.push(UpdateTick);

function UpdateTick() {
  UpdScreen();
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
  _score += GetMoney();
}

function GetAutoAdd(){
  return parseInt(document.getElementById("upautadd1").getAttribute("data-updlevel"),10) + parseInt(document.getElementById("upautadd2").getAttribute("data-updlevel"),10) + parseInt(document.getElementById("upautadd3").getAttribute("data-updlevel"),10);
}

function GetMoney() {
  return GetLvLOfSameType("adderbasic") * GetLvLOfSameType("multbasic");
}


