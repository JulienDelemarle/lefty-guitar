import styled from 'styled-components';

const Sh1 = styled.h1`
  font-family: 'Knewave';
  text-align: center;
  font-size: 3em;
  color: #dedede;
  padding-top: 30px;
`;
const SButtonWrapper = styled.nav`
  background-color: grey;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SButton = styled.button`
font-family: 'Knewave';
border-radius: 20px;
padding: 5px 20px;
font-size: 30px;
outline: none;
cursor: pointer;
border: none;
transition: transform 0.2s ease;
&:hover {
  background-color: lightgrey;
  transform: translateY(-0.5rem) scale(1.02);
  color: black;
`;

const Stitle = styled.title`
  display: flex;
  justify-content: center;
  padding: 20px;
  font-family: 'Knewave';
  font-size: 70px;
  font-weight: bold;
  background-color: rgb(44, 42, 42);
  color: white;
`;

export default function Header() {
  return (
    <header>
      <Sh1>
        <Stitle>Lefty Guitars</Stitle>
      </Sh1>
      <nav>
        <SButtonWrapper>
          <SButton> Electric guitars </SButton>
          <SButton
            onClick={() =>
              alert('Please do the quiz to get your own SuperHero!')
            }
          >
            Accoustic guitars
          </SButton>
          <SButton> News </SButton>
        </SButtonWrapper>
      </nav>
    </header>
  );
}
