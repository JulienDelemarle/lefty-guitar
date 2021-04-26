import styled from 'styled-components';

const Smain = styled.main`
  color: #3f3a3a;
  display: flex;
  justify-content: center;
  height: 30vh;
`;

const Sarticle = styled.article`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const Stext = styled.p`
  font-family: 'Righteous';
  font-size: 1.5em;
  line-height: 1.4em;
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 25px;
  margin-top: 80px;
  box-shadow: 0px 5px 10px black;
`;

export default function Main() {
  return (
    <>
      <Smain className='Main'>
        <Sarticle>
          <Stext>
            <p>
              {`Parce qu'il est très difficile pour nous,  guitaristes gauchers de trouver la guitare que l'on souhaite. Lefty Guitars vous propose de vous faciliter la vie!
            Que vous cherchiez  une guitare accoustique classique, folk, swing manouche ou bien électrique, ici retrouvez en un clic les meilleurs sites en accédant directement à leurs offres.`}
            </p>
          </Stext>
        </Sarticle>
      </Smain>
    </>
  );
}
