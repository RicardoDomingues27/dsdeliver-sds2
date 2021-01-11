import React from 'react';
import {StyleSheet, Text, View , Image} from    'react-native';

export default function Header(){
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')}/>
            <Text style={styles.text}>DS Deliver RD</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#Da5c5c',
        height: '12%',
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        lineHeight:25,
        letterSpacing: -0.24,
        color:'#fff',
        marginLeft: '3%',
        fontFamily: 'OpenSans_700Bold'
    }
});