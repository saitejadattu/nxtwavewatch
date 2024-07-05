import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'
import SavedVideoItem from '../SavedVideoItem'
import {
  Div,
  IconDiv,
  Heading,
  GiFlamerIcon,
  Ul,
  MainDiv,
  TrendingDiv,
  Image,
  Para,
  MobDiv,
} from './styledComponents'

class SavedVideos extends Component {
  successView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDark, savedVideo} = value
        return (
          <Div>
            {savedVideo.length > 0 && (
              <TrendingDiv
                pl="100"
                display="flex"
                fd="column"
                bgColor={isDark ? '#181818' : ' #f1f1f1'}
                data-testid="banner"
              >
                <Div display="flex" fd="column" jc="center" as="center">
                  <Div display="flex">
                    <IconDiv as="center">
                      <GiFlamerIcon bgColor={isDark ? 'black' : ' #d7dfe9'} />
                    </IconDiv>
                    <Div>
                      <Heading color={isDark ? 'white' : '#1e293b'} pl="20">
                        Saved Videos
                      </Heading>
                    </Div>
                  </Div>
                </Div>
              </TrendingDiv>
            )}
            {savedVideo.length > 0 ? (
              <Ul>
                {savedVideo.map(each => (
                  <SavedVideoItem key={each.id} each={each} />
                ))}
              </Ul>
            ) : (
              <Div
                height="150vh"
                width="1057px"
                display="flex"
                fd="column"
                jc="center"
                as="center"
                ai="center"
              >
                <Div
                  height="170vh"
                  display="flex"
                  fd="column"
                  jc="center"
                  ai="center"
                  as="center"
                >
                  <Div>
                    <Image
                      height="500px"
                      width="600px"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                      alt="no saved videos"
                    />
                    <Heading color={isDark ? 'white' : '#1e293b'}>
                      No saved videos found
                    </Heading>
                    <Para color={isDark ? '#d7dfe9' : '#cccccc'}>
                      You can save your videos while watching them
                    </Para>
                  </Div>
                </Div>
              </Div>
            )}
          </Div>
        )
      }}
    </AppContext.Consumer>
  )

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <MainDiv
              bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
              data-testid="savedVideos"
            >
              <Header />
              <Div display="flex">
                <MobDiv>
                  <SideBar />
                </MobDiv>
                {this.successView()}
              </Div>
            </MainDiv>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default SavedVideos
