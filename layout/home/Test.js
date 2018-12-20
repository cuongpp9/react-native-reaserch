import React, { Component } from 'react'
import { Text, View, Image, Dimensions, TextInput, ScrollView, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');

const styles = {
    home: {
        flex: 1,
    },
    container: {
        flex: 1,
        zIndex: 0,
    },
    header: {
        position: 'absolute',
        flex: 20,
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    wrapper: {
    },
    image: {
        width,
        height: 10,
        flex: 1
    },
    body: {
        backgroundColor: 'blue',
        flex: 5,
    },
    footer: {
        backgroundColor: 'red',
        justifyContent: 'flex-end',
        flex: 1,
    },

    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        paddingRight: 10,
    },
    searchIcon: {
        width: 18,
        height: 18,
        // paddingLeft: 5,
        marginLeft: 10,
    },
    input: {
        flex: 1,
        // paddingLeft: 1,
        paddingTop: 10,
        backgroundColor: 'rgba(255, 255, 255,0)',
        color: '#424242',
        fontSize: 8
    },
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'Shopee',
            bgkHeader: 'rgba(236, 19, 19, 0)',
        };
    }

    handlerScroll = (e) => {
        console.log('sadasdasd', e.nativeEvent.contentOffset.y);
        var opacityNum = e.nativeEvent.contentOffset.y / 80;
        this.setState({ bgkHeader: opacityNum > 1 ? 'rgba(236, 19, 19, 1)' : `rgba(236, 19, 19, ${opacityNum})` })
    }

    render() {
        const src = [require('./img/1.png'), require('./img/2.png'), require('./img/3.jpg'), require('./img/4.jpg'), require('./img/5.jpg'), require('./img/6.png'), require('./img/7.png')]
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 15, backgroundColor: 'skyblue' }} >
                    <View style={{ position: 'absolute', height: 45, zIndex: 5, backgroundColor: this.state.bgkHeader }}>
                        <View style={{ flex: 5, flexDirection: 'row', width, marginTop: 10, marginLeft: 10 }}>
                            <View style={{ flex: 12, height: 29 }}>
                                <View style={styles.searchSection}>
                                    <Image style={styles.searchIcon} source={require('./img/iconsearch.png')} />
                                    <TextInput
                                        style={styles.input}
                                        // placeholder={this.state.text}
                                        onChangeText={(searchString) => { this.setState({ searchString }) }}
                                        value={this.state.searchString}
                                    />
                                </View>

                                {/* <TextInput
										style={{ height: 30, borderColor: 'gray', borderWidth: 1, backgroundColor: '#F8F8FF', fontSize: 8 }}
										onChangeText={(text) => this.setState({ text })}
										value={this.state.text}
									/> */}
                            </View>
                            <Image style={{ flex: 1, height: 22, width: 22, marginTop: 5, marginRight: 4 }} source={require('./img/shopping.png')} />
                            <Image style={{ flex: 1, height: 25, width: 20, marginTop: 3, marginRight: 15 }} source={require('./img/message.png')} />
                        </View>
                    </View>
                    <ScrollView onScroll={(e) => this.handlerScroll(e)}>
                        <Swiper style={styles.wrapper} height={100}
                            autoplay={true}
                            dot={<View style={{ backgroundColor: '#F8F8FF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                            activeDot={<View style={{ backgroundColor: 'red', width: 8, height: 8, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                            paginationStyle={{
                                bottom: -2, left: -10, right: 10
                            }} loop>
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/1.png')} />
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/2.png')} />
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/3.jpg')} />
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/4.jpg')} />
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/5.jpg')} />
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/6.png')} />
                            <Image resizeMode='stretch' style={styles.image} source={require('./img/7.png')} />
                        </Swiper>

                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasd</Text>
                    </ScrollView>
                </View>
                <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
            </View>
        )
    }
}