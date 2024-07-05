import {Link} from 'react-router-dom'
import {Div, LI, Para, Image} from './styledComponents'
import AppContext from '../../context/AppContext'

const TrendingItem = props => {
  const {each} = props
  const {id, name, thumbnailUrl, title, publishedAt, viewCount} = each
  const d = new Date(publishedAt)
  const now = new Date()
  const yearsAgo = now.getFullYear() - d.getFullYear()
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, inActivateBtn} = value
        const onClickVideoItem = () => {
          inActivateBtn()
        }
        return (
          <Link to={`/videos/${id}`} onClick={onClickVideoItem}>
            <LI>
              <Div display="flex">
                <Image
                  height="300px"
                  src={thumbnailUrl}
                  alt="video thumbnail"
                />
                <Div display="flex" fd="column" pl="15">
                  <Para fs="25" color={isDark ? 'white' : '#1e293b'}>
                    {title}
                  </Para>
                  <Para color="#94a3b8">{name}</Para>
                  <Div display="flex">
                    <Para color="#94a3b8">{viewCount} views . </Para>
                    <Para color="#94a3b8"> {yearsAgo} years ago</Para>
                  </Div>
                </Div>
              </Div>
            </LI>
          </Link>
        )
      }}
    </AppContext.Consumer>
  )
}
export default TrendingItem
