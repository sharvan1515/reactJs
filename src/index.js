import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Header from './Components/Header';
//import Footer from './Components/Footer';
//import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
//import Main from './Components/Main';
import Employee from './Classbased/Employee';
import Login from './Login';
import ClassUpdateDerived from './Components/Update/ClassUpdateDerived';
import ShouldUpdate from './Components/Update/ShouldUpdate';
import ComponentDidUpdate from './Components/Update/ComponentDidUpdate';
import Container from './Components/Container';

import Header from './Layouts/Header';
import Leftsidebar from './Layouts/Leftsidebar';
import Main from './Layouts/Main';
import Footer from './Layouts/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Header />
    <section>
      <LeftSideBar />
      <Main />
    </section>
    <Footer /> */}

    {/* <Employee dpt="JAVA" /> */}
    {/* <Login /> */}

    {/* <ClassUpdateDerived  oldName = "Sanjeev" /> */}

    {/* <ShouldUpdate /> */}

    {/* <ComponentDidUpdate username = "sharvan623" /> */}
    {/* <Container /> */}
    {/* <App /> */}
    
    {/* <Header />
    <section>
      <Leftsidebar />
      <Main />
    </section>
    <Footer /> */}
    <App />
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
