var _score = 0;

var _globtimer = setInterval(UpdateTick, 25);

function UpdateTick() {
  UpdScreen();
}

function UpdScreen(){
    document.getElementById("mcounter").textContent = "Money: $" + _score;
    document.getElementById("mamount").textContent = "Multiplier: $" + GetMult();
    document.getElementById("aamount").textContent = "Addition: $" + GetAdd();
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

function GetMult() {
  return parseInt(document.getElementById("upmul1").getAttribute("data-updlevel"),10) * parseInt(document.getElementById("upmul2").getAttribute("data-updlevel"),10) * parseInt(document.getElementById("upmul3").getAttribute("data-updlevel"),10);
}

function GetAdd() {
  return parseInt(document.getElementById("upadd1").getAttribute("data-updlevel"),10) + parseInt(document.getElementById("upadd2").getAttribute("data-updlevel"),10) + parseInt(document.getElementById("upadd3").getAttribute("data-updlevel"),10);
}

function GetMoney() {
  return GetAdd() * GetMult();
}

function UpdUpgrade(upgrade) {
  if(_score >= parseInt(upgrade.getAttribute("data-cost"),10)) {
    _score -= parseInt(upgrade.getAttribute("data-cost"),10);
    upgrade.setAttribute("data-cost", Exponent(parseInt(upgrade.getAttribute("data-cost"),10) * parseFloat(upgrade.getAttribute("data-costm"),parseFloat(upgrade.getAttribute("data-coste"),10)),10));
    upgrade.textContent = upgrade.getAttribute("data-updname") + " $" + upgrade.getAttribute("data-cost") + "  Level:" + upgrade.getAttribute("data-updlevel");
    upgrade.setAttribute("data-updlevel") += 1;
  }
}
