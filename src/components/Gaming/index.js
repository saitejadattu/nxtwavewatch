import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import GamimgItem from '../GamingItem'
import FailureView from '../FailureView'
import './index.css'
import {
  Div,
  SiYoutubegamingIcon,
  IconDiv,
  Heading,
  Ul,
  MobDiv,
  Dov,
} from './styledComponents'
import AppContext from '../../context/AppContext'
import SideBar from '../SideBar'

const apiStatusComponents = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Gaming extends Component {
  state = {gamingData: [], apiStatus: apiStatusComponents.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusComponents.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedGaming = data.videos.map(each => ({
        id: each.id,
        thumbnaiUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingData: updatedGaming,
        apiStatus: apiStatusComponents.success,
      })
    } else {
      this.setState({apiStatus: apiStatusComponents.failure})
    }
  }

  successView = () => {
    const {gamingData} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Div data-testid="gaming" bgColor={isDark ? '#0f0f0f ' : '#f9f9f9'}>
              <IconDiv
                display="flex"
                bgColor={isDark ? '#181818' : ' #f1f1f1'}
                pl="100"
                data-testid="banner"
              >
                <SiYoutubegamingIcon bgColor={isDark ? 'black' : '#d7dfe9'} />
                <Heading ml="15" color={isDark ? 'white' : '#1e293b'}>
                  Gaming
                </Heading>
              </IconDiv>
              <Div bgColor={isDark ? '#181818' : ' #f1f1f1'}>
                <Ul
                  p="20"
                  display="flex"
                  fw="wrap"
                  ml="0"
                  pl="0"
                  bgColor={isDark ? '#0f0f0f ' : '#f9f9f9'}
                >
                  {gamingData.map(each => (
                    <GamimgItem each={each} key={each.id} />
                  ))}
                </Ul>
              </Div>
            </Div>
          )
        }}
      </AppContext.Consumer>
    )
  }

  getRetry = () => {
    this.getGamingData()
  }

  failureView = () => <FailureView getRetry={this.getRetry} />

  inProgressView = () => (
    <Div
      height="100vh"
      width="1000px"
      display="flex"
      jc="center"
      fd="column"
      ai="center"
      as="center"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#4f46e5" width={50} height={50} />
    </Div>
  )

  renderAllvideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusComponents.success:
        return this.successView()
      case apiStatusComponents.failure:
        return this.failureView()
      case apiStatusComponents.inProgress:
        return this.inProgressView()
      default:
        return ''
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Dov
              height="170vh"
              bgColor={isDark ? '#0f0f0f' : ' #f1f1f1'}
              data-testid="gaming"
            >
              <Header />
              <Div display="flex" bgColor={isDark ? '#0f0f0f ' : '#f9f9f9'}>
                <MobDiv>
                  <SideBar />
                </MobDiv>
                {this.renderAllvideos()}
              </Div>
            </Dov>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Gaming
