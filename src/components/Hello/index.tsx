import React, {
  useEffect, useState
} from 'react'

import classNames from 'classnames'
import './hello.less'

import {
  PROJECT_NAME
} from '@constance/index'

import RippleWrapper from '@components/Ripple/index'
import createRipple from '@components/Ripple/createRipple'

interface IHelloProps {}

const Hello: React.FC<IHelloProps> = () => {
  const [disableRipple, setDisableRipple] = useState(false);
  const classString = classNames({
    [`${PROJECT_NAME}-comp-hello`]: true
  })

  return (
    <div className={classString}>
      <p className='title'>Ripple-Button</p>
      <p style={{
        padding: '10px',
        textAlign: 'center'
      }} onClick={() => setDisableRipple(r => !r)}>
        click me to toggle: { disableRipple ? 'disabled' : 'can click'}
      </p>
      <RippleWrapper disabled={disableRipple}>
        <div className='btn'>react-ripple</div>
      </RippleWrapper>

      <RippleWrapper disabled={disableRipple}>
        <div className='btn yellow'>react-ripple</div>
      </RippleWrapper>

      <RippleWrapper disabled={disableRipple}>
        <div className='btn green'>react-ripple</div>
      </RippleWrapper>

      <RippleWrapper disabled={disableRipple}>
        <div className='btn blue'>react-ripple</div>
      </RippleWrapper>

      <RippleWrapper duration={300} disabled={disableRipple}>
        <div className='btn'>duration: 300ms</div>
      </RippleWrapper>

      <RippleWrapper color='rgba(255, 255, 255, 0.3)' disabled={disableRipple}>
        <div className='btn dark'>color: rgba(255, 255, 255, 0.3)</div>
      </RippleWrapper>
    </div>
  )
}

export default Hello
