import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import GridView from 'react-native-super-grid';

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
export default class GribView extends Component {
    render() {
        const items = [
            { name: require('../data/aosomi.jpg'), code: '#FFFFFF' }, { name: require('../data/camera.jpg'), code: '#FFFFFF' },
            { name: require('../data/chuot.jpg'), code: '#FFFFFF' }, { name: require('../data/dongho.jpg'), code: '#FFFFFF' },
            { name: require('../data/samsung.jpg'), code: '#FFFFFF' }, { name: require('../data/tainghe.png'), code: '#FFFFFF' },
            { name: require('../data/aosomi.jpg'), code: '#FFFFFF' }, { name: require('../data/camera.jpg'), code: '#FFFFFF' },
            { name: require('../data/chuot.jpg'), code: '#FFFFFF' }, { name: require('../data/dongho.jpg'), code: '#FFFFFF' },
            { name: require('../data/samsung.jpg'), code: '#FFFFFF' }, { name: require('../data/tainghe.png'), code: '#FFFFFF' },
            { name: require('../data/aosomi.jpg'), code: '#FFFFFF' }, { name: require('../data/camera.jpg'), code: '#FFFFFF' },
            { name: require('../data/chuot.jpg'), code: '#FFFFFF' }, { name: require('../data/dongho.jpg'), code: '#FFFFFF' },
            { name: require('../data/samsung.jpg'), code: '#FFFFFF' }, { name: require('../data/tainghe.png'), code: '#FFFFFF' },
            { name: require('../data/aosomi.jpg'), code: '#FFFFFF' }, { name: require('../data/camera.jpg'), code: '#FFFFFF' },
            { name: require('../data/chuot.jpg'), code: '#FFFFFF' }, { name: require('../data/dongho.jpg'), code: '#FFFFFF' },
            { name: require('../data/samsung.jpg'), code: '#FFFFFF' }, { name: require('../data/tainghe.png'), code: '#FFFFFF' },
            // { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            // { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            // { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            // { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            // { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            // { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            // { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            // { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            // { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
        ];
        return (
            <GridView
                itemDimension={130}
                items={items}
                style={styles.gridView}
                renderItem={(item, key) => (
                    <View key = {key} style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Image key = {item.name} source={item.name} style={styles.itemImg}/>
                        {/* <Text style={styles.itemName}>{item.name}</Text> */}
                        {/* <Text style={styles.itemCode}>{item.code}</Text> */}
                    </View>
                )}
            />
        );
    }
}
