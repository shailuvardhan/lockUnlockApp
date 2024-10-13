// Style your elements here
import styled from 'styled-components'

export const CardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161617;
  background-size: cover;
  height: 100vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 60%;
`
export const ImgTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

export const ImgEle = styled.img`
  width: 100px;
  height: 100px;
`
export const ParaEle = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: bolder;
  font-family: 'Roboto';
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ButtonEle = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  padding: 10px;
  width: 200px;
`
