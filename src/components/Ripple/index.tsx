import React, {
  useEffect,
  useRef
} from 'react'
import createRipple, {
  DEFAULT_DURATION,
  DEFAULT_COLOR
} from './createRipple'
import './index.less'
import PropTypes from 'prop-types';

interface IRippleProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  duration?: number;
  disabled?: boolean;
}

const Ripple: React.FC<IRippleProps> = (props) => {
  const {
    color,
    duration,
    disabled
  } = props;
  const ele = useRef(null);
  
  useEffect(() => {
    if (!disabled) {
      return createRipple(ele.current, color, duration);
    }
  }, [ele, disabled])

  return (
    <div className='react-ripple-container'
      ref={ele}
      {...props}>
      { props.children }
    </div>
  )
}

Ripple.defaultProps = {
  color: DEFAULT_COLOR,
  duration: DEFAULT_DURATION,
  disabled: false
}

Ripple.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  disabled: PropTypes.bool
}

export const useRipple = createRipple
export default Ripple
