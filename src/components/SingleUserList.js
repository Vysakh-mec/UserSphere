import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Color from '../constants/Color'
import { useNavigation } from '@react-navigation/native'

const SingleUserList = ({item , index}) => {

    const navigation = useNavigation()

    const handleNavigation = ( ) => {
        navigation.navigate("userDetails",{
            ...item,
            photoURL:`https://picsum.photos/200?random=${index}`
        })
    }
    
  return (
    <TouchableOpacity onPress={() => handleNavigation()} activeOpacity={0.6} style={styles.container}>
        <Image source={{
            uri:`https://picsum.photos/200?random=${index}`
        }} style={styles.Image} />
        <View style={styles.TextContainer}>
            <Text style={styles.TitleText}>{item.name}</Text>
            <Text style={styles.SubTitleText}>{item.email}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default SingleUserList

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginVertical:10,
        paddingVertical:10,
        flexDirection:"row",
        alignItems:"center",
    },
    Image:{
        height:56,
        width:56,
        resizeMode:"cover",
        borderRadius:999,
        borderWidth:0.5,
        borderColor:Color.accentColor
    },
    TextContainer:{
        flex:1,
        marginHorizontal:10
    },
    TitleText:{
        fontWeight:500,
        fontSize:16,
        color:Color.primaryColor
    },
    SubTitleText:{
        fontSize:14,
        fontWeight:400,
        color:Color.secondaryTextColor
    }
})