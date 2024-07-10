import {Link} from 'react-router-dom'
import AppContext from '../../context/AppContext'
import {Div, LI, Para, Heading, Image} from './styledComponents'

const SavedVideoItem = props => {
  const {each} = props
  const {id, thumbnailUrl, title, name, publishedAt, viewCount} = each
  const d = new Date(publishedAt)
  const now = new Date()
  const yearsAgo = now.getFullYear() - d.getFullYear()
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`}>
            <LI>
              <Div display="flex">
                <Image
                  height="300px"
                  width="550px"
                  src={thumbnailUrl}
                  alt="video thumbnail"
                />
                <Div display="flex" fd="column" pl="15">
                  <Heading fs="25" color={isDark ? 'white' : '#1e293b'}>
                    {title}
                  </Heading>
                  <Para color="#94a3b8">{name}</Para>
                  <Para color="#94a3b8">
                    {viewCount} views . {yearsAgo} years ago
                  </Para>
                </Div>
              </Div>
            </LI>
          </Link>
        )
      }}
    </AppContext.Consumer>
  )
}
export default SavedVideoItem
