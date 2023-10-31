import styled from 'styled-components';

export const ModalBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`;

export const Modaltest = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 25%;
`;

export const ModalContainer = styled.div`
    position: fixed;
    background: #fff;
    width: 60%;
    max-width: 600px;
    height: 600px;
    overflow-y: auto;
    margin: 0 auto;
    padding: 10px 10px;
    border-radius: 5px;
    background: #fff;
    border-radius: 30px;
    z-index: 2;
    ul {
        list-style: none;
    }

    img{
        width: 500px;
        
    }

    .finishpng{
        height: 400px;
    }
`;

export const ModalTitle = styled.div`
    font-size: 24px;
    margin-top: 20px;
    margin-left: 20px;
`;

export const ModalContent = styled.div`
    font-size: 16px;
    margin-right: 20px;
    
    span{
        font-size: 18px;
    }
`;

export const ModalClose = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-top: 10px;
    padding: 2px;
    background-color: black;
    width: 50px;
    color: white;
    border-radius: 30px;
    cursor: pointer;
`;