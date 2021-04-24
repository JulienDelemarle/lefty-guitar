import './Main.css';
import styled from 'styled-components';

const Smain = styled.main`
  background-color: rgb(44, 42, 42);
  color: white;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Sarticle = styled.article`
  width: 50%;
  margin: 0 auto;
`;
const Stext = styled.p`
  border: solid 1px red;
  font-size: 1.3em;
  line-height: 1.3em;
  background-color: rgba(182, 169, 169, 0.5);
  border-radius: 5px;
  padding: 25px;
  margin-top: 125px;
`;

export default function Main() {
  return (
    <Smain className='Main'>
      <Sarticle>
        <Stext>
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          </p>
        </Stext>
      </Sarticle>
    </Smain>
  );
}
