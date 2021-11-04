import React from 'react';
import { Text, ImageBackground} from 'react-native';

export default class Best extends React.Component{
    render(){
        return(
           <ImageBackground
           source={require('../images/9.png')}
           style={{
               height:130,
               width:230,
               marginRight:20,
               borderRadius:10,
               marginBottom:40,
               opacity:0.7,
               backgroundColor:"#000",
               marginLeft:3,
               padding:12,
               marginTop:20
           }}
           >
               <Text style={{
                   fontFamily:"Bold",
                   color:"#FFF",
                   fontSize:15
               }}>Clem Furniture World</Text>
               <Text style={{
                   fontFamily:"Bold",
                   color:"#FFF",
                   fontSize:12
               }}>Get 45% OFF</Text>
           </ImageBackground>
        )
    }
}