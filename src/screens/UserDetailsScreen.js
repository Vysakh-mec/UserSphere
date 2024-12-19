import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Color from '../constants/Color'

const UserDetailsScreen = () => {

  const route = useRoute()
  const navigation = useNavigation()

  const data = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:data.name,
    })
  },[])
  
  
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri:data.photoURL}} style={styles.avatar} />
        <Text style={styles.usernameText}>{"@"+data.username}</Text>
      <View style={styles.DetailsContainer}>
        <Text style={styles.headerText}>Personal Details</Text>
        <Text style={styles.subHeaderText}>Name: <Text style={styles.subText}>{data.name}</Text> </Text>
        <Text style={styles.subHeaderText}>Email: <Text style={styles.subText}>{data.email}</Text> </Text>
        <Text style={styles.subHeaderText}>Phone: <Text style={styles.subText}>{data.phone}</Text> </Text>
        <Text style={styles.subHeaderText}>Website: <Text style={styles.subText}>{data.website}</Text> </Text>
        <Text style={styles.headerText}>Address</Text>
        <Text style={styles.subHeaderText}>Street: <Text style={styles.subText}>{data.address.street}</Text> </Text>
        <Text style={styles.subHeaderText}>Suite: <Text style={styles.subText}>{data.address.suite}</Text> </Text>
        <Text style={styles.subHeaderText}>City: <Text style={styles.subText}>{data.address.city}</Text> </Text>
        <Text style={styles.subHeaderText}>Zip Code: <Text style={styles.subText}>{data.address.zipcode}</Text> </Text>
        <Text style={styles.headerText}>Company Details</Text>
        <Text style={styles.subHeaderText}>Company Name: <Text style={styles.subText}>{data.company.name}</Text> </Text>
        <Text style={styles.subHeaderText}>Catchphrase : <Text style={styles.subText}>{data.company.catchPhrase}</Text> </Text>
        <Text style={styles.subHeaderText}>Business Info: <Text style={styles.subText}>{data.company.bs}</Text> </Text>
      </View>
    </ScrollView>
  )
}

export default UserDetailsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Color.backgroundColor
  },
  avatar:{
    height:150,
    aspectRatio:1/1,
    borderRadius:999,
    borderWidth:0.5,
    borderColor:Color.secondaryColor,
    alignSelf:"center",
    marginVertical:20
  },
  usernameText:{
    textAlign:"center",
    fontSize:15,
    color:Color.secondaryTextColor,
    fontWeight:500
  },
  DetailsContainer:{
    paddingHorizontal:20,
    marginVertical:20
  },
  headerText:{
    fontSize:18,
    fontWeight:600,
    color:Color.primaryColor,
    marginVertical:20
  },
  subHeaderText:{
    fontSize:16,
    fontWeight:500,
    color:Color.primaryColor,
    paddingHorizontal:10,
    marginVertical:10
  },
  subText:{
    fontSize:15,
    color:Color.secondaryTextColor,
    fontWeight:400,
    lineHeight:30
  }
})