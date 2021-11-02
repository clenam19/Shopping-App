import React from "react"
import {View ,Text, Image, TouchableOpacity,} from  "react-native";
import { AntDesign } from '@expo/vector-icons';
export default function Login(){
    return (
    <View style={{flex: 1, backgroundColor: "#d49f7b", alignItems:"center",justifyContent:"center"}}>
        
        <Image 
        style={{
                width: 200,
                height: 200,
                borderRadius:20,
                marginBottom:50,
                transform: [{rotate:"45deg"}]
            }}
        source ={{
            uri: " https://images.unsplash.com/photo-1634921939543-70dcd396734f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

        }}
        />
        
        <Text style={{color: "rgb(0,0,0,0.8)", fontSize:30}}>Welcome to</Text>
        <Text style={{color: "black", fontSize: 29,fontWeight: '600'}}>CREAMIIN</Text>
         
         <TouchableOpacity 
         style={{
             backgroundColor:"black", 
            //  backgroundColor:"#e3e3e3", 
             borderRadius:10,
             flexDirection: "row",
             alignItems: "center",
            padding:10,
            paddingHorizontal:40,
            marginTop: 20,
         }}
         >
           <AntDesign name="google" size={24} color="rgb(256,100,10)" />
         <Text style={{fontSize:17,color: "white", marginLeft: 15,backgroundColor:"black"}}>Login with Gmail</Text>
        
        </TouchableOpacity>
        <TouchableOpacity 
         style={{
             backgroundColor:"grey",
             borderRadius:10, 
             flexDirection:"row",
             alignItems:"center",
            padding:10,
            paddingHorizontal:40,
            marginTop: 20,
         }}
         >
        <AntDesign name="apple1" size={24} color="black" />
         <Text 
         style={{fontsize:18, color:"white", marginLeft:15,backgroundColor:"black"}}>Login with Apple</Text>
         
        
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{marginTop:10, fontWeight:"500", color:"grey"}} >
            Not A Member?
            <Text style={{color:"orange", fontWeight:"bold",}}> SignUp</Text>
        </Text>
        </TouchableOpacity>



        

   

        </View>
    
    

    

        
    ); 
}
    


    
