import React from 'react';

import * as styles from '../../src/styles/Button.module.css'

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>
}

