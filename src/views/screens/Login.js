import React from "react"
import {View ,Text, Image, TouchableOpacity,TextInput, StyleSheet,} from  "react-native";

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
            uri: " https://nigerianbuildingdesigns.com/wp-content/uploads/2020/02/7-BEDROOM-DUPLEX-WITH-PENT-FLOOR-1-1.jpg"

        }}
        />
        
        <Text style={{color: "rgb(0,0,0,0.8)", fontSize:30}}>Welcome to</Text>
        <Text style={{color: "black", fontSize: 29,fontWeight: '600'}}>PHOENIX-HOMES</Text>
         
         <TouchableOpacity 
         style={{
             backgroundColor:"white", 
            //  backgroundColor:"#e3e3e3", 
             borderRadius:10,
             flexDirection: "row",
             alignItems: "center",
            padding:10,
            paddingHorizontal:40,
            marginTop: 20,
         }}
         >
           {/*<View style={styles.container} >
         <Text style={{fontSize:17,color: "white", marginLeft: 15,backgroundColor:"#c1ccd2"}}>Username</Text>
         <TextInput  style ={style.input} />
        </View> */}
        
        </TouchableOpacity>
        <TouchableOpacity 
         style={{
             backgroundColor:"#203931",
             borderRadius:10, 
             flexDirection:"row",
             alignItems:"center",
            padding:10,
            paddingHorizontal:40,
            marginTop: 20,
         }}
         >
        
         <Text 
         style={{fontsize:18, color:"white", marginLeft:15,backgroundColor:"black"}}>Password</Text>
         
        
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{marginTop:10, fontWeight:"500", color:"grey"}} >
            Not A Member?
            <Text style={{color:"orange", fontWeight:"bold",}}> SignUp</Text>
        </Text>
        </TouchableOpacity>
 </View>
    );
        };
    
   const styles = StyleSheet.create({
       
    input:{
           borderWidth:1,
           borderColor: "black",
           padding:8,
           margin:10,
           width:200,
           borderRadius:10,

       },

   }) 

    

        
    
    
    






    