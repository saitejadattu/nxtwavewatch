import {Link} from 'react-router-dom'
import {Li, Image, Para} from './styleComponents'
import AppContext from '../../context/AppContext'

const GamingItem = props => {
  const {each} = props
  const {id, thumbnaiUrl, title, viewCount} = each
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, inActivateBtn} = value
        const onClickVideoItem = () => {
          inActivateBtn()
        }
        return (
          <Link to={`/videos/${id}`} onClick={onClickVideoItem}>
            <Li fw="wrap">
              <Image
                src={thumbnaiUrl}
                height="350px"
                width="280px"
                alt="video thumbnail"
              />
              <div>
                <Para fw="500" color={isDark ? 'white' : '#1e293b'}>
                  {title}
                </Para>
                <Para color={isDark ? '#cbd5e1' : '#7e858e'}>
                  {viewCount} Watching Worldwide
                </Para>
              </div>
            </Li>
          </Link>
        )
      }}
    </AppContext.Consumer>
  )
}
export default GamingItem
