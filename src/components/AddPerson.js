import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import { useForm, Controller } from "react-hook-form";
import * as actions from '../actions';
import { black } from "react-native-paper/lib/typescript/styles/colors";

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
    margin: 20,
    padding: 20,

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

});


// const AddButton = MKButton.coloredButton()
//   .withText('ADD')
//   .build();

// class AddPerson extends Component {
function AddPerson() {
  // static navigationOptions = {
  //   tabBarIcon: ({tintColor}) => (
  //     <Icon name={'plus'} size={50} color={tintColor}/>
  //   )
  // }
  // const { register, handleSubmit, formState: { errors } } = useForm();

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });


  const onSubmit = data => console.log(data);

  // render() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.form}>
        {/* <Text>Add person screen</Text> */}

        {/* <MKTextField 
            textInputStyle={styles.fieldStyles}
            placeholder={'First name...'}
            tintColor={MKColor.Teal}

          /> */}
        {/* <View style={styles.addButton}> */}
        {/* <AddButton/> */}
        {/* </View> */}
      </View>
      <View style={styles.form}>
        <Controller
          control={control}
          // name="test"
          name="firstName"
          rules={{
            required: true,
          }}
          render={({ 
            field: { onChange, onBlur, name, value }, 
          }) => (
            <TextInput
              style={styles.input}
              placeholder={'First Name'}
              autoFocus={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={'Last name'}
              tintColor={MKColor.Orange}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />
        {errors.lastName && <Text>This is required.</Text>}


        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>

    </ScrollView>
  )
  // }
}

export default connect(null, actions)(AddPerson);