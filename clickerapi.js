var ApiTickConnector = [() => {}, () => {}];

var OnApiTick = () => {
  ApiTickConnector.forEach((element) => {
    element();
  });
};

function Reset(){
  localStorage.clear();
  location.reload();
}

function Setup() {
  TryLoad();
}

function TryLoad() {
  const saveData = JSON.parse(localStorage.getItem("saveData")) || {};

  for (const upgradeId in saveData) {
    const upgrade = document.getElementById(upgradeId);
    if (upgrade) {
      upgrade.setAttribute("data-updlevel", saveData[upgradeId].level);
      upgrade.setAttribute("data-cost", saveData[upgradeId].cost);
      upgrade.textContent = `${upgrade.getAttribute("data-updname")} $${
        saveData[upgradeId].cost
      } Level: ${saveData[upgradeId].level}`;
    }
  }
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

    upgrade.setAttribute(
      "data-updlevel",
      parseInt(upgrade.getAttribute("data-updlevel"), 10) + 1
    );

    upgrade.textContent =
      upgrade.getAttribute("data-updname") +
      " $" +
      upgrade.getAttribute("data-cost") +
      "  Level:" +
      upgrade.getAttribute("data-updlevel");

    const saveData = JSON.parse(localStorage.getItem("saveData")) || {};
    saveData[upgrade.id] = {
      level: parseInt(upgrade.getAttribute("data-updlevel"), 10),
      cost: parseFloat(upgrade.getAttribute("data-cost")),
    };
    localStorage.setItem("saveData", JSON.stringify(saveData));
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

function MovBar() {}

function Exponent(number, exponent) {
  let rt = number;
  for (let index = 0; index < exponent - 1; index++) {
    rt *= number;
  }
  return rt;
}

setInterval(OnApiTick, 25);
Setup();
