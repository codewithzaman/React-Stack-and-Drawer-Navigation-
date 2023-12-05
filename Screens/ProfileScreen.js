import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const ProfileScreen = (props) => {
    return (
        <View style={styles.viewStyle}>
         <Text style={styles.textStyle}>This is Profile Screen </Text>
         <Button 
             title='Navigate to User' 
            onPress={()=> props.navigation.navigate('User')}
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

export default ProfileScreen;
