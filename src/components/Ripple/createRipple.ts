import Ripple, {
  IRipple
} from './ripple'

import {
  addClass,
  removeClass
} from './utils'

export const DEFAULT_DURATION = 800
export const DEFAULT_COLOR = 'rgba(33, 33, 33, 0.3)'

export default function createRipple (ele: HTMLElement | null, color: string = 'rgba(0, 0, 0, 0.1)', durantion: number = DEFAULT_DURATION) {
  let rippleCount = 0

  const init = (event: Event | any) => {
    let rippleInstance: IRipple
    if (!ele) return
    addClass(ele, 'react-ripple-wrapper')
    const {
      top,
      left,
      width,
      height
    } = ele.getBoundingClientRect()

    const cx = event.clientX - left;
    const cy = event.clientY - top;
    const cr = Math.ceil(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));
    rippleInstance = new Ripple(cx, cy, cr, color, durantion)

    rippleCount ++
    ele.appendChild(rippleInstance.rippleEle);
    (rippleInstance.animateEle as any).beginElement()
  
    const remove = () => {
      if (!ele) return
      ele.removeEventListener('mouseup', remove);
      ele.removeEventListener('mouseout', remove);

      (rippleInstance.fadeoutAnimateEle as any).beginElement();
  
      setTimeout(() => {
        rippleCount --
        ele.removeChild(rippleInstance.rippleEle);
        if (rippleCount === 0) {
          removeClass(ele, 'react-ripple-wrapper')
        }
      }, durantion)
    }

    ele.addEventListener('mouseup', remove);
    ele.addEventListener('mouseout', remove);
  }

  ele && ele.addEventListener('mousedown', init)
}