import React from "react";

import {View,Text,SafeAreaView,ScrollView,StyleSheet,Image} from 'react-native'


const FancyCard=()=>{
  return(
    <View >
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card,styles.elevated]}>
            

        
        <Image
        source={{
            uri:'https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.webp?b=1&s=170667a&w=0&k=20&c=j7EChxyrwBgS91dphgXz2HXIZqzi8BnYgVz2Up6VHU0='
        }}
        style={styles.cardImage}
        />

        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City,Jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. It has a curved architecture that leans at an 87 degree angle, and a pyramidal shape which has helped it stay erect for centuries. The Hawa Mahal is dedicated to Lord Krishna.</Text>
            <Text style={styles.cardFooter}>12 min away</Text>
            
        </View>
        </View>
        </View> 

       
   
      
  )
}
const styles=StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:390,
        height:380,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:10,
        overflow:'hidden'
    },
    elevated:{
     backgroundColor:'#FFFFFF',
     
     elevation:20,
     shadowColor: '#EF5354',
     shadowRadius: 2,
     shadowOpacity: 0.5,
     shadowOffset: { width: 1, height: 2 },
     borderRadius:10
    },
    cardImage:{
        height:180,
        marginBottom:8,
        //borderRadius:45
    },
    cardBody:{
      flex:1,
      flexGrow:1,
      paddingHorizontal:12
    },
    cardTitle:{
      color:'#000000',
      fontSize:22,
      fontWeight:'bold',
      marginBottom:6
    },
    cardLabel:{
        color:'#000000',
        fontSize:14,
        marginBottom:6
    },
    cardDescription:{
        color:'#000000',
        fontSize:12,
        marginBottom:12,
        flexShrink:1,
        marginTop:6
    },
    cardFooter:{
        color:'#000000',
        fontSize:12
    },
   
    

})

export default FancyCard
