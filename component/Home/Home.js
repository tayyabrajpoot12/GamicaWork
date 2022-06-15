import React from 'react';

import { Button, View, StyleSheet } from 'react-native'
import axios from 'axios';
export default () => {

    let data = [

        {
            name: 'Tayyab',
            password: '1234',
            email: 'tayyab@gmail.com',
            type: 'admin',
        },
        {
            name: 'Ali',
            password: '5678',
            email: 'ali@gmail.com',
            type: 'admin',
        },
        {
            name: 'Ahmad',
            password: '1020',
            email: 'ahmad@gmail.com',
            type: 'admin',
        },
        {
            name: 'Hamza',
            password: '1212',
            email: 'hamza@gmail.com',
            type: 'admin',
        },
        {
            name: 'Usman',
            password: '1143',
            email: 'usman@gmail.com',
            type: 'admin',
        },

    ]



     function sendData() {

    data.forEach(  user => {
         
           axios.post('http://192.168.43.152:1111/auth/userData', user )
    });


    }

    return (

        <View>

            <Button title='data' onPress={sendData} />
        </View>

    )

}


