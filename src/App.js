import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import AppContext from './context/AppContext'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    savedVideo: [],
    activeBtn: 1,
    menu: false,
  }

  changeTheme = () => {
    const {isDark} = this.state
    this.setState({isDark: !isDark})
  }

  changeSaveVideo = videoData => {
    const {savedVideo} = this.state
    const isDupplicate = savedVideo.findIndex(each => each.id === videoData.id)
    if (isDupplicate === -1) {
      this.setState(prevState => ({
        savedVideo: [...prevState.savedVideo, videoData],
      }))
    } else {
      // const removeItem = savedVideo.filter(each => each.id !== videoData.id)
      savedVideo.splice(isDupplicate, 1)
      this.setState({savedVideo})
    }
  }

  changeActiveBtn = id => {
    this.setState({activeBtn: id})
  }

  inActivateBtn = () => {
    this.setState({activeBtn: ''})
  }

  toggleMenu = () => {
    const {menu} = this.state
    this.setState({menu: !menu})
  }

  render() {
    const {isDark, activeBtn, savedVideo, menu} = this.state
    return (
      <AppContext.Provider
        value={{
          isDark,
          activeBtn,
          savedVideo,
          menu,
          changeTheme: this.changeTheme,
          changeSaveVideo: this.changeSaveVideo,
          changeActiveBtn: this.changeActiveBtn,
          inActivateBtn: this.inActivateBtn,
          toggleMenu: this.toggleMenu,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App

// videoData =
//             {
//               description: videoData.description,
//               id: videoData.id,
//               name: videoData.name,
//               profileImageUrl: videoData.profileImageUrl,
//               publishedAt: videoData.publishedAt,
//               subscriberCount: videoData.subscriberCount,
//               thumbnailUrl: videoData.thumbnailUrl,
//               title: videoData.title,
//               videoUrl: videoData.videoUrl,
//               viewCount: videoData.viewCount,
//               isSaved: true,
//             }),

// each.isSaved = !each.isSaved
