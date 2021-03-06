'use strict';

function ServingOrder(servingOrder) {
  this.servingOrder = servingOrder;
  this.currentServer = 0;
  return this;
}

ServingOrder.prototype.toServe = function() {
  return this.servingOrder[this.currentServer];
};

ServingOrder.prototype.nextServer = function() {
  if (this.servingOrder.length === (this.currentServer + 1)) {
    this.currentServer = 0;
    return this.servingOrder[this.currentServer];
  }
  return this.servingOrder[++this.currentServer];
};

module.exports = ServingOrder;
