import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import { Counter } from './components/Counter';
import { Hello } from './components/Hello';
import { UserGreetings } from './components/UserGreetings';
import { ClickHandler } from './components/ClickHandler';
import { Message } from './components/Message';
import { Form } from './components/Form';

function App() {
  return (
    <div className="App">
      
      {/* <Greet name='ABC' course='React JS'>
        <p>Hello How are you</p>
      </Greet>
      <Greet name='XYZ' course='Angualr'>
        <button>Button</button>
      </Greet>
      <Greet name='PQR' course='Vue'/> */}
      {/* <Counter/> */}
      {/* <Hello/> */}
      {/* <UserGreetings/> */}
      {/* <ClickHandler/> */}
      {/* <Message/> */}
      <Form/>
    </div>
  );
}

export default App;
