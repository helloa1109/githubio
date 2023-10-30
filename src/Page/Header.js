import React from 'react';
import { HeaderContainer, HeaderInner, HeaderMenu } from '../StyleComponents/StyleComponent';
import "../Style/Header.css";
function Header(props) {
    return (
        <HeaderContainer>
            <HeaderInner>
                <h1>이상혁</h1>
                <HeaderMenu>
                    <div className='HeaderMenuItem'>
                        <a href='#sectionOne'>
                            home
                        </a>
                    </div>
                    <div className='HeaderMenuItem'>
                        <a href='#sectionTwo'>
                            about
                        </a>
                    </div>
                    <div className='HeaderMenuItem'>
                        <a href='#sectionThree'>
                        skill
                        </a>
                    </div>

                    <div className='HeaderMenuItem'>
                        <a href='#sectionFour'>
                        project
                        </a>
                    </div>
                </HeaderMenu>
            </HeaderInner>
        </HeaderContainer>
    );
}

export default Header;