import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import GridView from 'react-native-super-grid';
import {connect} from 'react-redux';

type Props = {};
const styles = StyleSheet.create({
    gridView: {
        paddingTop: 5,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5,
        height: 150,
    },
    itemName: {
        color: '#FFFFFF',
    },
    itemImg: {
        height: 120,
        width: 120,
    },
    itemCode: {
        color: '#FFFFFF',
    },
});
class GribView extends Component<Props> {
    render() {
        const { items = [] } = this.props;
        return (
            <GridView
                itemDimension={130}
                items={items}
                style={styles.gridView}
                renderItem={(item, key) => (
                    <View key={key} style={[styles.itemContainer, { backgroundColor: item.colorStyle }]}>
                        <Image key={item.src} source={item.src} style={styles.itemImg} />
                        <Text>{ item.description }</Text>
                        {/* <Text style={styles.itemCode}>{item.code}</Text> */}
                    </View>
                )}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.StoreItems
    }
}

export default connect(mapStateToProps,)(GribView);