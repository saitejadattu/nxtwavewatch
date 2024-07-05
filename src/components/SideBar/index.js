import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {TiHome} from 'react-icons/ti'
import {GiFlamer} from 'react-icons/gi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import AppContext from '../../context/AppContext'
import './index.css'

class SideBar extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark, activeBtn, changeActiveBtn} = value
          const onClickHome = id => {
            changeActiveBtn(id)
          }
          return (
            <div
              className={
                isDark
                  ? 'active-dark-banner-main-container'
                  : 'banner-main-container'
              }
            >
              <div className="main-container">
                <div className="side-container">
                  <Link to="/">
                    <button
                      type="button"
                      onClick={() => onClickHome(1)}
                      className={
                        isDark
                          ? `button ${
                              activeBtn === 1 && isDark === true
                                ? 'activeDarkButton'
                                : 'inactiveDarkButton'
                            }`
                          : `button ${
                              activeBtn === 1 && isDark === false
                                ? 'activeButton'
                                : ''
                            }`
                      }
                    >
                      <TiHome
                        className={
                          isDark
                            ? `menu-icon ${
                                activeBtn === 1 ? 'activeIcon' : 'inactiveIcon'
                              }`
                            : `menu-icon ${activeBtn === 1 ? 'activeIcon' : ''}`
                        }
                      />
                      <p
                        className={
                          isDark
                            ? `para ${
                                activeBtn === 1
                                  ? 'activeDarkPara'
                                  : 'inactiveDarkPara'
                              }`
                            : `para ${activeBtn === 1 ? 'activePara' : ''}`
                        }
                      >
                        Home
                      </p>
                    </button>
                  </Link>
                  <Link to="/trending">
                    <button
                      type="button"
                      onClick={() => onClickHome(2)}
                      className={
                        isDark
                          ? `button ${
                              activeBtn === 2 && isDark === true
                                ? 'activeDarkButton'
                                : 'inactiveDarkButton'
                            }`
                          : `button ${
                              activeBtn === 2 && isDark === false
                                ? 'activeButton'
                                : ''
                            }`
                      }
                    >
                      <GiFlamer
                        className={
                          isDark
                            ? `menu-icon ${
                                activeBtn === 2 ? 'activeIcon' : 'inactiveIcon'
                              }`
                            : `menu-icon ${activeBtn === 2 ? 'activeIcon' : ''}`
                        }
                      />
                      <p
                        className={
                          isDark
                            ? `para ${
                                activeBtn === 2
                                  ? 'activeDarkPara'
                                  : 'inactiveDarkPara'
                              }`
                            : `para ${activeBtn === 2 ? 'activePara' : ''}`
                        }
                      >
                        Trending
                      </p>
                    </button>
                  </Link>
                  <Link to="/gaming">
                    <button
                      type="button"
                      onClick={() => onClickHome(3)}
                      className={
                        isDark
                          ? `button ${
                              activeBtn === 3 && isDark === true
                                ? 'activeDarkButton'
                                : 'inactiveDarkButton'
                            }`
                          : `button ${
                              activeBtn === 3 && isDark === false
                                ? 'activeButton'
                                : ''
                            }`
                      }
                    >
                      <SiYoutubegaming
                        className={
                          isDark
                            ? `menu-icon ${
                                activeBtn === 3 ? 'activeIcon' : 'inactiveIcon'
                              }`
                            : `menu-icon ${activeBtn === 3 ? 'activeIcon' : ''}`
                        }
                      />
                      <p
                        className={
                          isDark
                            ? `para ${
                                activeBtn === 3
                                  ? 'activeDarkPara'
                                  : 'inactiveDarkPara'
                              }`
                            : `para ${activeBtn === 3 ? 'activePara' : ''}`
                        }
                      >
                        Gaming
                      </p>
                    </button>
                  </Link>
                  <Link to="/saved-videos">
                    <button
                      type="button"
                      onClick={() => onClickHome(4)}
                      className={
                        isDark
                          ? `button ${
                              activeBtn === 4 && isDark === true
                                ? 'activeDarkButton'
                                : 'inactiveDarkButton'
                            }`
                          : `button ${
                              activeBtn === 4 && isDark === false
                                ? 'activeButton'
                                : ''
                            }`
                      }
                    >
                      <RiMenuAddLine
                        className={
                          isDark
                            ? `menu-icon ${
                                activeBtn === 4 ? 'activeIcon' : 'inactiveIcon'
                              }`
                            : `menu-icon ${activeBtn === 4 ? 'activeIcon' : ''}`
                        }
                      />
                      <p
                        className={
                          isDark
                            ? `para ${
                                activeBtn === 4
                                  ? 'activeDarkPara'
                                  : 'inactiveDarkPara'
                              }`
                            : `para ${activeBtn === 4 ? 'activePara' : ''}`
                        }
                      >
                        Saved Videos
                      </p>
                    </button>
                  </Link>
                </div>
                <div className="down-text-container">
                  <p
                    className={
                      isDark ? 'activecontact-us-text' : 'contact-us-text'
                    }
                  >
                    CONTACT US
                  </p>
                  <div className="info-icons-container">
                    <img
                      className="info-icons"
                      alt="facebook logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    />
                    <img
                      className="info-icons"
                      alt="twitter logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    />
                    <img
                      className="info-icons"
                      alt="linked in logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    />
                  </div>
                  <p className={isDark ? 'active-text' : 'inactive-text'}>
                    Enjoy! Now to see your channels and recommendations!
                  </p>
                </div>
              </div>
            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default withRouter(SideBar)
