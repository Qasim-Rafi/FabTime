import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../constants/colorsPallet';
import { handleMargin, handlePadding } from '../constants/theme';

import { hp, wp } from '../helpers/Responsiveness';

const RnButton = ({
  backgroundColor,
  textColor,
  width,
  padding,
  margin,
  height,
  borderRadius,
  gradColor,
  title,
  fontFamily,
  onPress,
  position,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress ? onPress : null}
      style={[
        // styles.linearGradient,
        props.btnStyle ? props.btnStyle : undefined,
        margin ? handleMargin(margin) : undefined,
        padding ? handlePadding(padding) : undefined,
        position && { alignSelf: position },
        backgroundColor && { backgroundColor },
        {
          height: hp(5),
          flexDirection: 'row',
          // width: width ? width : undefined,
          // height: height ? height : undefined,
          borderRadius: borderRadius ? borderRadius : 7,
        },
      ]}
      {...props}>
      <LinearGradient colors={gradColor} start={{ x: 0.2, y: 0 }} end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        {title && (
          <Text style={styles.buttonText}>
            {title}
          </Text>
        )}
      </LinearGradient>

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


  },
  linearGradient: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    borderRadius: 40

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
