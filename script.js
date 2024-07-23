let _cgadderm = 5;
let _cgmultm = 15;
let _cgscore = 0;
let _cgscorea1 = 1;
let _cgscorea2 = 0;
let _cgscorea3 = 0;
let _cgscorem1 = 1;
let _cgscorem2 = 1;
let _cgscorem3 = 1;
var _cgtimer = setInterval(UpdateTick, 25);
function UpdateTick() {
  UpdateScreen();
}
function Exponent(number, exponent) {
  let rt = number;
  for (let index = 0; index < exponent - 1; index++) {
    rt *= number;
  }
}
function UpdateScreen() {
  document.getElementsByClassName("mcounter")[0].textContent =
    "Money:" + _cgscore + "$";
  document.getElementsByClassName("upadd1")[0].textContent =
    "Upgrade Adder " + _cgscorea1 * _cgadderm + "$";
  document.getElementsByClassName("upadd2")[0].textContent =
    "Upgrade Adder " + _cgscorea2 * _cgadderm + "$";
  document.getElementsByClassName("upadd3")[0].textContent =
    "Upgrade Adder " + _cgscorea3 * _cgadderm + "$";
  document.getElementsByClassName("upmul1")[0].textContent =
    "Upgrade Multipilier " + _cgscorem1 * _cgmultm + "$";
  document.getElementsByClassName("upmul2")[0].textContent =
    "Upgrade Multipilier " + _cgscorem2 * _cgmultm + "$";
  document.getElementsByClassName("upmul3")[0].textContent =
    "Upgrade Multipilier " + _cgscorem3 * _cgmultm + "$";
  document.getElementsByClassName("mamount")[0].textContent =
    "Multipilier:" + GetMult() + "x";
  document.getElementsByClassName("aamount")[0].textContent =
    "Adder:" + GetAdd();
}
function SafeRefresh() {}
function OnBtnClick() {
  _cgscore += GetMoney();
}
function GetMult() {
  return _cgscorem1 * _cgscorem2 * _cgscorem3;
}
function GetAdd() {
  return _cgscorea1 + _cgscorea2 + _cgscorea3;
}
function GetMoney() {
  return (
    (_cgscorea1 + _cgscorea2 + _cgscorea3) *
    (_cgscorem1 * _cgscorem2 * _cgscorem3)
  );
}
function UpgradeAdder1() {
  let worth = _cgscorea1 * _cgadderm;
  if (_cgscore >= worth) {
    _cgscore -= worth;
    _cgscorea1++;
    _cgadderm++;
  }
}
function UpgradeAdder2() {
  let worth = _cgscorea2 * _cgadderm;
  if (_cgscore >= worth) {
    _cgscore -= worth;
    _cgscorea2++;
    _cgadderm++;
  }
}
function UpgradeAdder3() {
  let worth = _cgscorea3 * _cgadderm;
  if (_cgscore >= worth) {
    _cgscore -= worth;
    _cgscorea3++;
    _cgadderm++;
  }
}
function UpgradeMult1() {
  let worth = _cgscorem1 * _cgmultm;
  if (_cgscore >= worth) {
    _cgscore -= worth;
    _cgscorem1++;
    _cgmultm++;
  }
}
function UpgradeMult2() {
  let worth = _cgscorem2 * _cgmultm;
  if (_cgscore >= worth) {
    _cgscore -= worth;
    _cgscorem2++;
    _cgmultm++;
  }
}
function UpgradeMult3() {
  let worth = _cgscorem3 * _cgmultm;
  if (_cgscore >= worth) {
    _cgscore -= worth;
    _cgscorem3++;
    _cgmultm++;
  }
}
