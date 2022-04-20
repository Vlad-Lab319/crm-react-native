import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import * as actions from '../actions';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton: {
    marginTop: 20,
  },

});

// const AddButton = MKButton.coloredButton()
//   .withText('ADD')
//   .build();

class AddPerson extends Component {
  // static navigationOptions = {
  //   tabBarIcon: ({tintColor}) => (
  //     <Icon name={'plus'} size={50} color={tintColor}/>
  //   )
  // }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.form}>
          <Text>Add person screen</Text>
          {/* <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'First name...'}
            tintColor={MKColor.Teal}

          /> */}
          {/* <View style={styles.addButton}> */}
            {/* <AddButton/> */}
          {/* </View> */}
        </View>
      </ScrollView>
    )
  }
}

export default connect(null, actions)(AddPerson);