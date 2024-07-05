import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  FormDiv,
  MainDiv,
  NXZImg,
  Label,
  Input,
  ShowDiv,
  CheckInput,
  Button,
  ErroMsg,
  CheckText,
} from './styledComponents'
import AppContext from '../../context/AppContext'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isChecked: '',
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShow = event => {
    this.setState({isChecked: event.target.checked})
  }

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg, username, password, isChecked} = this.state
    const type = isChecked ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const {history} = this.props
      history.replace('/')
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          const imgUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <MainDiv bgColor={isDark ? '#212121' : ''}>
              <FormDiv
                bgColor={isDark ? 'black' : ''}
                onSubmit={this.onSubmitForm}
              >
                <NXZImg src={imgUrl} alt="website logo" />
                <Label color={isDark ? 'white' : '#64748b'} htmlFor="USERNAME">
                  USERNAME
                </Label>
                <Input
                  bgColor={isDark ? '#e2e8f0' : 'white'}
                  color={isDark ? ' #1e293b' : ''}
                  placeholder="Username"
                  id="USERNAME"
                  type="text"
                  value={username}
                  onChange={this.onChangeUsername}
                />
                <Label color={isDark ? 'white' : '#64748b'} htmlFor="PASSWORD">
                  PASSWORD
                </Label>

                <Input
                  bgColor={isDark ? '#e2e8f0' : 'white'}
                  color={isDark ? ' #1e293b' : ''}
                  value={password}
                  placeholder="Password"
                  id="PASSWORD"
                  type={type}
                  onChange={this.onChangePassword}
                />
                <ShowDiv>
                  <CheckInput
                    id="SHOW"
                    type="checkbox"
                    onClick={this.onClickShow}
                  />
                  <CheckText htmlFor="SHOW" color={isDark ? 'white' : 'black'}>
                    Show Password
                  </CheckText>
                </ShowDiv>
                <Button color="#ffffff" type="submit">
                  Login
                </Button>
                {errorMsg.length > 0 && <ErroMsg>*{errorMsg}</ErroMsg>}
              </FormDiv>
            </MainDiv>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default LoginForm
