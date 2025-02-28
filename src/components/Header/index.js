import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookies'

import Popup from 'react-poup'
import {BsMoon,BsBrightnessHigh} from `react-icons/bs`

import {FiLogOUt} from 'react-icons/fi'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import{
    LogoLink,
    NavbarHeader,
    HeaderLogo,
    ActionsContainer,
    ThemeButton,
    LogoutIconButton,
    LogoutButton,
    ProfileImage,
    ModelContainer,
    CloseButton,
    ConfirmButton,
    ModelDesc,
    ButtonsContainer
} from './styledComponents'

const Header= props =>(
    <ThemeAndVideoContext.Consumer>
    {value =>{
        const {isDarkTheme,toggleTheme}=value
        const color=isDarkTheme ? '#ffffff':'#00306e'
        const bgColor=isDarkTheme ? '#321f20' :'#f1f5f9'

        const onChangeTheme =() =>{
            toggleTheme()
        }

        const onClickLogout =()=>{
            const {history}=props
            Cookies.remove('jwt_token')
            history.replace('/login')
        }
        return(
            <NavbarHeader bgColor={bgColor}>
            <LogoLink to="/">
            <HeaderLogo
            src={
                isDarkTheme ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                :"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            }
            alt="website logo"/>
            
            </LogoLink>
            <ActionsContainer>
            <ThemeButton
            type="button" data-testid="theme" onClick={onChangeTheme}
            >
            {isDarkTheme ?(
                <BsBrightnessHigh color="#ffffff" size={25}/>
            ):(
                <BsMoon size={25}/>
            )}
            </ThemeButton>
            <ProfileImage 
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="profile" />

            <Popup
            modal trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                </LogoutButton>
            }
            >
            {close =>(
                <ModelContainer>
                <ModelDesc>Are you sure, you want to logout?</ModelDesc>
                <ButtonsContainer>
                
                <CloseButton type="button" data-testid="closeButton"
                onClick={() =>close()}
                >
                Cancel
                </CloseButton>
                <ConfirmButton type="button" onClick={onClickLogout}>Confirm</ConfirmButton>
                </ButtonsContainer>
                </ModelContainer>
            )}
            </Popup>
            <Popup
            modal trigger={
                
        
                <LogoutIconButton type="button">
                <FiLogOUt size={25} color={color}/>
                </LogoutIconButton>
            }
            className="popup-content"
            >
            {close =>(
                <ModelContainer>
                <ModelDesc> Are you went to logout?</ModelDesc>
                <ButtonsContainer>
                <CloseButton type="button" data-testid="closeButton" onClick={()=>close()}>
                Cancel
                </CloseButton>
                <ConfirmButton type="button" on
                </ButtonsContainer>
                </ModelContainer>
            )}
            
            </Popup>
            

            </ActionsContainer>
            </NavbarHeader>
        )
    }}
    
    </ThemeAndVideoContext.Consumer>
)
export default withRouter(Header)