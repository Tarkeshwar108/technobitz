import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Image, FlatList } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, } from 'native-base';
import { Avatar } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    };
  }

  getList = () => {
    const li = [
      { key: "image1", imgLink: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" },
      { key: "image2", imgLink: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" },
      { key: "image3", imgLink: "https://i.pinimg.com/originals/cb/16/bb/cb16bb284a2a80c75041c80ba63e62d3.jpg" },
      { key: "image3", imgLink: "https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg" },
      { key: "image1", imgLink: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" },
      { key: "image2", imgLink: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" },
      { key: "image3", imgLink: "https://i.pinimg.com/originals/cb/16/bb/cb16bb284a2a80c75041c80ba63e62d3.jpg" },
      { key: "image3", imgLink: "https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg" },
      { key: "image1", imgLink: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" },
      { key: "image2", imgLink: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" },
      { key: "image3", imgLink: "https://i.pinimg.com/originals/cb/16/bb/cb16bb284a2a80c75041c80ba63e62d3.jpg" },
      { key: "image3", imgLink: "https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg" },
    ]

    this.setState({
      list: li
    })
  }

  componentWillMount() {
    this.getList()
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <ImageBackground
          source={{ uri: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg' }}
          style={{
            width: '100%',
            height: 200,
          }}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Avatar

              size="large"
              rounded
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
              }}
            >
              <Avatar.Accessory source={{ uri: 'https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-camera-icon-png-image_696326.jpg' }} style={{ height: 20, width: 20, borderRadius: 10 }} />
            </Avatar>
          </View>
        </ImageBackground >
        <Card transparent>
          <CardItem>
            <Body style={{ alignItems: 'center' }}>
              <Text>Augustina</Text>
              <Text note>I am best Photographer</Text>
            </Body>
          </CardItem>
        </Card>

        <Card transparent style={{ borderTopWidth: 2, borderBottomWidth: 2, borderTopColor: 'black', borderBottomColor: 'black' }}>
          <CardItem>
            <Left style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', borderRightWidth: 2, borderRightColor: 'black' }}>
              <Text>
                Photos
          </Text>
              <Text note>19</Text>
            </Left>

            <Right style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
              <Text>Videos</Text>
              <Text note>10</Text>
            </Right>
          </CardItem>
        </Card>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.list}
          numColumns={3}
          renderItem={({ item }) => <Image source={{ uri: item.imgLink }} style={{ height: 100, width: "30%", margin: 5 }} />}
        />

      </View>);
  }

}