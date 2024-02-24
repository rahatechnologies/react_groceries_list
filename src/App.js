import Header from './Header';
import Content from './Content';

import Footer from './Footer';

function App() {
  const name = 'Soumitra';
  const namesArray = ['Surya', 'Soumitra', 'Koushik'];

  const objectExample = [
    { name: 'Surya', Age: 25 },
    { name: 'Soumitra', Age: 24 },
    { name: 'Koushik', Age: 24 },
  ];

  const handleNameChange = () => {
    const int = Math.floor(Math.random() * 3);
    console.log(`int: ${int}`);
    return namesArray[int];
  };

  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
