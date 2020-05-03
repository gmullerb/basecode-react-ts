// Copyright (c) 2020 Gonzalo Müller Bravo.
import * as React from 'react'

import styles from './ErrorDetail.css'

interface Props {
  msj: string;
  aid: string;
}

export function ErrorDetail({ msj, aid }: Readonly<Props>): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.centered}>
        <div className={styles.alert}/>
        <h1>{msj}</h1>
        <h2>{aid}</h2>
      </div>
    </div>
  )
}
