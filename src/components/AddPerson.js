import * as  React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import { useForm, Controller } from "react-hook-form";
import * as actions from '../actions';
import PeopleList from "./PeopleList";

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
    color: 'orange',
  },
  addButton: {
    margin: 30,
    padding: 2,
    marginTop: 40,
    color: 'white',
    height: 40,
    // backgroundColor: '#ec5990',
    borderRadius: 4,

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    color: 'tomato',
    margin: 20,
    marginLeft: 0,
  },

});


// class AddPerson extends Component {
function AddPerson({ navigation }) {

  // static navigationOptions = {
  //   tabBarIcon: ({tintColor}) => (
  //     <Icon name={'plus'} size={50} color={tintColor}/>
  //   )
  // }
  const Stack = createNativeStackNavigator();

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });

  const dataForm = {};

  const onSubmit = (data) => {
    console.log(data);
    dataForm = data;
    navigation.navigate('People');
    reset();
  }
  // const onChange = arg => {
  //   return {
  //     value: arg.nativeEvent.text,
  //   };
  // };

  // render() {
  return (
    <NavigationContainer independent={true}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.form}>
          <Text style={styles.label}>Add person screen</Text>
        </View>
        <View style={styles.form}>
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: true,
            }}
            render={({
              field: { onChange, onBlur, value },
            }) => (
              <TextInput
                style={styles.input}
                placeholder={'First Name'}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
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
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="lastName"
          />
          {errors.lastName && <Text>This is required.</Text>}


        </View>
        <View

          style={styles.addButton}
        >
          <Button
            title="Submit"
            onPress={handleSubmit(onSubmit)}
          >
            <Stack.Navigator>

              <Stack.Screen name="PeopleList" component={PeopleList} />
            </Stack.Navigator>
          </Button>


        </View>

      </ScrollView>
    </NavigationContainer>
  )
  // }
}

export default connect(dataForm, actions)(AddPerson);