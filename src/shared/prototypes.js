/* eslint no-extend-native: "off" */
Object.defineProperty(Object.prototype, 'getJson', {
  value: function getJson() {
    return JSON.stringify(this);
  },
  enumerable: false
});


