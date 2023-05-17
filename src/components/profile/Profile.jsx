import React, { useState } from 'react'
import styles from './profile.module.css'
import Menu from '../menu/Menu'
import image from './../../assets/20-removebg-preview.png'
import image2 from './../../assets/Rectangle98.png'
import image3 from './../../assets/Icon material-color-lens.png'
function Profile() {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className={styles.head__profile}>
        <p>
          My Profile
        </p>
      </div>
      <div>
        <div className={styles.profile__container}>
          <div className={styles.design_image} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setShow(true
          )}>
            <img src={image3} alt="" className={styles.image} />
          </div>
          <div className={styles.profile__container__image}>
            <div className={styles.images_div}>
              <img src={image2} alt="" className={styles.image2} />
              <img src={image} alt="" className={styles.image1} />
              <div className={styles.border_div}>
              </div>
              <div className={styles.name_div}>
                <p >Rayan Sharif</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Menu />
      {
        show ? <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" centered>
          <div className="modal-dialog">
            <div className="modal-content" style={{ height: "90vh" }}>
              <div className="modal-header" style={{ display: "flex", justifyContent: "center", borderBottom: "none" }}>
                <div className={styles.modal_header__item}>
                  <p>Select Theme</p>
                </div>
              </div>
              <div className={styles.color_inputs}>
                <div className={styles.color_inputs__item}>
                  <input type='color' value="#7C34DB" className={styles.color1} />
                </div>
                <div className={styles.color_inputs__item}>
                  <input type='color' value="#DB34D0" className={styles.color1} />
                </div>
                <div className={styles.color_inputs__item}>
                  <input type='color' value="#FF3169" className={styles.color1} />
                </div>
                <div className={styles.color_inputs__item}>
                  <input type='color' value="#FC5F2E" className={styles.color1} />
                </div>
                <div className={styles.color_inputs__item}>
                  <input type='color' value="#F8D212" className={styles.color1} />
                </div>
              </div>&nbsp;
              <div className={styles.color_inputs}>
                <div className={styles.color_inputs__item}>
                  <input type='color' value="#3F5DF5" className={styles.color1} />
                </div>
                <div className={styles.color_inputs__item}>
                  <input type='color' value="#34CFFF" className={styles.color1} />
                </div>
                <div className={styles.color_inputs__item}>
                  <input type='color' value="#008223" className={styles.color1} />
                </div>
                <div className={styles.color_inputs__item}>
                  <input type='color' value="#A2A2A2" className={styles.color1} />
                </div>
                <div className={styles.color_inputs__item}>
                  <input type='color' value="#505050" className={styles.color1} />
                </div>
              </div>
              <div className={styles.avatar_text}>
                <p>Select Avatar</p>
              </div>
              <div className={styles.avatar_images}>
                <div className={styles.avatar_images__item}>
                </div>
                <div className={styles.avatar_images__item}>
                </div>
                <div className={styles.avatar_images__item}>
                </div>
              </div>&nbsp;
              <div className={styles.avatar_images}>
                <div className={styles.avatar_images__item}>
                </div>
                <div className={styles.avatar_images__item}>
                </div>
                <div className={styles.avatar_images__item}>
                </div>
              </div>&nbsp;
              <div className={styles.avatar_images}>
                <div className={styles.avatar_images__item}>
                </div>
                <div className={styles.avatar_images__item}>
                </div>
                <div className={styles.avatar_images__item}>
                </div>
              </div>
            </div>
          </div>
        </div>
          : ""
      }
    </>
  )
}

export default Profile