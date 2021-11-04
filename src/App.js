import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner>
        <p>Texto</p>
        <button>Clique aqui</button>
      </Banner>
      <Footer Footer name="Henrique" />
    </>
  );
}

export default App;
