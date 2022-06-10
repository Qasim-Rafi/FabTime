import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../constants/colorsPallet';
import { handleMargin, handlePadding } from '../constants/theme';
import Fonts from '../helpers/Fonts';
import { hp, wp } from '../helpers/Responsiveness';
import ResponsiveText from './RnText';

const RnButton = ({
  backgroundColor,
  textColor,
  width,
  padding,
  margin,
  gradColor,
  height,
  borderRadius,
  title,
  fontFamily,
  onPress,
  position,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : null}
      style={[
        styles.Btn,
        props.btnStyle ? props.btnStyle : undefined,
        margin ? handleMargin(margin) : undefined,
        padding ? handlePadding(padding) : undefined,
        position && { alignSelf: position },
        backgroundColor && { backgroundColor },
       

        {
        height:hp(6.5),
        flexDirection:'row',
          // width: width ? width : undefined,
          // height: height ? height : undefined,
           borderRadius: borderRadius ? borderRadius : 30,
        },
      ]}
      {...props}>
         {/* <LinearGradient colors={gradColor} start={{ x: 0.2, y: 0 }} end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      ></LinearGradient> */}
      {title && (
        <ResponsiveText
          size={3.7}
          padding={[0, 10]}
          fontFamily={fontFamily ? fontFamily : 'Bold'}
          color={textColor ? textColor : colors.white}>
          {title}
        </ResponsiveText>
      )}
      {props.children}
    </TouchableOpacity>
  );
};

export default RnButton;

const styles = StyleSheet.create({
  Btn: {
    padding: 3,
    // height: wp(10),
    borderRadius: 7,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,

  },
});
