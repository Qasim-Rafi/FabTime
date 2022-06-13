import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { globalPath } from '../constants/globalPath'
import ResponsiveText from './RnText'
import { colors } from '../constants/colorsPallet'
import { wp } from '../helpers/Responsiveness'

const TabIcon = (props) => {
  return (
    <View style={{
        backgroundColor:props.backgroundColor?props.backgroundColor: '#E9F9FF',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:10,
        width:wp(24),
        height:wp(24)
    }}>
        <Icon size={45} source={props.source} />
        <ResponsiveText margin={[7,0,0,0]} color={props.titleColor?props.titleColor:colors.blue1}>{props.title}</ResponsiveText>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({

})