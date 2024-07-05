import styled from 'styled-components'
import {GiFlamer} from 'react-icons/gi'

export const MainDiv = styled.div`
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
`
export const Div = styled.div`
    display: ${props => (props.display ? props.display : '')};
    flex-direction:${props => (props.fd ? props.fd : '')};
    justify-content: ${props => (props.jc ? props.jc : '')};
    align-self:${props => (props.as ? props.as : '')};
    height:${props => (props.height ? props.height : '')}vh;
    width:${props => (props.width ? props.width : '')}px;
    align-items:${props => (props.ai ? props.ai : '')}
    background-color:${props => (props.bgColor ? props.bgColor : '')};
    border-radius:${props => (props.radius ? props.radius : '')}px;
    margin-left:${props => (props.ml ? props.ml : '')}px;
    padding-left:${props => (props.pl ? props.pl : '')}px;

`
export const GiFlamerIcon = styled(GiFlamer)`
  color: #ff0000;
  align-self: center;
  font-size: 18px;
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  height: 60px;
  width: 60px;
  padding: 10px;
  border-radius: 50px;
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
export const IconDiv = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  border-radius: 25px;
  align-self: ${props => (props.as ? props.as : '')};
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
`
export const TrendingDiv = styled.div`
  height: 20vh;
  width: 100%;
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  display: ${props => (props.display ? props.display : '')};
  flex-direction: ${props => (props.fl ? props.fl : '')};
  justify-content: ${props => (props.jc ? props.jc : '')};
  align-self: ${props => (props.self ? props.self : '')};
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
  margin-bottom: 0px;
  padding-bottom: 0px;
`
export const Ul = styled.ul`
  list-style-type: none;
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  padding: 10px;
  margin-top: ${props => (props.mt ? props.mt : '')}px;
  padding-top: ${props => (props.pt ? props.pt : '')}px;
`
export const MobDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
