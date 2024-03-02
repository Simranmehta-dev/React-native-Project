import React, {useState} from "react";
import {View,Text, StatusBar, TouchableOpacity, StyleSheet} from 'react-native'



const App=()=>{
  const [randomBackground,setRandomBackground]=useState("#ffffff");


  const generateColor=()=>{
    const hexrange="0123456789ABCDEF"
    let color = "#"

    for(let i=0;i<6;i++){
        color+=hexrange[Math.floor(Math.random()*16)]
    }

    setRandomBackground(color)
  }


    return(
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container, {backgroundColor:randomBackground}]}>


      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Click here</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
    )
}

const styles=StyleSheet.create({
container:{
flex:1,
alignItems:'center',
justifyContent:'center'
},
actionBtn:{
  borderRadius:12,
  backgroundColor:"#6A1B4D",
  paddingVertical:10,
  paddingHorizontal:40
},
actionBtnTxt:{
  fontSize:24,
  color:"#FFFFFF",
  textTransform:"uppercase"
}

})

export default App
