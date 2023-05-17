import React from 'react'
import styles from './reset.module.css'
import logo from './../../assets/logo.png'
import blue from './../../assets/Card 02.png'
function Reset() {
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
            <div className={styles.reset}>
              <h2>Reset Password</h2>
            </div>
            <div className={styles.text}>
              Text Text Text Text Text Text
            </div>
            <div className={styles.main__div_email}>
              <div className={styles.resend}>
                <p className={styles.first}>Phone</p>
              </div>
              <div className={styles.reset_email}>
                <p className={styles.second}>Email</p>
              </div>
            </div>
            <div className={styles.phoneInput}>
              <div className={styles.flag}>
                <span>+966</span>
                <div className={styles.flag__color} ></div>

              </div>|
              <input type="text" placeholder="Enter phone number" className={styles.input} />
            </div>

            <div className={styles.bottom__button}>
              <button className={styles.signup__buttonBottom}>Login</button>
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
            <div className={styles.blue__div_text}>
              <h2>Text Text Text Text</h2>
            </div>
          </div>

          <div className={styles.navigation__dots}>
            <div className={styles.navigationDots}>
              {/* <span style={{ color: "white" }} className={styles.less}>&#62;</span> */}
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

export default Reset