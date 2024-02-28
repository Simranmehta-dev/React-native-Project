import React from "react";

import {View,Text,SafeAreaView,ScrollView,StyleSheet,Linking,Image,TouchableOpacity} from 'react-native'


const ActionCard=()=>{
    function openWebsite(websiteLink: string){
      Linking.openURL(websiteLink)
    }
  return(
     <View>
        <Text style={styles.headingText}>Action Card</Text>
        <View style={[styles.card,styles.elevatedCard]}>
            <View style={styles.headingContainer}>
              <Text style={styles.headerText}>
                What's new in Javascript 21 -ES12
              </Text>
            </View>
            <Image
            source={{
              uri:'https://miro.medium.com/v2/resize:fit:1134/1*F4cJeBulfT9-Q1Eap-rO0Q.png'
            }}
            style={styles.cardImage}
            />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime cupiditate recusandae sapiente a, soluta veritatis sed repudiandae nulla laboriosam explicabo, quas voluptate, adipisci quibusdam aliquid dolores natus quae. Saepe mollitia neque autem modi in?
                </Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={()=>openWebsite('https://simranmehta18.hashnode.dev/the-problems-you-might-face-while-setting-up-react-native-and-android-studio')}>
                    <Text style={styles.socialLink}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>openWebsite('https://simranmehta18.hashnode.dev/the-problems-you-might-face-while-setting-up-react-native-and-android-studio')}>
                    <Text style={styles.socialLink}>Follow Me</Text>
                </TouchableOpacity>
            </View>
        </View>
     </View>
  )
}

const styles=StyleSheet.create({
headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
    paddingTop:14
},
card:{
    width:390,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:12
},
elevatedCard:{
    backgroundColor:'#E07C24',
    elevation:20,
    shadowColor: '#E07C24',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 2 },
    borderRadius:9
},
headingContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
headerText:{
    color:'#000000',
    fontSize:16,
    fontWeight:'600'
},
cardImage:{
    height:200
},
bodyContainer:{
    padding:10,
    
},
footerContainer:{
    padding:8,
    flexDirection:'row',
    //alignItems:'center',
    justifyContent:'space-evenly'
},
socialLink:{
    fontSize:16,
    color:'#000000',
    backgroundColor:'#FFF',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6

}
})

export default ActionCard