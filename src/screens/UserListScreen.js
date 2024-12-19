import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import SingleUserList from '../components/SingleUserList'
import Color from '../constants/Color'

const UserListScreen = () => {

  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const [searchTerm , setSearchTerm] = useState("")
  const [sortOrder , setSortOrder] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    if (loading || !hasMore) {
      return
    }
    setLoading(true)

    fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=9`).then((response) => response.json()).then((data) => {
      setUserData(prevData => [...prevData, ...data])
      setPage(prevPage => prevPage + 1)
      if (data.length < 9) {
        setHasMore(false)
      }
    }).catch((error) => {
      Alert.alert("Something went wrong!",error.message)
    }).finally(() => {
      setLoading(false)
    })
  }

  const filteredData = userData.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
 
  const sortedData = [...filteredData].sort((a,b) => {
    if (sortOrder === "name") {
      return a.name.localeCompare(b.name)
    }else if(sortOrder === "email") {
      return a.email.localeCompare(b.email)
    }
    return  0 ;
  })

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader sortOrder={sortOrder} handleSortOrder={setSortOrder} searchTerm={searchTerm} handleSearchTerm={setSearchTerm} />
      <FlatList
        style={styles.list}
        data={sortedData}
        renderItem={({ item, index }) => <SingleUserList item={item} index={index} />}
        keyExtractor={(item,index) => item.id.toString()}
        onEndReached={() => fetchData()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? 
          <ActivityIndicator size={20} color={Color.primaryColor} />
          :
          !hasMore ? 
          (
            <Text style={{marginVertical:10,textAlign:"center",color:Color.secondaryTextColor}}>No more data to display</Text>
          )
          : null
        }
      />
     
    </SafeAreaView>
  )
}

export default UserListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColor
  }
})