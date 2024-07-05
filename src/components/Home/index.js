import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdClose} from 'react-icons/io'
import {ImSearch} from 'react-icons/im'
import Header from '../Header'
import './index.css'
import AppContext from '../../context/AppContext'
import VideoItem from '../VideoItem'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import {
  Div,
  Heading,
  Para,
  Image,
  Button,
  MobDiv,
  Dov,
} from './styledComponents'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const apiStatusComponents = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Home extends Component {
  state = {
    isBanner: true,
    videoList: [],
    searchInput: '',
    apiStatus: apiStatusComponents.initial,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusComponents.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const reponse = await fetch(url, options)
    const data = await reponse.json()
    console.log()
    if (reponse.ok === true) {
      const updatedVideoData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        publishedAt: each.published_at,
        viewCount: each.view_count,
        name: each.channel.name,
        profileimageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        videoList: updatedVideoData,
        apiStatus: apiStatusComponents.success,
      })
    } else if (reponse.status === 400) {
      this.setState({apiStatus: apiStatusComponents.failure})
    }
  }

  onClickGamingCloseBanner = () => {
    this.setState({isBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClicksearch = () => {
    this.getAllVideos()
  }

  successView = () => {
    const {videoList} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              {videoList.length > 0 ? (
                <ul className='video-unordered-list'>
                  {videoList.map(each => (
                    <VideoItem each={each} key={each.id} />
                  ))}
                </ul>
              ) : (
                <Div
                  height='100vh'
                  display='flex'
                  fd='column'
                  jc='center'
                  ai='center'
                  as='center'
                >
                  <Div>
                    <Image
                      height='300px'
                      src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
                      alt='no videos'
                    />
                  </Div>
                  <Heading color={isDark ? 'white' : '#1e293b'}>
                    No Search results found
                  </Heading>
                  <Para color={isDark ? '#d7dfe9' : '#7e858e'}>
                    Try different key words or remove search filter
                  </Para>
                  <Button
                    bgColor='#4f46e5'
                    bw='0'
                    br='5'
                    as='center'
                    p='10'
                    fw='500'
                    width='100px'
                    color='white'
                    onClick={this.getAllVideos}
                  >
                    Retry
                  </Button>
                </Div>
              )}
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }

  getRetry = () => {
    this.getAllVideos()
  }

  failureView = () => <FailureView getRetry={this.getRetry} />

  inProgressView = () => (
    <div className='loading-container' data-testid='loader'>
      <Loader type='ThreeDots' color='#4f46e5' width={50} height={50} />
    </div>
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
    const {isBanner, searchInput} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Dov
              bgColor={isDark ? '#181818' : '#f9f9f9'}
              height='100%'
              fd='column'
              jc='space-between'
              data-testid='home'
            >
              <Header />
              <div className='sidebar-video-container'>
                <MobDiv>
                  <SideBar />
                </MobDiv>
                <div>
                  {isBanner && (
                    <Div
                      bi='https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png'
                      bSize='cover'
                      width='175vh'
                      height='55vh'
                      p='20'
                      data-testid='banner'
                    >
                      <div className='banner-inside-container'>
                        <div className='banner-text-container'>
                          <img
                            className='nxtImage'
                            src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                            alt='nxt watch logo'
                          />
                          <p>
                            Buy Nxt Watch Premium Prepaid Plans With <br /> UPI
                          </p>
                          <button type='button' className='getitnow-button'>
                            GET IT NOW
                          </button>
                        </div>
                        <div className='close-container'>
                          <button
                            type='button'
                            className='close-button'
                            data-testid='close'
                            onClick={this.onClickGamingCloseBanner}
                          >
                            <IoMdClose />
                          </button>
                        </div>
                      </div>
                    </Div>
                  )}
                  <div>
                    <div className='search-input-container'>
                      <input
                        type='search'
                        value={searchInput}
                        className={isDark ? 'darksearch-input' : 'search-input'}
                        placeholder='Search'
                        onChange={this.onChangeSearchInput}
                      />
                      <div
                        className={
                          isDark
                            ? 'activesearch-icons-container'
                            : 'search-icons-container'
                        }
                      >
                        <Button
                          bw='0'
                          bc='transparent'
                          as='center'
                          data-testid='searchButton'
                          onClick={this.onClicksearch}
                        >
                          <ImSearch className='search-icon' />
                        </Button>
                      </div>
                    </div>
                    {this.renderAllvideos()}
                  </div>
                </div>
              </div>
            </Dov>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Home
