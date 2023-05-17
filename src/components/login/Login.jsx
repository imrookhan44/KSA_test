import React from 'react'
import styles from './login.module.css'
import logo from './../../assets/logo.png'
import blue from './../../assets/Card 02.png'
function Login() {
  return (
    <>
      <div className={styles.main__div}>
        <div className={styles.white__div}>
          <div className={styles.image__logo}>
            <img src={logo} alt="Instagram Logo" />
            <h2>Brands.io</h2>
          </div>
          <div className={styles.language} style={{ marginBottom: "10px" }}>
            <div className={styles.lang}>
              Language    </div> | <div style={{ display: "flex", marginLeft: "10px", alignItems: "center", justifyContent: "center" }}><div className={styles.flag_language}></div>&nbsp;
              <p style={{ marginTop: "20px" }}>English</p>
            </div>

          </div>
          <div className={styles.signup__form}>
            <div className={styles.buttons}>
              <button className={styles.login__button}>Log In</button>
              <button className={styles.signup__button}>Sign Up</button>
            </div>
            <div className={styles.reset}>
              <h2>Login</h2>
            </div>
            <div className={styles.text}>
              Text Text Text Text Text Text
            </div>
            <div className={styles.inputs_div}>
              <div className={styles.input_email}>
                <input type="text" placeholder="Email" style={{ width: "250px" }} />
              </div>
              <div className={styles.input_email}>
                <input type="password" placeholder="password" style={{ width: "250px" }} />
              </div>
              <div className={styles.checkbox_input}>
                <input type="checkbox" />
                <p>Remember me</p>
                <div className={styles.forgot_password}>
                  <p>Forgot Password?</p>
                </div>
              </div>
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
          </div>
          <div className={styles.blue__div_text}>
            <h2>Text Text Text Text</h2>
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

export default Login