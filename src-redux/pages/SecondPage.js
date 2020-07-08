import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

const SecondPage = (props) => {
    const myUserName = useSelector(state => state.username)
    const dispatch = useDispatch()

    return (
        <SafeAreaView>
            <Text>Second Page: {myUserName}</Text>
        </SafeAreaView>
    );
}

export default SecondPage;