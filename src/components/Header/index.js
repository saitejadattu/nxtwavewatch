import AppContext from '../../context/AppContext'
import {
  Ul,
  Div,
  Button,
  LogDiv,
  NxtImg,
  HeaderDiv,
  FiSunIcon,
  FaMoonIcon,
  DivPop,
  Image,
  PopupDiv,
} from './styledComponents'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
const Header = props => {
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const onClickChangeTheme = () => {
          changeTheme()
        }
        let imgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const onClickLogOut = () => {
          const {history} = props
          history.replace('/login')
          Cookies.remove('jwt_token')
        }
        return (
          <HeaderDiv bgColor={isDark ? '#212121' : '#f4f4f4'}>
            <Ul>
              <Link to='/'>
                <LogDiv>
                  <NxtImg alt='website logo' src={imgUrl} />
                </LogDiv>
              </Link>
              <LogDiv>
                <Button
                  type='button'
                  bw='0px'
                  bgColor='transparent'
                  onClick={onClickChangeTheme}
                  data-testid='theme'
                >
                  {isDark ? (
                    <FiSunIcon color={isDark ? 'white' : ''} />
                  ) : (
                    <FaMoonIcon color={isDark ? 'white' : ''} />
                  )}
                </Button>
                <LogDiv>
                  <Image
                    alt='profile'
                    src='https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'
                  />
                </LogDiv>
                <LogDiv>
                  <Popup
                    modal
                    trigger={
                      <Button
                        type='button'
                        color={isDark ? 'white' : 'blue'}
                        bc={isDark ? 'white' : 'blue'}
                        bgColor='transparent'
                      >
                        Logout
                      </Button>
                    }
                  >
                    {close => (
                      <PopupDiv
                        bgColor='transparent'
                        height='150vh'
                        display='flex'
                        fd='column'
                        jc='center'
                        ai='center'
                      >
                        <DivPop
                          height='40vh'
                          bgColor={isDark ? '#212121' : '#ffffff'}
                        >
                          <p color={isDark ? 'white' : 'black'}>
                            Are you sure, you want to logout?
                          </p>
                          <Div>
                            <button type='button' onClick={() => close()}>
                              Cancel
                            </button>
                            <button type='button' onClick={onClickLogOut}>
                              Confirm
                            </button>
                          </Div>
                        </DivPop>
                      </PopupDiv>
                    )}
                  </Popup>
                </LogDiv>
              </LogDiv>
            </Ul>
          </HeaderDiv>
        )
      }}
    </AppContext.Consumer>
  )
}
export default withRouter(Header)
