import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import MainRoutes from './Routes/routes';
import Footer from './Components/Footer';
import StatusBar from './Components/StatusBar';
import GlobalStyle from './Components/assets/Styles/GlobalStyles';
import AuthProvider from './context/Auth';






function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <StatusBar />
        <ToastContainer autoClose={3500} theme='colored' />
        <MainRoutes />
        <Footer />
        <GlobalStyle />
      </Router>
    </AuthProvider>
  );
}

export default App;
