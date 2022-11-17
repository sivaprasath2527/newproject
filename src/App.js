import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loginform from "./components/Login";
import Signupform from "./components/Signup.js";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/Redux';
import Dashboard from './components/Dashboard';

const store = createStore(
  rootReducer,
  window._REDUXDEVTOOLS_EXTENSION_ &&
  window._REDUX_DEVTOOLS_EXTENSION_(),
  applyMiddleware(thunk)
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/Loginform" element={<Loginform />} />
          <Route path="/Signupform" element={<Signupform />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Loginform />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
export default App;
