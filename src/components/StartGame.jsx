import styled from "styled-components"


const StartGame = ({toggle}) => {

  return (
    <>
        <Container>
            <div>
            <img src="/images/dices.png" alt="dices" />
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button
                onClick={toggle}
                >Play Now</Button>
            </div>
        </Container>
    </>
  )
}       

export default StartGame


const Container = styled.div`
    height: 100vh;
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    
    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
    }
}
`;


const Button = styled.button`
    padding: 10px 18px;
    min-width: 220px;
    background: #000000;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cusrsor: pointer; 

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in; 
    }
`;