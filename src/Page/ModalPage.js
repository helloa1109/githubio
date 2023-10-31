import React  from 'react';
import { ModalBackground, ModalClose, ModalContainer, ModalContent, ModalTitle, Modaltest } from '../StyleComponents/ModalStyled';
import mypage from "../img/mypage.gif";
import pay from "../img/pay.gif";
import finish from "../img/finish.gif";
import nouser from "../img/nouser.gif";
import nouser2 from "../img/nouser2.gif";
import qna from "../img/qna.gif";
import footer from "../img/footer.png";
import other from "../img/other.gif";
function ModalPage({ isModalOpen, setIsModalOpen }) {
    const handleClose = (e) => {
        e.stopPropagation();
        setIsModalOpen(false);
    }

    return (
        <ModalBackground >
            <Modaltest onClick={handleClose}/>
            <ModalContainer>
            <ModalClose onClick={handleClose}>닫기</ModalClose>
                <ModalTitle>🏰 첫번째 프로젝트 DreamStay</ModalTitle>
                <ModalContent>
                    <h3>프로젝트 기간 : 23.05.01 ~ 23.05.22</h3>
                    <h4>기능구현한 내용입니다</h4>
                    <ul>
                        <li>
                            <h2>회원가입</h2>
                        </li>

                        <li>
                            <h2>마이페이지</h2>
                            <span>1. 예약확인 및 취소</span><br/>
                            <span>2. 회원정보수정</span><br/>
                            <span>3. 회원탈퇴</span>
                        </li>
                        <img src={mypage} alt='mypage' className='mypagepng' />
                        <li>
                            <h2>예약페이지</h2>
                            <span>1. 플로팅 메뉴 구현</span><br/>
                            <span>2. css 및 jquery 사용하여 아코디언 구현</span>
                        </li>
                        <img src={pay} alt='pay' className='paypng' />
                        <li>
                            <h2>예약완료페이지</h2>
                            <span>1. 예약번호 확인 후 복사기능 구현</span><br/>
                            <span>2. css & keyframe 사용하여 애니메이션 적용</span>
                        </li>
                        <img src={finish} alt='finish' className='finishpng' />
                        <li>
                            <h2>비회원 예약확인 페이지 (반응형)</h2>
                            <span>1. 비회원 예약확인</span><br/>
                            <span>2. 비회원 예약취소</span>
                        </li>
                        <img src={nouser} alt='nouser' className='paypng' />
                        <img src={nouser2} alt='nouser2' className='paypng' />
                        <li>
                            <h2>Q&A css</h2>
                            <span>1. css </span>
                        </li>
                        <img src={qna} alt='qna' className='paypng' />
                        <li>
                            <h2>footer</h2>
                        </li>
                        <img src={footer} alt='footer' className='paypng' />

                        <li>
                            <h2>그 외 css</h2>
                        </li>
                        <img src={other} alt='other' className='paypng' />
                    </ul>
                </ModalContent>
                
            </ModalContainer>
            
        </ModalBackground>
    );
}

export default ModalPage;