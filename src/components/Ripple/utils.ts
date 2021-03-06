/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
export function hasClass(el: HTMLElement, className: string) {
  return el.classList.contains(className);
}
/**
* @description 判断元素是否存在某个class类
* @param { HTMLElement } el dom元素
* @param { String } className class名称
* @example
* hasClass(document.body, 'd-utils')
*/
export function addClass(el: HTMLElement, className: string) {
  if (Array.isArray(className)) {
      className.forEach((item) => {
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
/**
* @description 元素删除class
* @param { HTMLElement } el dom元素
* @param { (String | Array) } className class名称，可以是多个
* @example
* removeClass(document.body, 'd-utils')
*/
export function removeClass(el: HTMLElement, className: string) {
  if (Array.isArray(className)) {
      className.forEach((item) => {
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