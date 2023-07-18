import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {Greet} from './components/Greet';
import { Counter } from './components/Counter';
import { Hello } from './components/Hello';
import { UserGreetings } from './components/UserGreetings';
import { ClickHandler } from './components/ClickHandler';
import { Message } from './components/Message';
import { Form } from './components/Form';
import {StyleSheet} from './components/StyleSheet'
import { Inline } from './components/Inline';
import './myAppStyles.css'
import styles from './myAppStyles.module.css'
import { StyledButton } from './components/Buttons/Button.styles';
import { ParentComponent } from './components/ParentComponent';
import { NamedList } from './components/NamedList';
import { HookCounterOne } from './components/HookCounterOne';
import { HookCounterThree } from './components/HookCounterThree';
import { HookCounterFour } from './components/HookCounterFour';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { AddDeleteTableRows } from './AddDeleteTableRows';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { DataFetching } from './components/DataFetching';
import { FocusInput } from './components/FocusInput';
function App() {
  return (
    <>
    {/* <Navbar/> */}
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
      {/* <Form/> */}
      {/* <StyleSheet primary={false}/> */}
      {/* <Inline/> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      
      {/* <StyledButton variant='outline'>Styled Button</StyledButton>
      <div><br/></div>
      <StyledButton>Styled Button</StyledButton> */}
      {/* <ParentComponent/> */}
      {/* <NamedList/> */}
      {/* <HookCounterOne/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      
      {/* <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='order-summary' element={<OrderSummary/>}/>
         <Route path='products' element={<Products/>}>
              <Route index element={<FeaturedProducts/>}/>
              <Route path='featured' element={<FeaturedProducts/>}/>
              <Route path='new' element={<NewProducts/>}/>
         </Route>
      </Routes> */}
      {/* <AddDeleteTableRows/> */}
      {/* <DataFetching/> */}
      <FocusInput/>
    </div>
    </>
  );
}

export default App;
