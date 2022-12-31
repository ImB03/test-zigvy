import { Provider } from 'react-redux';
import { store } from './store';

export default function ReduxTookit({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
