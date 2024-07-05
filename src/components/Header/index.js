import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {IoIosMenu, IoMdClose} from 'react-icons/io'
import AppContext from '../../context/AppContext'
import SideBar from '../SideBar'
import {
  HeaderDiv,
  NxtImg,
  LogDiv,
  ProfileICon,
  Button,
  Div,
  Btn,
  Para,
  BUtton,
  MobDiv,
  DesDiv,
  MobButton,
  DesButton,
  Ul,
} from './styledComponents'

const Header = props => (
  <AppContext.Consumer>
    {value => {
      const {isDark, changeTheme, toggleMenu} = value
      const imgUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onClickIcon = () => {
        changeTheme()
      }
      const onClickIconLogOut = () => {
        const {history} = props
        history.replace('/login')
        Cookies.remove('jwt_token')
      }
      const onClickMenu = () => {
        toggleMenu()
      }
      return (
        <HeaderDiv bgColor={isDark ? '#212121' : 'white'}>
          <Ul>
            <Link to='/'>
              <li>
                <NxtImg src={imgUrl} alt='website logo' />
              </li>
            </Link>
            <LogDiv>
              <Div>
                {isDark ? (
                  <Btn
                    color={isDark ? 'white' : ''}
                    onClick={onClickIcon}
                    data-testid='theme'
                  >
                    <FiSun />
                  </Btn>
                ) : (
                  <Btn onClick={onClickIcon} data-testid='theme'>
                    <FaMoon />
                  </Btn>
                )}
              </Div>
              <MobDiv>
                <ProfileICon
                  src='https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'
                  alt='profile'
                />
              </MobDiv>
              <Popup
                modal
                trigger={
                  <DesButton
                    fs='90'
                    color={isDark ? 'white' : 'black'}
                    onClick={onClickMenu}
                  >
                    <IoIosMenu />
                  </DesButton>
                }
              >
                {close => (
                  <Div>
                    <Button
                      type='button'
                      className='trigger-button'
                      data-testid='close'
                      onClick={() => close()}
                    >
                      <IoMdClose />
                    </Button>
                    <SideBar />
                  </Div>
                )}
              </Popup>
              <MobDiv bgColor={isDark ? 'black' : 'black'}>
                <Popup
                  modal
                  trigger={
                    <MobButton
                      bc={isDark ? 'white' : '#4f46e5'}
                      bs='solid'
                      p='10'
                      bgColor={isDark ? '#0f0f0f' : 'white'}
                      color={isDark ? 'white' : '#4f46e5'}
                      onClick={onClickIconLogOut}
                    >
                      Logout
                    </MobButton>
                  }
                >
                  {close => (
                    <Div p='50' bgColor={isDark ? '#313131' : 'white'}>
                      <Para fw='400' color={isDark ? 'white' : '#4f46e5'}>
                        Are you sure, you want to logout?
                      </Para>
                      <Div display='flex' jc='center' ai='center'>
                        <BUtton
                          bc={isDark ? '#d7dfe9' : '#d7dfe9'}
                          bw='1'
                          bgColor='transparent'
                          onClick={() => close()}
                        >
                          Cancel
                        </BUtton>
                        <BUtton onClick={onClickIconLogOut}>Confirm</BUtton>
                      </Div>
                    </Div>
                  )}
                </Popup>
              </MobDiv>
              <DesDiv bgColor={isDark ? 'black' : 'black'}>
                <Popup
                  modal
                  trigger={
                    <DesButton
                      bgColor={isDark ? '#0f0f0f' : 'white'}
                      color={isDark ? 'white' : 'black'}
                      onClick={onClickIconLogOut}
                    >
                      <FiLogOut />
                    </DesButton>
                  }
                >
                  {close => (
                    <Div p='50' bgColor={isDark ? '#313131' : 'white'}>
                      <Para fw='400' color={isDark ? 'white' : '#4f46e5'}>
                        Are you sure, you want to logout?
                      </Para>
                      <Div display='flex' jc='center' ai='center'>
                        <BUtton
                          bc={isDark ? '#d7dfe9' : '#d7dfe9'}
                          bw='1'
                          bgColor='transparent'
                          onClick={() => close()}
                        >
                          Cancel
                        </BUtton>
                        <BUtton onClick={onClickIconLogOut}>Confirm</BUtton>
                      </Div>
                    </Div>
                  )}
                </Popup>
              </DesDiv>
            </LogDiv>
          </Ul>
        </HeaderDiv>
      )
    }}
  </AppContext.Consumer>
)
export default withRouter(Header)
