import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillUnmount() {
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
        return (
            <Provider store={createStore(reducers)}>
                {/* <View>
                    <Text> */}
                        <LoginForm />
                    {/* </Text>
                </View> */}
            </Provider>
        );
    }
}

export default App;