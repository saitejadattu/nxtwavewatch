import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import FailureView from '../FailureView'
import {
  MainDiv,
  SideBarAndVideo,
  VideoDiv,
  Titel,
  ViewsDiv,
  Para,
  AiOutlineLikeIcon,
  DisplayFlex,
  BiDislikeIcon,
  RiMenuAddLineIcon,
  Hr,
  Profile,
  Div,
  Parap,
  ProfileDiv,
  Dof,
  Button,
  MobDiv,
} from './styledComponents'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'

const apiStatusComponents = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class VideoItemDetails extends Component {
  state = {
    videoData: '',
    apiStatus: apiStatusComponents.initial,
    activeLike: false,
    activeSave: false,
    activeDisLike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusComponents.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedVideoDetails = {
        id: data.video_details.id,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoData: updatedVideoDetails,
        apiStatus: apiStatusComponents.success,
      })
    } else if (response.status === 400) {
      this.setState({apiStatus: apiStatusComponents.failure})
    }
  }

  onClickLike = () => {
    const {activeLike, activeDisLike} = this.state
    if (activeLike === false && activeDisLike === true) {
      this.setState({activeDisLike: !activeDisLike})
    }
    this.setState({activeLike: !activeLike})
  }

  onClickDisLike = () => {
    const {activeDisLike, activeLike} = this.state
    if (activeLike === true && activeDisLike === false) {
      this.setState({activeLike: !activeLike})
    }
    this.setState({activeDisLike: !activeDisLike})
  }

  onClicksavea = () => {
    const {activeSave, videoData} = this.state
    this.setState({activeSave: !activeSave, videoData})
  }

  successView = () => {
    const {videoData, activeLike, activeDisLike} = this.state
    const {
      name,
      title,
      profileImageUrl,
      subscriberCount,
      description,
      publishedAt,
      videoUrl,
      viewCount,
    } = videoData
    const d = new Date(publishedAt).getFullYear()
    const current = new Date().getFullYear()
    const year = current - d
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark, changeSaveVideo, savedVideo} = value
          const onClickSave = () => {
            changeSaveVideo(videoData)
            this.onClicksavea()
          }
          const index = savedVideo.findIndex(each => each.id === videoData.id)
          let issaved
          if (index === -1) {
            issaved = false
          } else {
            issaved = true
          }
          const savedtext = issaved ? 'Saved' : 'Save'
          return (
            <VideoDiv>
              <ReactPlayer url={videoUrl} width={1040} height={500} />
              <Titel color={isDark ? 'white' : '#1e293b'}>{title}</Titel>
              <ViewsDiv>
                <DisplayFlex>
                  <Para color="#94a3b8">{viewCount} views .</Para>
                  <Para color="#94a3b8">{year} years ago</Para>
                </DisplayFlex>
                <DisplayFlex width="250" direction="space-between">
                  <DisplayFlex>
                    <Button
                      onClick={this.onClickLike}
                      color={activeLike ? '#2563eb' : '#64748b'}
                    >
                      <AiOutlineLikeIcon align="center" />
                      Like
                    </Button>
                  </DisplayFlex>
                  <DisplayFlex>
                    <Button
                      onClick={this.onClickDisLike}
                      color={activeDisLike ? '#2563eb' : '#64748b'}
                    >
                      <BiDislikeIcon align="center" />
                      Dislike
                    </Button>
                  </DisplayFlex>
                  <DisplayFlex>
                    <Button onClick={onClickSave}>
                      <RiMenuAddLineIcon
                        align="center"
                        color={issaved ? '#2563eb' : '#64748b'}
                      />
                    </Button>
                    <Para
                      color={issaved ? '#2563eb' : '#64748b'}
                      align="center"
                    >
                      {savedtext}
                    </Para>
                  </DisplayFlex>
                </DisplayFlex>
              </ViewsDiv>
              <Hr />
              <DisplayFlex>
                <ProfileDiv>
                  <Profile src={profileImageUrl} alt="channel logo" />
                </ProfileDiv>
                <Div>
                  <Parap align="center" color={isDark ? 'white' : 'black'}>
                    {name}
                  </Parap>
                  <Parap color="#94a3b8" align="center">
                    {subscriberCount}
                  </Parap>
                  <Para color={isDark ? '#94a3b8' : '#1e293b'}>
                    {description}
                  </Para>
                </Div>
              </DisplayFlex>
            </VideoDiv>
          )
        }}
      </AppContext.Consumer>
    )
  }

  getRetry = () => {
    this.getVideoDetails()
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

  renderVideoDetails = () => {
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
              data-testid="videoItemDetails"
            >
              <Header />
              <SideBarAndVideo>
                <MobDiv>
                  <SideBar />
                </MobDiv>
                <Dof>{this.renderVideoDetails()}</Dof>
              </SideBarAndVideo>
            </MainDiv>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
