import styled from 'styled-components';

const Ssection = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f2e8db;
  border-radius: 5px;
  box-shadow: 0px 5px 10px black;
  width: 80vw;
  height: 50vh;
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
  font-weight: bold;
  color: #3f3a3a;
  border-bottom: solid 1px #3f3a3a;
`;

const Sarticle = styled.article``;

export default function SectionElec() {
  return (
    <Ssection>
      <Stitle>Electric Guitars</Stitle>
      <Sarticle></Sarticle>
    </Ssection>
  );
}
