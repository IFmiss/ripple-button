"use strict";
exports.__esModule = true;
/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
function hasClass(el, className) {
    return el.classList.contains(className);
}
exports.hasClass = hasClass;
/**
* @description 判断元素是否存在某个class类
* @param { HTMLElement } el dom元素
* @param { String } className class名称
* @example
* hasClass(document.body, 'd-utils')
*/
function addClass(el, className) {
    if (Array.isArray(className)) {
        className.forEach(function (item) {
            if (!hasClass(el, item)) {
                el.classList.add(item);
            }
        });
        return;
    }
    if (!hasClass(el, className)) {
        el.classList.add(className);
    }
}
exports.addClass = addClass;
/**
* @description 元素删除class
* @param { HTMLElement } el dom元素
* @param { (String | Array) } className class名称，可以是多个
* @example
* removeClass(document.body, 'd-utils')
*/
function removeClass(el, className) {
    if (Array.isArray(className)) {
        className.forEach(function (item) {
            if (hasClass(el, item)) {
                el.classList.remove(item);
            }
        });
        return;
    }
    if (hasClass(el, className)) {
        el.classList.remove(className);
    }
}
exports.removeClass = removeClass;
