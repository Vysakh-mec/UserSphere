import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import UserSphereLogo from "../../assets/icon/UserSphereLogo.svg"
import SearchIcon from "../../assets/icon/Search.svg"
import FilterIcon from "../../assets/icon/Filter.svg"
import BackButton from "../../assets/icon/LeftArrow.svg"
import Color from '../constants/Color'
import CloseIcon from "../../assets/icon/Close.svg"
import { Picker } from '@react-native-picker/picker'

const CustomHeader = ({ searchTerm, handleSearchTerm, sortOrder, handleSortOrder }) => {

  const [visible, setVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [sortingOrder, setSortingOrder] = useState(sortOrder)

  const handleSubmission = () => {
    handleSortOrder(sortingOrder)
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      {
        visible ?
          <>
            <TouchableOpacity onPress={() => {
              handleSearchTerm("")
              setVisible(false)}}>
              <BackButton />
            </TouchableOpacity>
            <TextInput value={searchTerm} onChangeText={(text) => handleSearchTerm(text)} placeholder='Search for name' style={styles.input} />
          </>
          :
          <UserSphereLogo />
      }
      <View style={styles.iconsContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => setVisible(true)}>
          <SearchIcon />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => setModalVisible(true)} >
          <FilterIcon />
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        statusBarTranslucent
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalSubContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Apply Filters</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20, flex: 1, justifyContent: "space-between" }}>
              <View>
                <Text style={{
                  fontSize: 16,
                  fontWeight: 500, marginVertical: 20
                }}>Sort Order</Text>
                <Picker
                  selectedValue={sortingOrder}
                  onValueChange={(text) => setSortingOrder(text)}
                >
                  <Picker.Item label='Name' value={"name"} />
                  <Picker.Item label='Email' value={"email"} />
                </Picker>
              </View>
              <View style={styles.buttonContainer}>

                <TouchableOpacity onPress={() => {handleSortOrder(null)
                  setModalVisible(false)
                }} activeOpacity={0.8} style={[styles.button,{backgroundColor:Color.secondaryColor,borderWidth:0.5,borderColor:Color.accentColor}]}><Text style={[styles.buttonText,{color:Color.primaryColor}]}>Clear</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => handleSubmission()} activeOpacity={0.8} style={styles.button}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: "space-between"
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16
  },
  input: {
    backgroundColor: "rgba(0,0,0,0.1)",
    flexGrow: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    paddingHorizontal: 16
  },
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",

  },
  modalSubContainer: {
    backgroundColor: Color.backgroundColor,
    height: "60%",
    width: "90%",
    borderRadius: 20
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  modalHeaderText: {
    fontSize: 16,
    fontWeight: "600"
  },
  picker: {
    width: "80%",
    marginVertical: 20
  },
  button: {
    marginVertical: 20, backgroundColor: Color.primaryColor,
    alignSelf: "center",
    paddingVertical: 12,
    borderRadius: 5,
    flex:1
  }, buttonText: {
    color: Color.secondaryColor,
    textAlign: "center",
    fontWeight: 500
  },
  buttonContainer:{
    flexDirection:"row",
    alignItems:"center",
    columnGap:20
  }
})