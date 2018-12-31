import React, { Component } from 'react'
import { View, Image, Dimensions, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import styles from './Styles';
import SlidesShow from './component/SlidesShow';
import GribView from './component/GribView';
import * as actions from '../../redux/actions/AppActions';
import { connect } from 'react-redux';
const { width } = Dimensions.get('window');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'Sendo',
            bgkHeader: 'rgba(236, 19, 19, 0)',
        };
    }

    handlerScroll = (e) => {
        console.log('sadasdasd', e.nativeEvent.contentOffset.y);
        var opacityNum = e.nativeEvent.contentOffset.y / 80;
        this.setState({ bgkHeader: opacityNum > 1 ? 'rgba(236, 19, 19, 0.9)' : `rgba(236, 19, 19, ${opacityNum})` })
    }

    onSearchItems = () => {
        console.log(this.state.searchString)
        this.props.onSearchItems(this.state.searchString);
    }

    render() {
        const src = [require('./img/1.png'), require('./img/2.png'), require('./img/3.jpg'), require('./img/4.jpg'), require('./img/5.jpg'), require('./img/6.png'), require('./img/7.png')]
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 15, backgroundColor: '#EAEAEA' }} >
                    <View style={{ position: 'absolute', height: 60, zIndex: 5, backgroundColor: this.state.bgkHeader }}>
                        <View style={{ flex: 5, flexDirection: 'row', width, marginTop: 10, marginLeft: 10 }}>
                            <View style={{ flex: 12, height: 40 }}>
                                <View style={styles.searchSection}>
                                    <TouchableHighlight onPress={this.onSearchItems}>
                                        <Image style={styles.searchIcon} source={require('./img/iconsearch.png')} />
                                    </TouchableHighlight>

                                    <TextInput
                                        style={styles.input}
                                        // placeholder={this.state.text}
                                        onChangeText={(searchString) => { this.setState({ searchString }) }}
                                        value={this.state.searchString}
                                    />
                                </View>
                            </View>
                            <Image style={{ flex: 1, height: 25, width: 25, marginTop: 3, marginRight: 20, marginLeft: 10 }} source={require('./img/shopping.png')} />
                            {/* <Image style={{ flex: 1, height: 25, width: 20, marginTop: 3, marginRight: 15 }} source={require('./img/message.png')} /> */}
                        </View>
                    </View>
                    <ScrollView onScroll={(e) => this.handlerScroll(e)}>
                        <SlidesShow />
                        <GribView />
                    </ScrollView>
                </View>
                <View style={{ flex: 1, backgroundColor: 'white', borderColor: '#D5D5D5', borderWidth: 0.5, }} />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchItems: (name) => {
            dispatch(actions.onSearchItems(name));
        }
    }
}

export default connect( null, mapDispatchToProps)(Home);