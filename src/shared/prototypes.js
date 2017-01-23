/* eslint no-extend-native: "off" */
Object.defineProperty(Object.prototype, 'toJson', {
  value: function toJson() {
    return JSON.stringify(this);
  },
  enumerable: false
});

String.prototype.toObject = String.prototype.toObject || function toObject() {
  return JSON.parse(this);
};

Number.prototype.roundMoney = Number.prototype.toObject || function roundMoney(decimals = 2) {
  return Number((Math.round(this + "e" + decimals) + "e-" + decimals));
};

Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
  places = !isNaN(places = Math.abs(places)) ? places : 2;
  symbol = symbol !== undefined ? symbol : "$";
  thousand = thousand || ",";
  decimal = decimal || ".";
  let number = this,
    negative = number < 0 ? "-" : "",
    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};
