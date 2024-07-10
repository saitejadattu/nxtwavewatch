import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingItem from '../TrendingItem'
import FailureView from '../FailureView'
import {
  MainDiv,
  Div,
  GiFlamerIcon,
  Heading,
  IconDiv,
  TrendingDiv,
  Ul,
  MobDiv,
} from './styledComponents'

const apiStatusComponents = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Trending extends Component {
  state = {trndingData: [], apiStatus: apiStatusComponents.initial}

  componentDidMount() {
    this.getTrending()
  }

  getTrending = async () => {
    this.setState({apiStatus: apiStatusComponents.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const reposne = await fetch(url, options)
    const data = await reposne.json()
    if (reposne.ok === true) {
      const updatedTrending = data.videos.map(each => ({
        id: each.id,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        trndingData: updatedTrending,
        apiStatus: apiStatusComponents.success,
      })
    } else {
      this.setState({apiStatus: apiStatusComponents.failure})
    }
  }

  successView = () => {
    const {trndingData} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Div>
              <TrendingDiv
                pl="100"
                display="flex"
                fd="column"
                bgColor={isDark ? '#0f0f0f' : ' #f1f1f1'}
              >
                <Div
                  display="flex"
                  fd="column"
                  jc="center"
                  as="center"
                  data-testid="banner"
                >
                  <Div display="flex">
                    <IconDiv as="center">
                      <GiFlamerIcon bgColor={isDark ? 'black' : ' #d7dfe9'} />
                    </IconDiv>
                    <Div>
                      <Heading color={isDark ? 'white' : '#1e293b'} pl="20">
                        Trending
                      </Heading>
                    </Div>
                  </Div>
                </Div>
              </TrendingDiv>
              <Div>
                <Ul bgColor={isDark ? '#0f0f0f' : '#f9f9f9'} mt="50" pt="0">
                  {trndingData.map(each => (
                    <TrendingItem key={each.id} each={each} />
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
    this.getTrending()
  }

  failureView = () => <FailureView getRetry={this.getRetry} />

  inProgressView = () => (
    <Div
      height="100"
      width="1000"
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
            <MainDiv
              bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
              data-testid="trending"
            >
              <Header />
              <Div display="flex">
                <MobDiv>
                  <SideBar />
                </MobDiv>
                {this.renderAllvideos()}
              </Div>
            </MainDiv>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Trending