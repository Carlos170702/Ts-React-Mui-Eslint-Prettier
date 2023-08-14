import { Home } from 'pages/Home';
import React from 'react';
import { Provider } from 'react-redux';
import { persistent, store } from 'store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistent}>
          <Home />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
