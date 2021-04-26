import Header from './components/Header';
import styled from 'styled-components';
import Main from './components/Main';
import Footer from './components/Footer';
import SectionAcc from './components/SectionAcc';
import SectionElec from './components/SectionElec';
import './css/reset.css';

const SApp = styled.div`
  font-family: 'Zen Dots';
  background-color: #4f5052;
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  return (
    <SApp>
      <Header />
      <Main />
      <SectionAcc />
      <SectionElec />
      <Footer />
    </SApp>
  );
}

export default App;
