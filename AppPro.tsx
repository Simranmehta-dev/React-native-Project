import React from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    Image,
    TextInput
} from 'react-native';


function AppPro(): JSX.Element{
    const isDarkMode=useColorScheme() === 'dark'
   return (
       <View style={styles.container}>
            <Text style={isDarkMode ? styles.white : styles.darkText}>Hello World</Text>
            <Image
      source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',}}
      style={{width: 200, height: 200}}
      />
      <TextInput
      style={{
        height:50,
        width:300,
        borderColor:'pink',
        borderWidth:5
      }}
      defaultValue="Type here kitties"
      />
       </View>
   )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',//left to right
       // justifyContent:'center'//top to bottom
    },
    white:{
        color:'#FFFFFF'
    },
    darkText:{
        color:'#000000'
    }
})

/*useColorScheme return us 3 values:
  1."light"
  2."dark"
  3."null"

  it is provided to us by Apperance
*/

export default AppPro