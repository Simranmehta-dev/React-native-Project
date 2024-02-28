import React from "react";

import {View,Text,SafeAreaView,ScrollView,StyleSheet} from 'react-native'


const ElevatedCard=()=>{
  return(
     <View>
        <Text style={styles.headingText}>Elevated Card</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.CardElevated1]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card,styles.CardElevated2]}>
                <Text>Me</Text>
            </View>
            <View style={[styles.card,styles.CardElevated3]}>
                <Text>To</Text>
            </View>
            <View style={[styles.card,styles.CardElevated4]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card,styles.CardElevated5]}>
                <Text>More...</Text>
            </View>
            <View style={[styles.card,styles.CardElevated6]}>
                <Text>😃</Text>
            </View>
        </ScrollView>
     </View>
  )
}

const styles= StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
        //paddingLeft:
    },
    container:{
        padding:8
        
     },
    card:{
        width:100,
        height:100,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        margin:8
    },
    CardElevated1:{
        backgroundColor:'#EF5354',
        elevation:20,
        shadowColor: '#EF5354',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 2 },
    },
    CardElevated2:{
        backgroundColor:'#3498DB',
        elevation:20,
        shadowColor: '#3498DB',
        shadowRadius: 2,
        shadowOpacity: 0.5,
    },
    CardElevated3:{
        backgroundColor:'#6AB04A',
        elevation:20,
        shadowColor: '#6AB04A',
        shadowRadius: 2,
        shadowOpacity: 0.5,
    },
    CardElevated4:{
        backgroundColor:'#F4C724',
        elevation:20,
        shadowColor: '#F4C724',
        shadowRadius: 2,
        shadowOpacity: 0.5,
    },
    CardElevated5:{
        backgroundColor:'#758AA2',
        elevation:20,
        shadowColor: '#758AA2',
        shadowRadius: 2,
        shadowOpacity: 0.5,
    },
    CardElevated6:{
        backgroundColor:'#BB2CD9',
        elevation:20,
        shadowColor: '#BB2CD9',
        shadowRadius: 2,
        shadowOpacity: 0.5,
    },
    

});

export default ElevatedCard