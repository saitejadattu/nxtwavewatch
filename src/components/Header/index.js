import AppContext from '../../context/AppContext'
import {
  Ul,
  DesButton,
  MobButton,
  DesDiv,
  MobDiv,
  BUtton,
  Para,
  Btn,
  Div,
  Button,
  ProfileICon,
  LogDiv,
  NxtImg,
  HeaderDiv,
  FiSunIcon,
  FaMoonIcon,
  Image,
} from './styledComponents'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
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
          const jwtToken = Cookies.get('jwt_token')
          const {history} = props
          history.replace('/login')
          Cookies.remove('jwt_token')
        }
        return (
          <HeaderDiv bgColor={isDark ? '#212121' : '#ffffff'}>
            <Ul>
              <LogDiv>
                <NxtImg src={imgUrl} />
              </LogDiv>
              <LogDiv>
                <Button
                  bw="0px"
                  bgColor="transparent"
                  onClick={onClickChangeTheme}
                >
                  {isDark ? (
                    <FiSunIcon color={isDark ? 'white' : ''} />
                  ) : (
                    <FaMoonIcon color={isDark ? 'white' : ''} />
                  )}
                </Button>
                <LogDiv>
                  <Image
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </LogDiv>
                <LogDiv>
                  <Popup
                    modal
                    trigger={
                      <Button
                        color={isDark ? 'white' : 'blue'}
                        bc={isDark ? 'white' : 'blue'}
                        bgColor="transparent"
                      >
                        Logout
                      </Button>
                    }
                  >
                    {close => (
                      <Div>
                        <p>Are you sure you want to logout?</p>
                        <Div>
                          <button onClick={() => close()}>cancel</button>
                          <button onClick={onClickLogOut}>confirm</button>
                        </Div>
                      </Div>
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
