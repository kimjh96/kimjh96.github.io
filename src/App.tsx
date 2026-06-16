import Header from '@components/Header';
import Education from '@sections/Education';
import Experience from '@sections/Experience';
import Footer from '@sections/Footer';
import Hero from '@sections/Hero';
import Projects from '@sections/Projects';
import useThemeMode from '@hooks/useThemeMode';

function App() {
  const { preference, setPreference } = useThemeMode();

  return (
    <>
      <Header preference={preference} onPreferenceChange={setPreference} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;
