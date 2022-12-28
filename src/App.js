import Contacts from "./widgets/Contacts";
import Projects from "./widgets/Projects";
import Skills from "./widgets/Skills";
import TopBar from "./widgets/TopBar";
import Welcome from "./widgets/Welcome";

function App() {
  return (
    <div className="font-mono max-w-screen-md m-auto">
      <div className="m-5 md:m-0">
        <Welcome className='mt-28' />
        <Skills className='mt-8' />
        <Projects className='mt-8' />
      </div>
      <Contacts className='mt-3' />
      <TopBar />
    </div>
  );
}

export default App;
