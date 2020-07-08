import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

const FirstPage = (props) => {
    const myCounter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <SafeAreaView>
            <Text>First Page: {myCounter}</Text>
            <Button
                title="Increase Counter"
                onPress={() => dispatch({ type: "INCREASE_COUNTER" })}
            />
            <Button
                title="Decrease Counter"
                onPress={() => dispatch({ type: "DECREASE_COUNTER" })}
            />
        </SafeAreaView>
    );
}

export default FirstPage;