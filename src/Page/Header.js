import React, { useEffect } from 'react';
import { HeaderContainer, HeaderInner, HeaderMenu } from '../StyleComponents/StyleComponent';
import "../Style/Header.css";

function Header(props) {

    const { activeSection, setActiveSection } = props;

    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
    };

    useEffect(() => {
        const sectionElements = document.querySelectorAll('.Section'); 
        sectionElements.forEach((section) => {
            if (activeSection) {
                section.classList.add('active-section');
            } else {
                section.classList.remove('active-section'); 
            }
        });
    }, [activeSection]);


    return (
        <HeaderContainer>
            <HeaderInner>
                <h1>이상혁</h1>
                <HeaderMenu>
                <div className={`HeaderMenuItem ${activeSection === 'sectionOne' ? 'active' : ''}`}>
                        <a href='#sectionOne' onClick={() => handleSectionChange('sectionOne')}>
                            home
                        </a>
                    </div>
                    <div className={`HeaderMenuItem ${activeSection === 'sectionTwo' ? 'active' : ''}`}>
                        <a href='#sectionTwo' onClick={() => handleSectionChange('sectionTwo')}>
                            about
                        </a>
                    </div>
                    <div className={`HeaderMenuItem ${activeSection === 'sectionThree' ? 'active' : ''}`}>
                        <a href='#sectionThree'  onClick={() => handleSectionChange('sectionThree')}>
                        skill
                        </a>
                    </div>

                    <div className={`HeaderMenuItem ${activeSection === 'sectionFour' ? 'active' : ''}`}>
                        <a href='#sectionFour' onClick={() => handleSectionChange('sectionFour')}>
                        project
                        </a>
                    </div>
                </HeaderMenu>
            </HeaderInner>
        </HeaderContainer>
    );
}

export default Header;