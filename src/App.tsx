import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Login } from './components/Login';
import { GlobalStyle } from './components/Styles/Global';
import { theme } from './components/Styles/Theme';
import ptBR from 'antd/lib/locale/pt_BR';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Login/>
          <GlobalStyle/>
        </div>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
