import React, {
  useEffect,
  useRef
} from 'react'
import createRipple, {
  DEFAULT_DURATION,
  DEFAULT_COLOR
} from './createRipple'
import './index.less'

interface IRippleProps {
  color?: string;
  duration?: number;
}

const Ripple: React.FC<IRippleProps> = (props) => {
  const { color, duration } = props
  const ele = useRef(null)
  
  useEffect(() => {
    createRipple(ele.current, color, duration)
  }, [ele])

  return (
    <div className='react-ripple-container' ref={ele}>
      { props.children }
    </div>
  )
}

Ripple.defaultProps = {
  color: DEFAULT_COLOR,
  duration: DEFAULT_DURATION
}

export const useRipple = createRipple
export default Ripple
