import React, { useEffect } from 'react';
import classNames from 'classnames';
import './hello.less';
import { PROJECT_NAME } from '@constance/index';
import RippleWrapper from '@components/Ripple/main';
var Hello = function () {
    var _a;
    var classString = classNames((_a = {},
        _a[PROJECT_NAME + "-comp-hello"] = true,
        _a));
    useEffect(function () {
        console.log('this is Hello components');
    }, []);
    return (
    // <div className={classString}>Hello Tiga</div>
    <RippleWrapper>
      <div>1111</div>
    </RippleWrapper>);
};
export default Hello;
