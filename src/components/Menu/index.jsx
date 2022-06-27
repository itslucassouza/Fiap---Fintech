import {AiOutlineArrowRight, AiOutlineClose} from 'react-icons/ai'
import { ButtonContainer, ButtonsContent, IconContent, MenuContainer, MidContent, ProfileContent, RightContent, UserDescriptionContent } from './styles'
import {CgProfile} from 'react-icons/cg'

export const ButtonContent = () => {
    return (
        <ButtonContainer>
            <IconContent>
                <CgProfile  size={37}/>
            </IconContent>
            <MidContent>
            <p>
                Account Settings <br />
                
                </p>
                <p>
            Better Control on Your Account
                </p>
            </MidContent>
            <RightContent>
                <AiOutlineArrowRight size={37} />
            </RightContent>
        </ButtonContainer>
    )
}


export const Menu = ({handleOpenMenu}) => {
    return (
        <MenuContainer>
            <ProfileContent>
                <div>
                <img  
                src="https://avatars.githubusercontent.com/u/61891084?v=4" />
                </div>
            <AiOutlineClose size={28} onClick={handleOpenMenu} />
            </ProfileContent>

            <UserDescriptionContent>
                <h1>Lucas Souza</h1>
                <p>Front-end Specialist at Yssy</p>
            </UserDescriptionContent>

            <ButtonsContent>
                <ButtonContent />
                <ButtonContent />
                <ButtonContent />
                <ButtonContent />
            </ButtonsContent>
        </MenuContainer>
    )
}