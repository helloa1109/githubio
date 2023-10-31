import React, { useEffect, useState } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import "../Style/LayOut.css";
import { Container1, Container1Inner, Container1Link, Container2, Container2Inner, Container3, Container2Span, Container2ContactInfo, Container2MyText, Container4, Container2Contact, Container4Card, Container4Card2, Container4Button, Container4InfoText, Container4InfoTextWrapper, Container4Card3, Container4InfoText2, Container4More } from '../StyleComponents/StyleComponent';
import js from "../img/js.png";
import ts from "../img/ts.png";
import react from "../img/react.png";
import css from "../img/css.png";
import figma from "../img/figma.png";
import confluence from "../img/confluence.png";
import notion from "../img/notion.png";
import recoil from "../img/recoil.png";
import styled from "../img/styled.png";
import vscode from "../img/vscode.png";
import intelliJ from "../img/IntelliJ.png";
import jQuery from "../img/jquery.png";
import ModalPage from './ModalPage';


function Layout(props) {

    let options = {
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
        navigation: false,
        delay: 1000,

        
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    let a;

    useEffect(() => {
        if (isModalOpen) {
            a = window.onwheel;
            window.onwheel = ()=>console.log('');
        } else {
            window.onwheel = a;
        }
    }, [isModalOpen]);


    return (
        <SectionsContainer {...options}>
            <Section>
                <Container1>
                    <Container1Inner>
                        <span className='InfoSpan1'>Lee Sang Hyuk</span>
                        <span className='InfoSpan2'>FRONT-END DEVLOPER</span>
                        <Container1Link>
                            <a href='https://github.com/helloa1109' target='_blank' rel='noopener noreferrer' className='InfoLink'>GitHub</a>
                            <a href='https://www.notion.so/my-name-is-Sang-Hyuk-5995b4ab5c0448539c698da2bd0bd612?pvs=4' target='_blank' rel='noopener noreferrer' className='InfoLink'>Notion</a>
                        </Container1Link>
                    </Container1Inner>
                </Container1>
            </Section>

            <Section>
                <Container2>
                    <Container2Inner>
                        <Container2Span as="span">About Me</Container2Span>
                        <Container2MyText>끊임없이 노력하는 프론트엔드 개발자 이상혁입니다</Container2MyText>
                        <Container2MyText>문제에 부딪힐 때마다 호기심을 갖고 해답을 찾는 과정을 즐기며</Container2MyText>
                        <Container2MyText>속도보다는 "왜?"라는 질문을 떠올리고 원인을 파악하며 문제를 해결하는 것을 선호합니다.</Container2MyText>


                        <Container2Contact>교육수료</Container2Contact>
                        <Container2ContactInfo>🎓 비트캠프 네이버클라우드 AiaaS 4기 수료</Container2ContactInfo>
                        <span style={{ color: 'white' }}>* Java 풀스택과정</span>

                        <Container2Contact>연락처</Container2Contact>
                        <Container2ContactInfo>helloa1109@naver.com</Container2ContactInfo>
                        <Container2ContactInfo>010-2593-2329</Container2ContactInfo>

                    </Container2Inner>
                </Container2>
            </Section>

            <Section>
                <Container3>
                    <div className='Container3mobile1'>
                        <div className='Container3Text1'>FRONT-END</div>
                        <div className='image-container'>
                            <div className='image-hover' data-alt='JavaScript'>
                                <img src={js} alt='JavaScript' data-alt='JavaScript' className='jspng' />
                            </div>
                            <div className='image-hover' data-alt='TypeScript'>
                                <img src={ts} alt='TypeScript' className='tspng' />
                            </div>
                            <div className='image-hover' data-alt='React'>
                                <img src={react} alt='React' className='reactpng' />
                            </div>
                            <div className='image-hover' data-alt='css'>
                                <img src={css} alt='css' className='csspng' />
                            </div>
                            <div className='image-hover' data-alt='recoil'>
                                <img src={recoil} alt='recoil' className='recoilpng' />
                            </div>
                            <div className='image-hover' data-alt='styled'>
                                <img src={styled} alt='styled' className='styled' />
                            </div>
                            <div className='image-hover' data-alt='jQuery'>
                                <img src={jQuery} alt='jQuery' className='jQuery' />
                            </div>
                        </div>
                    </div>
                    <div className='Container3mobile2'>
                        <div className='Container3Text2'>Tools</div>
                        <div className='image-container'>
                            <div className='image-hover' data-alt='figma'>
                                <img src={figma} alt='figma' data-alt='figma' className='figmapng' />
                            </div>
                            <div className='image-hover' data-alt='confluence'>
                                <img src={confluence} alt='confluence' className='confluence' />
                            </div>
                            <div className='image-hover' data-alt='notion'>
                                <img src={notion} alt='notion' className='notion' />
                            </div>
                            <div className='image-hover' data-alt='vscode'>
                                <img src={vscode} alt='vscode' className='vscode' />
                            </div>
                            <div className='image-hover' data-alt='intelliJ'>
                                <img src={intelliJ} alt='intelliJ' className='intelliJ' />
                            </div>
                        </div>
                    </div>
                </Container3>

            </Section>

            <Section>
                
                <Container4>
                    <Container4Card2>
                        <Container4Button href="https://github.com/helloa1109/Dreamstay">Github</Container4Button>
                        <Container4InfoTextWrapper>
                            <Container4InfoText2>HTML</Container4InfoText2>
                            <Container4InfoText2>CSS</Container4InfoText2>
                            <Container4InfoText2>JAVASCRIPT</Container4InfoText2>
                            <Container4InfoText2>jQuery</Container4InfoText2>
                            <Container4InfoText2>BOOTSTRAP</Container4InfoText2>
                            <Container4InfoText2>SPRING BOOT</Container4InfoText2>
                        </Container4InfoTextWrapper>
                        <Container4More onClick={openModal}>자세히보기</Container4More>

                    </Container4Card2>

                    <Container4Card>
                        <Container4Button href="https://github.com/helloa1109/wepli">Github</Container4Button>
                        <Container4InfoTextWrapper>
                            <Container4InfoText>React</Container4InfoText>
                            <Container4InfoText>Recoil</Container4InfoText>
                            <Container4InfoText>Axios</Container4InfoText>
                            <Container4InfoText>Stomp</Container4InfoText>
                            <Container4InfoText>JWT</Container4InfoText>
                            <Container4InfoText>CSS</Container4InfoText>
                        </Container4InfoTextWrapper>
                        <Container4More>자세히보기</Container4More>

                    </Container4Card>


                    <Container4Card3>
                        <Container4Button href="https://github.com/helloa1109/goodseul">Github</Container4Button>
                        <Container4InfoTextWrapper>
                            <Container4InfoText>React</Container4InfoText>
                            <Container4InfoText>Recoil</Container4InfoText>
                            <Container4InfoText>Axios</Container4InfoText>
                            <Container4InfoText>TypeScript</Container4InfoText>
                            <Container4InfoText>JWT</Container4InfoText>
                            <Container4InfoText>STOMP</Container4InfoText>
                            <Container4InfoText>SCSS</Container4InfoText>
                        </Container4InfoTextWrapper>
                        <Container4More>자세히보기</Container4More>
                    </Container4Card3>
                    {
                    isModalOpen ? (
                        <ModalPage setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
                    )   : null
                }
                   
                </Container4>
                
            </Section>

        </SectionsContainer>
    );
}

export default Layout;
