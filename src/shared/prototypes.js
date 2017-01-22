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

