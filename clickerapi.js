var ApiTickConnector = [()=>{},()=>{}];

var OnApiTick = ()=>{ApiTickConnector.forEach((element) => {
    element();
});}


function Setup(){

}

function UpdUpgrade(upgrade) {
  if (_score >= parseInt(upgrade.getAttribute("data-cost"), 10)) {
    _score -= parseInt(upgrade.getAttribute("data-cost"), 10);
    upgrade.setAttribute(
      "data-cost",
      Exponent(
        parseInt(upgrade.getAttribute("data-cost"), 10) *
          parseFloat(upgrade.getAttribute("data-costm"), 10),
        parseFloat(upgrade.getAttribute("data-coste"), 10)
      )
    );
    upgrade.textContent =
      upgrade.getAttribute("data-updname") +
      " $" +
      upgrade.getAttribute("data-cost") +
      "  Level:" +
      upgrade.getAttribute("data-updlevel");
    upgrade.setAttribute(
      "data-updlevel",
      parseInt(upgrade.getAttribute("data-updlevel"), 10) + 1
    );
  }
}

function GetLvLOfSameType(type) {
  let rt = 0;
  const upgrades = document.getElementsByClassName("upgrade");

  for (let i = 0; i < upgrades.length; i++) {
    const element = upgrades[i];
    const upgradeType = element.getAttribute("data-updtype");
    if (upgradeType === type) {
      rt += parseInt(element.getAttribute("data-updlevel"), 10);
    }
  }

  return rt;
}


function MovBar(){

}

function Exponent(number, exponent) {
  let rt = number;
  for (let index = 0; index < exponent - 1; index++) {
    rt *= number;
  }
  return rt;
}

setInterval(OnApiTick, 25);