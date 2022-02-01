import React, { useEffect } from "react";

import * as styles from "../../styles/Cursor.module.css";

export default function Index({ children }) {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });

    document.addEventListener("click", () => {
      cursor.classList.add("expand");

      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    });
  }, []);

  return (
    <div>
      <div className='cursor'></div>
      <main style={{
        marginBottom: '4.5rem'
      }}>{children}</main>
    </div>
  );
}
