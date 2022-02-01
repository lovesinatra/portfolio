import React, { useEffect } from "react";

import * as styles from "../../styles/Cursor.module.css";

export default function Index({ children }) {
  return (
    <div>
      <div className='cursor'></div>
      <main style={{
        marginBottom: '4.5rem'
      }}>{children}</main>
    </div>
  );
}
