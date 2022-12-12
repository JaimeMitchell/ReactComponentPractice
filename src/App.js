import './App.css';
import './components/StatsBar.css'
import './components/SearchBar.css'
import './components/NavigationBar.css'
import './components/LoginControls.css'
import LoginControls from './components/LoginControls';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';
import NewsletterForm from './components/NewsletterForm';
import StatsBar from './components/StatsBar';

function App() {
  return (
    <main>
      <NavigationBar></NavigationBar>
      <SearchBar></SearchBar>
      <LoginControls></LoginControls>
      <HeroSection></HeroSection>
      <NewsletterForm></NewsletterForm>
      <StatsBar></StatsBar>
    </main>
  );
}

export default App;
