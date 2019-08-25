import React from 'react'
import { ScrollView, StatusBar, Dimensions,View,Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Content, List, ListItem, Thumbnail,Left, Body, Right, Button } from 'native-base';
import {dialogflowConfig} from './env'

import 'babel-polyfill'
import FAB from 'react-native-fab'
import {chart} from './chart'

// in Expo - swipe left to see the following styling, or create your own


export default class App extends React.Component {


  renderTabBar() {
    return <StatusBar />
  }

  createListItems() {
    const listdata = [{dateinterval : 'From 01 Aug 2019 - 10 Aug 2019'},{dateinterval : 'From 01 Aug 2019 - 10 Aug 2019'},{dateinterval : 'From 01 Aug 2019 - 10 Aug 2019'}]

    return listdata.map((item,index) => {
      return <ListItem thumbnail key = {index}>
        <Left>
          <Thumbnail square source={{ uri: 'https://www.launchterrehaute.com/wp-content/uploads/2017/05/Calendar-Icon-300x260.png' }} />
        </Left>
        <Body>
          <Text style={{}}>Annual Leave</Text>
          <Text note numberOfLines={1}>{item.dateinterval}</Text>
        </Body>
        <Right>
          <Button transparent>
            <Text style={{color :'lightblue',fontWeight:'bold',fontSize: 15}} >View</Text>
          </Button>
        </Right>
      </ListItem>
    })
  }

  render() {
    return (
      <ScrollableTabView renderTabBar={this.renderTabBar}>
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: chartConfig.color(),
            fontSize: 11
          }
          const graphStyle = {
            margin : 10,
             ...chartConfig.style
          }
          return (
              <View>
            <ScrollView
              key={Math.random()}
              style={{

                backgroundColor: chartConfig.backgroundColor
              }}
            >
              <Text style={
                {
                  textAlign:'center',
                  color: 'lightblue',
                  fontWeight :'bold',
                  fontSize: 18,marginBottom : 30,marginTop:60}
              }>Leave Usage</Text>

              <chart/>

              <Text style={
                {
                  textAlign:'center',
                  color: 'lightblue',
                  fontWeight :'bold',
                  fontSize: 18,marginBottom : 30,marginTop:10}
              }>Leave History</Text>

              <Container>
                 <Content>
                  <List>
                    {this.createListItems()}{}
                  </List>
                </Content>
              </Container>

            </ScrollView>

                <FAB buttonColor="red" iconTextColor="#FFFFFF" onClickAction={() => {console.log("FAB pressed")}} visible={true} iconTextComponent={<Icon name="robot"/>} />
            </View>
          )
        })}
      </ScrollableTabView>
    )
  }
}


/*
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './env';

class App extends Component {


  state = {
    messages: [
      {
        _id: 1,
        text: `Hi! I am the FAQ bot 🤖 from Jscrambler. How may I help you with today?`,
        createdAt: new Date(),
        user: "TestIEP" // <= note this
      }
    ]
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        dialogflowConfig.private_key,
        Dialogflow_V2.LANG_ENGLISH_US,
        dialogflowConfig.project_id
    );
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
        message,
        result => this.handleGoogleResponse(result),
        error => console.log(error)
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: 'TestIEP'
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }


  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: 1
              }}
          />
        </View>
    );
  }
}

export default App;

*/