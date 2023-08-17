import { Home } from 'pages/Home';
import React from 'react';
import { Provider } from 'react-redux';
import { persistent, store } from 'store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Themeprovider from 'theme/ThemeProvider';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistent}>
        <Themeprovider>
          <Home />
        </Themeprovider>
      </PersistGate>
    </Provider>
  );
};

export default App;
