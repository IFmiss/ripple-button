"use strict";
exports.__esModule = true;
var ripple_1 = require("./ripple");
var utils_1 = require("./utils");
exports.DEFAULT_DURATION = 800;
exports.DEFAULT_COLOR = 'rgba(33, 33, 33, 0.3)';
function createRipple(ele, color, durantion) {
    if (color === void 0) { color = 'rgba(0, 0, 0, 0.1)'; }
    if (durantion === void 0) { durantion = exports.DEFAULT_DURATION; }
    var rippleCount = 0;
    var init = function (event) {
        var rippleInstance;
        if (!ele)
            return;
        utils_1.addClass(ele, 'react-ripple-wrapper');
        var _a = ele.getBoundingClientRect(), top = _a.top, left = _a.left, width = _a.width, height = _a.height;
        var cx = event.clientX - left;
        var cy = event.clientY - top;
        var cr = Math.ceil(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));
        rippleInstance = new ripple_1["default"](cx, cy, cr, color, durantion);
        rippleCount++;
        ele.appendChild(rippleInstance.rippleEle);
        rippleInstance.animateEle.beginElement();
        var remove = function () {
            if (!ele)
                return;
            ele.removeEventListener('mouseup', remove);
            ele.removeEventListener('mouseout', remove);
            rippleInstance.fadeoutAnimateEle.beginElement();
            setTimeout(function () {
                rippleCount--;
                ele.removeChild(rippleInstance.rippleEle);
                if (rippleCount === 0) {
                    utils_1.removeClass(ele, 'react-ripple-wrapper');
                }
            }, durantion);
        };
        ele.addEventListener('mouseup', remove);
        ele.addEventListener('mouseout', remove);
    };
    ele && ele.addEventListener('mousedown', init);
}
exports["default"] = createRipple;
