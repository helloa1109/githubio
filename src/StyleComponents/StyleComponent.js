import styled from 'styled-components';
import wepli from "../img/wepli.png";
import dreamStay from "../img/dreamstay.png";
import goodSeul from "../img/logo.png";

/* Section1 */
export const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Container1Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Container1Link = styled.div`
    margin-top: 40px;
`;

/* Section2 */
export const Container2 = styled.div`
    margin-top: 84px;
    background-color: black;
    height: 80vh;
    width: 100%;
    height: auto;

    @media (min-width: 768px) {
        height: 91.5vh;
        flex-direction: row; 
    }
`;

export const Container2Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Container2MyText = styled.div`
    color: white;
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 5;
    text-align: center;
`;

export const Container2Span = styled.div`
    color: white;
    font-size: 42px;
    font-weight: 600;
`;

export const Container2SpanInfo = styled.div`
    color: white;
    margin-top: 8px;
`;

export const Container2Contact = styled.div`
    color: white;
    font-size: 18px;
    font-weight: 800;
    margin-top: 40px;
    border-bottom: 1px solid #ccc;
`;

export const Container2ContactInfo = styled.div`
    color: white;
    padding: 5px 5px;
    margin-top: 10px;

`;

/* Section3 */
export const Container3 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    @media (max-width: 767px) {
        height: auto;
        margin-top: 100px;
        flex-direction: row;
        justify-content: space-between;
    }
`

/* Section4 */
export const Container4 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: black;
`;

export const Container4InfoTextWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    width: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 4px 4px;
    
`;


export const Container4InfoText = styled.div`
    color: black;
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    font-size: 16px;
    width: 60px auto;
    margin-left: 10px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
`;

export const Container4InfoText2 = styled(Container4InfoText)`

`;

export const Container4Card = styled.div`
    width: 400px; 
    height: 500px;
    margin-left: 50px;
    background-image: url(${wepli});
    background-repeat: no-repeat;
    background-size: 400px 300px;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    transition: transform 0.3s;
    background-color: white;

    &:hover{
        transform: translateY(-7px);
    }

    &:hover::before {
        content: "위플리는 여러 사람들이 함께 노래를 듣거나 영상을 시청할 수 있는 서비스를 제공합니다. 여러 사람들과 플레이리스트를 공유하고, 함께 음악을 듣고 즐겨보세요";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7); 
        opacity: 1;
        transition: opacity 0.3s;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20px;
        box-sizing: border-box; 
        font-size: 22px;
        font-weight: 600;
    }
`;
export const Container4Card2 = styled(Container4Card)`
    background-image: url(${dreamStay});
    
    &:hover::before {
        content: "호텔 통합관리 웹사이트 제작을 통해 Spring Boot를 통한 웹프로그래밍 프로젝트 과제 수행";
    }
`;

export const Container4Card3 = styled(Container4Card)`
    background-image: url(${goodSeul});

    &:hover::before {
        content: "대한민국의 독특한 문화인 '굿'에 대한 온/오프라인 플랫폼 제공";
    }
`;

export const Container4Button = styled.a`
    width: 80px;
    height: 30px;
    background-color: black;
    border-radius: 30px;
    border: 1px solid transparent;
    position: absolute;
    bottom: 10px; 
    left: 50%; 
    transform: translateX(-50%); 
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border 0.3s ease;

    &:hover{
        border: 1px solid green;
    }
`;

export const Container4More = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    bottom: 60px; 
    left: 50%; 
    cursor: pointer;
    font-size: 14px;
`;

/* 헤더 */
export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  color: black;
  z-index: 1; 
`;

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`; 