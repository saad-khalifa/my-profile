import { Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import About from './components/About';

function App() {

 
  return (
  <div className="App">
            <Header />
            <About/>
            <Services />
            <Projects />
            <ContactForm />
            <Footer />
        </div>
  );
}

export default App;