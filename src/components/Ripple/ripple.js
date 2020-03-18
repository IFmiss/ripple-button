"use strict";
exports.__esModule = true;
var createRipple_1 = require("./createRipple");
var Ripple = /** @class */ (function () {
    function Ripple(x, y, r, color, duration) {
        if (color === void 0) { color = createRipple_1.DEFAULT_COLOR; }
        if (duration === void 0) { duration = createRipple_1.DEFAULT_DURATION; }
        this.x = x;
        this.r = r;
        this.y = y;
        this.color = color;
        this.duration = duration;
        this.initRipple();
    }
    Ripple.prototype.initRipple = function () {
        // init svg
        this.rippleEle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.rippleEle.setAttribute('class', 'react-ripple');
        // init circle
        this.circleEle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.circleEle.setAttribute('cx', this.x.toString());
        this.circleEle.setAttribute('cy', this.y.toString());
        this.circleEle.setAttribute('r', '0');
        this.circleEle.setAttribute('fill', this.color);
        // init animate
        this.animateEle = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        this.animateEle.setAttribute('attributeName', 'r');
        this.animateEle.setAttribute('dur', this.duration + "ms");
        this.animateEle.setAttribute('fill', 'freeze');
        this.animateEle.setAttribute('begin', 'indefinite');
        this.animateEle.setAttribute('to', this.r.toString());
        // init fadeoutAnimate
        this.fadeoutAnimateEle = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        this.fadeoutAnimateEle.setAttribute('attributeName', 'opacity');
        this.fadeoutAnimateEle.setAttribute('dur', this.duration + "ms");
        this.fadeoutAnimateEle.setAttribute('fill', 'freeze');
        this.fadeoutAnimateEle.setAttribute('begin', 'indefinite');
        this.fadeoutAnimateEle.setAttribute('to', '0');
        // append svg
        this.circleEle.appendChild(this.animateEle);
        this.circleEle.appendChild(this.fadeoutAnimateEle);
        this.rippleEle.appendChild(this.circleEle);
    };
    return Ripple;
}());
exports["default"] = Ripple;
