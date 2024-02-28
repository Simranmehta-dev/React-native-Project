import react from 'react'
import {View,Text,SafeAreaView,ScrollView, StyleSheet} from 'react-native'

const FlatCard=()=>{
    return(
        <View>
            <Text style={styles.headingText}>Flat Card</Text>
            <View style={styles.container}>
                <View style={[styles.card,styles.card1]}>
                    <Text>Red</Text>
                    
                </View>
                <View style={[styles.card,styles.card2]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card,styles.card3]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card,styles.card4]}>
                    <Text>Yellow</Text>
                </View>
                <View style={[styles.card,styles.card5]}>
                    <Text>Gray</Text>
                </View>
                <View style={[styles.card,styles.card6]}>
                    <Text>Pink</Text>
                </View>

            </View>
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
       flex:1,
       flexDirection:'row', // Change flex direction to column
       flexWrap: 'wrap', // Allow items to wrap to the next line
       padding:8,
       //margin:8
       alignContent: 'flex-start',
       
    },
    card:{
        flex:1,
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        justifyContent:'center',
        alignItems:'center'

    },
    card1:{
       backgroundColor:'#EF5354' 
    },
    card2:{
        backgroundColor:'#3498DB' 
     },
    card3:{
        backgroundColor:'#6AB04A' 
     },
     card4:{
        backgroundColor:'#F4C724' 
     },
     card5:{
        backgroundColor:'#758AA2' 
     },
     card6:{
        backgroundColor:'#BB2CD9' 
     },
})

export default FlatCard