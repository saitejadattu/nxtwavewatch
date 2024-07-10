import {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  ListItem,
  Thumbnail,
  VideoDetails,
  ProfileIcon,
  Profile,
  Title,
  Name,
  DetailsDiv,
  ViewDateDiv,
  ViewCount,
  PublishedDate,
} from './styledComponents'
import AppContext from '../../context/AppContext'

class VideoItem extends Component {
  render() {
    const {each} = this.props
    const {
      id,
      name,
      publishedAt,
      thumbnailUrl,
      title,
      viewCount,
      profileimageUrl,
    } = each

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
            <Link to={`/videos/${id}`}>
              <ListItem onClick={onClickVideoItem}>
                <div>
                  <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                </div>
                <VideoDetails>
                  <ProfileIcon>
                    <Profile src={profileimageUrl} alt="channel logo" />
                  </ProfileIcon>
                  <DetailsDiv>
                    <Title color={isDark ? '#cccccc' : '#1e293b'}>
                      {title}
                    </Title>
                    <Name>{name}</Name>
                    <ViewDateDiv>
                      <ViewCount>{viewCount} Views .</ViewCount>

                      <PublishedDate>{yearsAgo} years ago</PublishedDate>
                    </ViewDateDiv>
                  </DetailsDiv>
                </VideoDetails>
              </ListItem>
            </Link>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default VideoItem
