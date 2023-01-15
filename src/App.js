import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import MainRoutes from './Routes/routes';
import Footer from './Components/Footer';
import StatusBar from './Components/StatusBar';
import GlobalStyle from './Components/assets/Styles/Pages/GlobalStyles';
import AuthProvider from './context/Auth';
import ServicesProvider from './context/Services';

function App() {
  return (
    <AuthProvider>
      <ServicesProvider>
        <Router>
          <Header />
          <StatusBar />
          <ToastContainer autoClose={3500} theme='colored' />
          <MainRoutes />
          <Footer />
          <GlobalStyle />
        </Router>
      </ServicesProvider>
    </AuthProvider>
  );
};
export default App;
