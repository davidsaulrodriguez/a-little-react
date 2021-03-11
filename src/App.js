import './App.css';
import Header from './componets/Header';
import Sidebar from './componets/Sidebar';
import PropsTest from './componets/PropsTest';

function App() {
  return (
    <div className="App">
      <Header />
      <PropsTest name={"Jerry"} age={32} gender={"male"}/>
      <PropsTest name={"Tom"} age={20} gender={"female"}/>
      <PropsTest name={"Edwina"} age={50} gender={"non-binary"} />
      <Sidebar />
    </div>
  );
}

export default App;
