import './App.scss';
import 'macro-css';
import logo from './logo/koba-logo.svg'
import React from 'react'

function App() {
  return(
    <div className="wrapper flex-column d-flex clear">
       <header className='header'>
         <div className='logo'>
          <img src={logo} className="pr-20" alt="logo" />
            <div>
              <h1>Коба</h1>
              <p>Мужской парикмахер</p>
            </div>
         </div>
          <nav className='nav'>
            <a>Обо мне</a>
            <a>Прайс лист</a>
            <a>Отзывы</a>
          </nav>
        </header>

        <section className='content'>
          content
        </section>
    </div>
  ) 
}

export default App;


/*  
     */