"use strict";
exports.__esModule = true;
var react_1 = require("react");
var createRipple_1 = require("./createRipple");
require("./index.less");
var Ripple = function (props) {
    var color = props.color, duration = props.duration;
    var ele = react_1.useRef(null);
    react_1.useEffect(function () {
        createRipple_1["default"](ele.current, color, duration);
    }, [ele]);
    return (<div className='react-ripple-container' ref={ele}>
      {props.children}
    </div>);
};
Ripple.defaultProps = {
    color: createRipple_1.DEFAULT_COLOR,
    duration: createRipple_1.DEFAULT_DURATION
};
exports.useRipple = createRipple_1["default"];
exports["default"] = Ripple;
