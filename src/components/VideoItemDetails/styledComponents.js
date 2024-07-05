import {AiOutlineLike} from 'react-icons/ai'
import styled from 'styled-components'
import {BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'

export const MainDiv = styled.div`
  height: 170vh;
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
`
export const SideBarAndVideo = styled.div`
  display: flex;
`
export const VideoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 1040px;
`
export const Titel = styled.p`
  color: ${props => (props.color ? props.color : '')};
`
export const ViewsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Para = styled.p`
  color: ${props => (props.color ? props.color : null)};
  align-self: ${props => (props.align ? props.align : null)};
  margin-left: 5px;
`
export const AiOutlineLikeIcon = styled(AiOutlineLike)`
  color: ${props => (props.color ? props.color : '')};
  align-self: ${props => (props.align ? props.align : null)};
  font-size: 25px;
`
export const BiDislikeIcon = styled(BiDislike)`
  color: ${props => (props.color ? props.color : '')};
  align-self: ${props => (props.align ? props.align : null)};
  font-size: 25px;
`
export const RiMenuAddLineIcon = styled(RiMenuAddLine)`
  color: ${props => (props.color ? props.color : '')};
  align-self: ${props => (props.align ? props.align : null)};
  font-size: 25px;
`
export const DisplayFlex = styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : null)}px;
  justify-content: ${props => (props.direction ? props.direction : null)};
`
export const Hr = styled.hr`
  color: white;
  border-color: #94a3b8;
  border-width: 1px;
  align-slef: flex-start;
  width: 100%;
`
export const Profile = styled.img`
  height: 60px;
  border-radius: 25px;
  background-color: transparent;
`
export const Div = styled.div`
    display: ${props => (props.display ? props.display : '')};
    flex-direction:${props => (props.fd ? props.fd : '')};
    justify-content: ${props => (props.jc ? props.jc : '')};
    align-self:${props => (props.as ? props.as : '')};
    height:${props => (props.height ? props.height : '')}vh;
    width:${props => (props.width ? props.width : '')}px;
    align-items:${props => (props.align ? props.align : '')}
    background-color:${props => (props.bgColor ? props.bgColor : '')};
    border-radius:${props => (props.radius ? props.radius : '')}px;
    margin-left:${props => (props.ml ? props.ml : '')}px;
    padding-left:${props => (props.pl ? props.pl : '')}px;

`
export const Parap = styled.p`
  margin-top: 0px;
  padding-top: 0px;
  align-self: center;
  color: ${props => (props.color ? props.color : '')};
`
export const ProfileDiv = styled.div`
  background-color: white;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  margin-right: 20px;
`
export const Dof = styled.div`
  display: flex;
  flex-direction: column;
`
export const Button = styled.button`
  color: ${props => (props.color ? props.color : '')};
  border-width: 0px;
  background-color: transparent;
`
export const MobDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
