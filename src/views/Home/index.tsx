import React, {
  useEffect
} from 'react'

import Hello from '@components/Hello'
import './home.less'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <div className="home">
      <Hello/>
    </div>
  )
}

export default Home
