import React from 'react';
import {View, StyleSheet,Text, Button} from 'react-native';

const HomeScreen = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headingStyle}>React Navigation</Text>
            <Text style={styles.textStyle}>This is Home Screen </Text>
            <Button 
             title='Navigate to Profile' 
            onPress={()=> props.navigation.navigate('Profile',{name:'Nader'})}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    viewStyle:{ 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    headingStyle:{
        fontSize:30,
        color:'black',
        textAlign:'center'
    },
    textStyle:{
        fontSize:28,
        color:'black'

    },

})

export default HomeScreen;
