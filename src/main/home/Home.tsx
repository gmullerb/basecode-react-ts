// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.css'

export function Home(): React.ReactElement {
  return (
    <div id='home' className={styles.container}>
      <div className={styles.logo}/>
      <div className={`buttons ${styles.main}`}>
        <Link to='/async1' className='button is-link is-medium'>
          Asynchronous Counter 1
        </Link>
        <Link to='/async2' className='button is-link is-medium'>
          Asynchronous Counter 2
        </Link>
        <Link to='/rest' className='button is-link is-medium'>
          Some REST
        </Link>
      </div>
      <div className={styles.version}>{ENV.BUILD_VERSION + '.' + (process.env.NODE_ENV || 'none').substring(0, 3)}</div>
    </div>
  )
}
