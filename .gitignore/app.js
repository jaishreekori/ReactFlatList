import React, { Component } from 'react';
import Data from './contacts.json';
import { View, StyleSheet, Text, FlatList, Image, Button, TextInput, Spacer } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class App extends React.Component {
   constructor() {
      super();
   };

   FlatListItemSeparator = () => {
      return (
         <View
            style={{
               height: .5,
               width: "100%",
               backgroundColor: "#000",
            }}
         />
      );
   }

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.h2text}>
                Contacts
         </Text>
            <FlatList
               data={Data}
               ItemSeparatorComponent={this.FlatListItemSeparator}
               renderItem={({ item }) =>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                     <Image
                        source={{ uri: item.avatar }}
                        style={{
                           width: '50%',
                           height: 100,
                           margin: 8,
                           borderRadius: 7
                        }}
                     />
                     <Text style={styles.name}>{item.name}</Text>
                  </View>
               }
               keyExtractor={(item, index) => index.toString()}
            />
         </View>
      );
   }
}
class AddContact extends React.Component {
   render() {
      return (
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 2, width:150 }}
          placeholder = "Name"
          editable={true}
          maxLength={20}
          margin={20} 
          padding={10}
        />
        
        <Button
          onPress={this.AddContact}
          title="Add Contacts"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'flex-start',
   },
   name: {
      padding: 10,
      fontSize: 25,
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: '#000'
   },
   h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      fontSize: 36,
      fontWeight: 'bold',
   },
});

const TabNavigator = createBottomTabNavigator({
   MyContacts: { screen: App,  drawerLabel: 'My Contacts' },
   AddContact: { screen: AddContact, drawerLabel: 'Add Contacts' },
});

export default createAppContainer(TabNavigator);
