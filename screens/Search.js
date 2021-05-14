import React from "react";
import { SearchBar, Icon } from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, View, } from 'native-base';
import { Image } from 'react-native';
import logo from '../img/logo.png'
import sc1 from '../img/sc1.png'
import sc2 from '../img/sc2.png'
import sc3 from '../img/sc3.png'

export default class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={{backgroundColor:'white',flex:1,}}>
                <SearchBar
                    placeholder="Search.."
                    onChangeText={this.updateSearch}
                    value={search}
                    platform={"ios"}
                    placeholderTextColor={"black"}
                />
                <Card transparent>
                    <CardItem>
                        <Left>
                            <Thumbnail square source={logo} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }} />
                            <Body>
                                <Text>ByPassLines</Text>
                                <Text note>Shopping</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Icon
                             
                                name='ios-cloud-download-outline'
                                type='ionicon'
                                color='blue'
                            />
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={sc1} style={{ height: 200, width: '30%', margin: 2, borderRadius: 10 }} />
                        <Image source={sc2} style={{ height: 200, width: '30%', margin: 2, borderRadius: 10 }} />
                        <Image source={sc3} style={{ height: 200, width: '30%', margin: 2, borderRadius: 10, borderWidth: 1, borderColor: 'lightgray' }} />
                    </CardItem>

                </Card>
            </View>
        );
    }
}

