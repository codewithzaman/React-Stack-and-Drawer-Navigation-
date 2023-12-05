import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const UserScreen = (props) => {
    return (
        <View style={styles.viewStyle}>
         <Text style={styles.textStyle}>This is User Screen </Text>
         <Button 
             title='Navigate to Home' 
            onPress={()=> props.navigation.navigate('Home')}
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
    textStyle:{
        fontSize:28,
        color:'black'

    },

})

export default UserScreen;
