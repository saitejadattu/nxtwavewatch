import styled from 'styled-components'
import {TiHome} from 'react-icons/ti'
import {GiFlamer} from 'react-icons/gi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

export const MainDiv = styled.div`
  height: 100vh;
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`
export const Option = styled.p`
  align-self: center;
  color: ${props => (props.color ? props.color : null)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : null)};
`
export const OptionBtn = styled.button`
  display: flex;
  border-width: 0px;
  cursor: pointer;
  background-color: ${props => (props.bgColor ? props.bgColor : 'white')};
`
export const TiHomeStyled = styled(TiHome)`
  align-self: center;
  font-size: 25px;
  margin-right: 20px;
  margin-left: 10px;
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`
export const GiFlamerIcon = styled(GiFlamer)`
  align-self: center;
  font-size: 25px;
  margin-right: 20px;
  margin-left: 10px;
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`
export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
  align-self: center;
  font-size: 25px;
  margin-right: 20px;
  margin-left: 10px;
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`
export const RiMenuAddLineIcon = styled(RiMenuAddLine)`
  align-self: center;
  font-size: 25px;
  margin-right: 20px;
  margin-left: 10px;
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`
export const Div = styled.div`
    display: ${props => (props.display ? props.display : '')};
    flex-direction:${props => (props.fd ? props.fd : '')};
    justify-content: ${props => (props.jc ? props.jc : '')};
    align-self:${props => (props.as ? props.as : '')};
    height:${props => (props.height ? props.height : '')};
    width:${props => (props.width ? props.width : '')};
    align-items:${props => (props.ai ? props.ai : '')}
    background-color:${props => (props.bgColor ? props.bgColor : '')};
    border-radius:${props => (props.radius ? props.radius : '')}px;
    margin-left:${props => (props.ml ? props.ml : '')}px;
    padding-left:${props => (props.pl ? props.pl : '')}px;
    padding:${props => (props.p ? props.p : '')}px;
    background-image:url(${props => (props.bi ? props.bi : '')});
    background-size:${props => (props.bSize ? props.bSize : '')};
`
export const Image = styled.img`
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
  align-self: ${props => (props.as ? props.as : '')};
`
export const Para = styled.p`
  color: ${props => (props.color ? props.color : '')};
  font-weight: ${props => (props.fw ? props.fw : '')};
`
export const Heading = styled.h1`
  color: ${props => (props.color ? props.color : '')};
  font-size: ${props => (props.fs ? props.fs : '')}px;
  font-weight: ${props => (props.fw ? props.fw : '')};
  margin-top: ${props => (props.mt ? props.mt : '')}px;
  padding-top: ${props => (props.pt ? props.pt : '')}px;
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
`
export const Button = styled.button`
  color: ${props => (props.color ? props.color : '')};
  width: ${props => (props.width ? props.width : '')};
  font-size: ${props => (props.fs ? props.fs : '')}px;
  font-weight: ${props => (props.fw ? props.fw : '')};
  margin-top: ${props => (props.mt ? props.mt : '')}px;
  padding-top: ${props => (props.pt ? props.pt : '')}px;
  padding: ${props => (props.p ? props.p : '')}px;
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
  border-width: ${props => (props.bw ? props.bw : '')}px;
  border-radius: ${props => (props.br ? props.br : '')}px;
  border-style: ${props => (props.bs ? props.bs : '')};
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  border-color: ${props => (props.bc ? props.bc : '')}px;
  align-self: ${props => (props.as ? props.as : '')};
  cursor: pointer;
`
export const MobDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
export const Dov = styled.div`
  height: ${props => (props.height ? props.height : '')};
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  display: ${props => (props.display ? props.display : '')};
  flex-direction: ${props => (props.fd ? props.fd : '')};
  justify-content: ${props => (props.jc ? props.jc : '')};
  align-self: ${props => (props.as ? props.as : '')};
`
