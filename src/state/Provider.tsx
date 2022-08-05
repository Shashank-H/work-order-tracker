import { Provider } from 'react-redux';
import {store} from './store'

export const AppProvider: React.FC<any> = ({children}) =>{

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}