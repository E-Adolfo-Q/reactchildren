import React,{Component} from 'react'
import {
   Text,
   View,
   StyleSheet 
} from 'react-native'

const Card = (props)  =>    
    <View style={styles.container}>
      {props.children}
    </View>

const styles = StyleSheet.create({   
    container:{
        width:400,
        height:100,      
        backgroundColor:'#cecece',
        marginTop:10,
        marginBottom:10
    }
})

export default Card;
