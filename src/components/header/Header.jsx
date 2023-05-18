import React, { useState } from 'react'
import styles from './header.module.css'
import logo from './../../assets/logo.png'
import Reset from '../resetpassword/Reset'
import ResetPassword from '../resepassword/ResetPassword'
import Login from '../login/Login'
import SignUp from '../signup/SignUp'
import Profile from '../profile/Profile'
function Header() {
  const [show, setShow] = useState(1)
  return (
    <>
      <div className={styles.navbar}>
        {/* Navbar logo */}
        <div className={styles.navHeader}>
          <div className={styles.navLogo}>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
        {/* Navbar items */}
        <div className={styles.navLinks}>
          <a onClick={() => setShow(1)} >Home</a>
          <a onClick={() => setShow(2)}>Reset Password</a>
          <a onClick={() => setShow(3)}>Login</a>
          <a onClick={() => setShow(4)}>Signup</a>
          <a onClick={() => setShow(5)}>Profile</a>
        </div>
      </div>
      {show === 1 && <Reset />
      }
      {show === 2 && <ResetPassword />
      }
      {show === 3 && <Login />
      }
      {show === 4 && <SignUp />
      }
      {show === 5 && <Profile />
      }
    </>
  )
}

export default Header