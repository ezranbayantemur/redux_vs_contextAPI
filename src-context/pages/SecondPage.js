import React, { useContext } from 'react'
import { SafeAreaView, Button, Text, View, TextInput } from 'react-native'

import Context from '../context/store'

const SecondPage = (props) => {
    const { state, dispatch } = useContext(Context)

    return (
        <View>
            <Text>Second Page: {state.counter}</Text>
        </View>
    );
}

export default SecondPage;