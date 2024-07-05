import styled from 'styled-components'

export const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`
export const FormDiv = styled.form`
  margin: 20px;
  box-shadow: 0px 4px 16px color= '#bfbfbf';
  width: 70vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 5px;
  background-color: ${props => (props.bgColor ? props.bgColor : null)};
`
export const NXZImg = styled.img`
  height: 50px;
  width: 80%;
  text-align: center;
`
export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 30px;
  padding: 20px;
  margin-top: 10px;
  border-color: #e2e8f0;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  color: ${props => (props.color ? props.color : '')};
  background-color: ${props => (props.bgColor ? props.bgColor : '')};
`
export const Label = styled.label`
  margin-top: 20px;
  color: ${props => (props.color ? props.color : null)};
`
export const ShowDiv = styled.div`
  display: flex;
`
export const CheckInput = styled.input`
  width: 20px;
`
export const CheckText = styled.label`
  color: ${props => (props.color ? props.color : '')};
`
export const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #4f46e5;
  border-width: 0px;
  border-radius: 5px;
  color: ${props => (props.color ? props.color : '')};
`
export const ErroMsg = styled.p`
  color: #ff0000;
  font-weight: 400;
  font-family: 'Roboto';
`
