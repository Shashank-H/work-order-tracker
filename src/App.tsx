import 'antd/dist/antd.min.css';
import './App.css';
import Main from './Main';
import { AppProvider } from './state/Provider';

function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
