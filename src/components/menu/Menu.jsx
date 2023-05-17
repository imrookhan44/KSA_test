import React from 'react'
import styles from './menu.module.css'
function Menu() {
  return (
    <>
      <div className={styles.menu__container}>
        <div className={styles.menu__container__item}>
          <p>
            About
          </p>
        </div>
        <div className={styles.menu__container__item}>
          <p>
            Stores
          </p>
        </div>
        <div className={styles.menu__container__item}>
          <p>
            Products
          </p>
        </div>
        <div className={styles.menu__container__item}>
          <p>
            Settings
          </p>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.icons}>
          <div className={styles.icons__item}>
            <i class="fa-solid fa-address-card" style={{
              color: "#0B3F7A"
            }}></i>&nbsp; <p>Description
            </p>
          </div>

          <div className={styles.icons__item}>
            <p>Edit
            </p>&nbsp;<i class="fa-solid fa-edit" style={{
              color: "#0B3F7A"
            }}></i>
          </div>
        </div>
        <div className={styles.description_text}>
          <p>
            Simplifying interfaces and experiences since 2012. I'm a UX/UI Designer and Front-end Developer based in Brazil. I have a passion for creating beautiful, intuitive and highly crafted solutions for my clients.
          </p>
        </div>&nbsp;
        <div className={styles.icons}>
          <div className={styles.icons__item}>
            <i class="fa-solid fa-heart" style={{
              color: "#0B3F7A"
            }}></i>&nbsp; <p>Favorite Content
            </p>
          </div>

          <div className={styles.icons__item}>
            <p>Edit
            </p>&nbsp;<i class="fa-solid fa-edit" style={{
              color: "#0B3F7A"
            }}></i>
          </div>
        </div>
        <div className={styles.boxes}>
          <p>
            UI Design
          </p>
          <p>
            UX Design
          </p>
          <p>
            Web Design
          </p>
        </div>
        <div className={styles.box}>
          <p>
            Mobile Design
          </p>
          <p>
            Front-end
          </p>
          <p>
            Back-end
          </p>
        </div>
        <div className={styles.box1}>
          <p>
            Prototyping
          </p>
          <p>
            App
          </p>
        </div>
        <div className={styles.icons}>
          <div className={styles.icons__item}>
            <i class="fa-solid fa-bell" style={{
              color: "#0B3F7A"
            }}></i> &nbsp; <p>Notifications
            </p>
          </div>
        </div>
        <div className={styles.notifications}>
          <div className={styles.notifications__item}>
            <p>
              <i className="fa-solid fa-circle-check" style={{ color: '#038856' }} />
              &nbsp; <span>There are no notifications about your account
              </span>
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Menu