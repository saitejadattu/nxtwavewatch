import {Div, Heading, Para, Image, MainDiv} from './styledComponents'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      const imgUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <MainDiv bgColor={isDark ? 'black' : 'white'}>
          <Header />
          <Div display="flex">
            <SideBar />
            <Div
              height="150vh"
              width="400vh"
              display="flex"
              fd="column"
              jc="center"
              ai="center"
              as="center"
            >
              <Div>
                <Image
                  height="600px"
                  width="600px"
                  alt="not found"
                  src={imgUrl}
                />
              </Div>
              <Heading color={isDark ? 'white' : '#1e293b'}>
                Page Not Found
              </Heading>
              <Para color={isDark ? '#616e7c' : '#616e7c'}>
                we are sorry, the page you requested could not be found.
              </Para>
            </Div>
          </Div>
        </MainDiv>
      )
    }}
  </AppContext.Consumer>
)
export default NotFound
