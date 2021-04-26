import styled from 'styled-components';

const Ssection = styled.section`
  background-color: #dfdbdb;
  border-radius: 5px;
  box-shadow: 0px 5px 10px black;
  width: 30vw;
  height: 15vh;
  margin: 0 auto;
  margin-top: 20px;
`;

const Stitle = styled.title`
  display: flex;
  justify-content: center;
  height: 5%;
  padding: 20px;
  width: 100%;
  font-family: 'Righteous';
  font-size: 2.5em;
  color: #3f3a3a;
`;

const Sarticle = styled.article``;

export default function ArticleThomann() {
  return (
    <Ssection>
      <Stitle>Thomann</Stitle>
      <Sarticle></Sarticle>
    </Ssection>
  );
}
