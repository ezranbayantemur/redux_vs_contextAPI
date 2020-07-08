import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'

import { reducer } from './context/reducers'
import { initialState } from './context/store'

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const store = createStore(reducer, initialState)

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <FirstPage />
                <SecondPage />
            </SafeAreaView>
        </Provider>
    )
};

export default App