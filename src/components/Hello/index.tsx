import React, {
  useEffect
} from 'react'

import classNames from 'classnames'
import './hello.less'

import {
  PROJECT_NAME
} from '@constance/index'

import RippleWrapper from '@components/Ripple/index'

interface IHelloProps {}

const Hello: React.FC<IHelloProps> = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-comp-hello`]: true
  })

  useEffect(() => {
    console.log('this is Hello components')  
  }, [])

  return (
    <div className={classString}>
      <RippleWrapper>
        <div className='btn'>react-ripple</div>
      </RippleWrapper>

      <RippleWrapper>
        <div className='btn yellow'>react-ripple</div>
      </RippleWrapper>

      <RippleWrapper>
        <div className='btn green'>react-ripple</div>
      </RippleWrapper>

      <RippleWrapper>
        <div className='btn blue'>react-ripple</div>
      </RippleWrapper>

      <RippleWrapper duration={300}>
        <div className='btn'>duration: 300ms</div>
      </RippleWrapper>

      <RippleWrapper color='rgba(255, 255, 255, 0.3)'>
        <div className='btn dark'>color: rgba(255, 255, 255, 0.3)</div>
      </RippleWrapper>
    </div>
  )
}

export default Hello
