import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';
// import PeopleItem from './PeopleItem';
import { getTheme } from 'react-native-material-kit';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,

  }
});

class PeopleDetail extends Component {
  // static navigationOptions = {
  //   tabBarIcon: ({tintColor}) => (
  //     <Icon name={'user'} size={50} color={tintColor}/>
  //   )
  // }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require('../images/stars.jpeg')}
            style={[theme.cardImageStyle, styles.image]}
          />
          <EvilIcon name={'user'} size={100} style={styles.icon} />
          <SimpleIcon name={'close'} size={30} style={styles.closeIcon}
            onPress={() => this.props.noneSelected()} />
          <Text
            style={[theme.cardTitleStyle, styles.title1]}
          >
            {this.props.person.firstName}
            {this.props.person.lastName}
          </Text>
          <Text
            style={[theme.cardTitleStyle, styles.title2]}
          >
            from
            {this.props.person.company}
          </Text>
          <View style={styles.textArea}>
            <MaterialIcon name={'phone'} size={40} style={styles.textIcons}/>
            <Text style={theme.cardContentStyle}>
              {this.props.person.phone}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon name={'email'} size={40} style={styles.textIcons}/>
            <Text style={theme.cardContentStyle}>
              {this.props.person.email}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon name={'assignment'} size={40} style={styles.textIcons}/>
            <Text style={theme.cardContentStyle}>
              {this.props.person.project}
            </Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcons}/>
            <Text style={theme.cardContentStyle}>
              {this.props.person.notes}
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Image 
                source={require('../images/phone.png')}
                style={styles.actionImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.actionArea}>
            <Text>Phone</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    person: state.personSelected,
  }
}

export default connect(mapStateToProps, actions)(PeopleDetail);