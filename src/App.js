
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import HomePage from './pages/HomePage';
import { themeSettings } from './theme';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import ChatBot from './pages/ChatBot';
import JsConverter from './pages/JsConverter';
import ScifiImage from './pages/ScifiImage';

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
   
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/summary' element={<Summary/>} />
    <Route path='/paragraph' element={<Paragraph/>} />
    <Route path='/chatbot' element={<ChatBot/>} />
    <Route path='/jsconverter' element={<JsConverter/>} />
   < Route path='/scifi-image' element={<ScifiImage/>} />
       </Routes>
       </ThemeProvider>
    </>
  );
}

export default App;
