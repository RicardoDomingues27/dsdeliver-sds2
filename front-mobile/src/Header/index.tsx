import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View , Image} from    'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header(){
    const navigation = useNavigation();

    const handleOnPress = () =>{
        navigation.navigate('Home');
    }

    return (
        <TouchableWithoutFeedback onPress={handleOnPress }>
            <View style={styles.container}>
                <Image source={require('../../assets/logo.png')}/>
                <Text style={styles.text}>DS Deliver RD</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#Da5c5c',
        height: 90,
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