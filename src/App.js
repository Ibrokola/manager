import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
    componentWillMount() {
        var config = {
                apiKey: 'AIzaSyAtv_zt0xPptP9uoqLsvjJuRlsC1K8YhVQ',
                authDomain: 'manager-a2ae5.firebaseapp.com',
                databaseURL: 'https://manager-a2ae5.firebaseio.com',
                projectId: 'manager-a2ae5',
                storageBucket: 'manager-a2ae5.appspot.com',
                messagingSenderId: '50129044675'
            };

            firebase.initializeApp(config);

    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;