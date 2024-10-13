import {useState} from 'react'

import {
  CardMainContainer,
  CardContainer,
  ImgTextContainer,
  ImgEle,
  ParaEle,
  ButtonContainer,
  ButtonEle,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const isClickedButton = () => {
    // setIsLocked(!isLocked)
    setIsLocked(prevState => !prevState)
  }

  const paraText = isLocked
    ? 'Your Device is Locked '
    : 'Your Device is Unlocked'
  const imgSrc = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const altText = isLocked ? 'lock' : 'unlock'
  const buttonText = isLocked ? 'Unlock' : 'Lock'
  return (
    <CardMainContainer>
      <CardContainer>
        <ImgTextContainer>
          <ImgEle src={imgSrc} alt={altText} />
          <ParaEle>{paraText}</ParaEle>
        </ImgTextContainer>
        <ButtonContainer>
          <ButtonEle onClick={isClickedButton}>{buttonText}</ButtonEle>
        </ButtonContainer>
      </CardContainer>
    </CardMainContainer>
  )
}

export default Unlock
