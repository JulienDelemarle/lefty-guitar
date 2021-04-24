import './css/reset.css';
import Header from './components/Header';
import styled from 'styled-components';
import Main from './components/Main';
import Footer from './components/Footer';

const SApp = styled.div`
  font-family: 'Knewave';
  background-color: black;
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  return (
    <SApp>
      <Header />
      <Main />
      <Footer />
    </SApp>
  );
}

export default App;
