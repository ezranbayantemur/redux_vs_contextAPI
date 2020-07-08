import React, { useReducer } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import Provider from './context/Provider'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'

const App = () => {
    return (
        <Provider>
            <SafeAreaView style={{ flex: 1 }}>
                <FirstPage />
                <SecondPage />
            </SafeAreaView>
        </Provider>
    )
}

export default App;