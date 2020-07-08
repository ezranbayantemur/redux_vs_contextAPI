import React, { useContext } from 'react'
import { SafeAreaView, Button, Text, View, TextInput } from 'react-native'

import Context from '../context/store'

const FirstPage = (props) => {
    const { state, dispatch } = useContext(Context)

    return (
        <View>
            <Text>First Page: {state.counter}</Text>
            <Button
                title="Increase Counter"
                onPress={() => dispatch({ type: "INCREASE_COUNTER" })}
            />
            <Button
                title="Decrease Counter"
                onPress={() => dispatch({ type: "DECREASE_COUNTER" })}
            />
        </View>
    );
}

export default FirstPage;