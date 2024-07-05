import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 10px;
  width: 55vh;
`
export const Thumbnail = styled.img`
  height: 180px;
`
export const VideoDetails = styled.div`
  display: flex;
  margin: 5px;
  margin-left: 0px;
`
export const ProfileIcon = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 25px;
`
export const Profile = styled.img`
  height: 40px;
`
export const Title = styled.p`
  color: ${props => (props.color ? props.color : null)};
  font-size: 20px;
  align-self: center;
  margin-top: 0px;
  padding-top: 0px;
  margin-left: 5px;
  font-family: 'Roboto';
  margin-bottom: 4px;
  padding-bottom: 4px;
`
export const Name = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 4px;
  padding-bottom: 4px;
`
export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const ViewDateDiv = styled.div`
  display: flex;
  margin-top: 0px;
  padding-top: 0px;
`
export const ViewCount = styled.p`
  color: #94a3b8;
`
export const PublishedDate = styled.p`
  color: #94a3b8;
  margin-left: 20px;
`
