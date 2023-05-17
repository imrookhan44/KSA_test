import React from 'react'
import styles from './signup.module.css'
import logo from './../../assets/logo.png'
import blue from './../../assets/Card 02.png'
function SignUp() {
  return (
    <>
      <div className={styles.main__div}>
        <div className={styles.white__div}>
          <div className={styles.image__logo}>
            <img src={logo} alt="Instagram Logo" />
            <h2>Brands.io</h2>
          </div>
          <div className={styles.signup__form}>
            <div className={styles.buttons}>
              <button className={styles.login__button}>Log In</button>
              <button className={styles.signup__button}>Sign Up</button>
            </div>
            <div className={styles.text}>
              Text Text Text Text
            </div>
            <div className={styles.bottom__button}>
              <button className={styles.signup__buttonBottom}>Sign Up</button>
            </div>
          </div>
          <footer>
            <div className={styles.footer_text}>
              <p>
                Copy right c Brand Inc. 2023 - All Rights Reserved
              </p>

            </div>
          </footer>
        </div>
        <div className={styles.blue__div}>
          <div className={styles.blue__div_image}>
            <img src={blue} alt="pic" />
          </div>
          <div className={styles.blue__div_text}>
            <h2>Text Text Text Text</h2>
          </div>
          <div className={styles.navigation__dots}>
            <div className={styles.navigationDots}>
              <div style={{ color: "white", fontWeight: "bold", fontSize: "20px" }} className={styles.less}>&#62;</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dotActive} />
              <div className={styles.dot} />
              <div className={styles.dot} />
              <span style={{ color: "white", marginLeft: "100px", fontWeight: "bold", fontSize: "20px" }}>&gt;</span>
            </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default SignUp