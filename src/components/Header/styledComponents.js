import styled from 'styled-components'
import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
export const HeaderDiv = styled.nav`
  height: 10vh;
  padding: 5px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`
export const NxtImg = styled.img`
  height: 30px;
  width: 150px;
  text-align: center;
`
export const LogDiv = styled.li`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 180px;
`
export const ProfileICon = styled.img`
  height: 35px;
`
export const Button = styled.button`
  padding: 10px;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${props => (props.bc ? props.bc : null)};
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
  border-width: ${props => (props.bw ? props.bw : null)};
  color: ${props => (props.color ? props.color : null)};
  border-style: solid;
  font-weight: 600;
`
export const Div = styled.div`
    display: ${props => (props.display ? props.display : '')};
    flex-direction:${props => (props.fd ? props.fd : '')};
    justify-content: ${props => (props.jc ? props.jc : '')};
    align-self:${props => (props.as ? props.as : '')};
    height:${props => (props.height ? props.height : '')};
    width:${props => (props.width ? props.width : '')}px;
    align-items:${props => (props.ai ? props.ai : '')}
    background-color:${props => (props.bgColor ? props.bgColor : '')};
    border-radius:${props => (props.radius ? props.radius : '')}px;
    margin-left:${props => (props.ml ? props.ml : '')}px;
    padding-left:${props => (props.pl ? props.pl : '')}px;
`
export const Btn = styled.button`
  border-width: 0px;
  background-color: transparent;
  font-size: 30px;
  color: ${props => (props.color ? props.color : null)};
`
export const Para = styled.p`
  color: ${props => (props.color ? props.color : '')};
  font-size: ${props => (props.fs ? props.fs : '')}px;
  font-weight: ${props => (props.fw ? props.fw : '')};
  margin-top: ${props => (props.mt ? props.mt : '')}px;
  padding-top: ${props => (props.pt ? props.pt : '')}px;
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
`
export const BUtton = styled.button`
  color: ${props => (props.color ? props.color : '')};
  width: ${props => (props.fs ? props.fs : '')}px;
  font-weight: ${props => (props.width ? props.width : '')};
  font-weight: ${props => (props.fw ? props.fw : '')};
  margin-top: ${props => (props.mt ? props.mt : '')}px;
  padding-top: ${props => (props.pt ? props.pt : '')}px;
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
  border-width: ${props => (props.bw ? props.bw : '')}px;
  border-style: ${props => (props.bs ? props.bs : '')};
  background-color: ${props => (props.bgColor ? props.bgColor : '')}px;
  border-color: ${props => (props.bc ? props.bc : '')}px;
`
export const MobDiv = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`
export const DesDiv = styled.div`
  @media (min-width: 767px) {
    display: none;
    font-size: ${props => (props.fs ? props.fs : null)};
    height: ${props => (props.height ? props.height : null)};
    color: ${props => (props.color ? props.color : null)};
    background-color: ${props => (props.bgColor ? props.bgColor : '')};
  }
`
export const MobButton = styled.button`
  color: ${props => (props.color ? props.color : '')};
  width: ${props => (props.fs ? props.fs : '')}px;
  font-weight: ${props => (props.width ? props.width : '')};
  font-weight: ${props => (props.fw ? props.fw : '')};
  margin-top: ${props => (props.mt ? props.mt : '')}px;
  padding-top: ${props => (props.pt ? props.pt : '')}px;
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
  border-width: ${props => (props.bw ? props.bw : '')}px;
  border-style: ${props => (props.bs ? props.bs : '')};
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  border-color: ${props => (props.bc ? props.bc : '')};
  padding: ${props => (props.p ? props.p : '')}px;
  @media (max-width: 767px) {
    display: none;
  }
`
export const DesButton = styled.button`
  color: ${props => (props.color ? props.color : '')};
  width: ${props => (props.fs ? props.fs : '')}px;
  font-weight: ${props => (props.width ? props.width : '')};
  font-weight: ${props => (props.fw ? props.fw : '')};
  margin-top: ${props => (props.mt ? props.mt : '')}px;
  padding-top: ${props => (props.pt ? props.pt : '')}px;
  margin-left: ${props => (props.ml ? props.ml : '')}px;
  padding-left: ${props => (props.pl ? props.pl : '')}px;
  border-width: ${props => (props.bw ? props.bw : '')}px;
  border-style: ${props => (props.bs ? props.bs : '')};
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
  border-color: ${props => (props.bc ? props.bc : '')};
  padding: ${props => (props.p ? props.p : '')}px;
  border-width: 0px;
  background-color: transparent;
  @media (min-width: 767px) {
    display: none;
    border-width: 0px;
  }
`
export const Ul = styled.ul`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  color: ${props => (props.color ? props.color : null)};
  align-self: center;
  margin-top: 0px;
`
export const FiSunIcon = styled(FiSun)`
  font-size:30px;
  color:${props => (props.color ? props.color : null)};
`
export const FaMoonIcon = styled(FaMoon)`
  font-size:30px;
  color:${props => (props.color ? props.color : null)};
`
export const Image = styled.img`
  height:30px;
  align-slef:center;
`
