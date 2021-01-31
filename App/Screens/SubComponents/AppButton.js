import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {CustomText} from '../CommonComponent';
import {AppContext} from '../../AppContext';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyle from '../../Theme/CommonStyle';

const styles = StyleSheet.create({
  outer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    ...CommonStyle.center,
    marginVertical: 5,
    minWidth: 100,
  },
  gradientBtn: {
    height: 56,
    borderRadius: 28,
    paddingHorizontal: 25,
    minWidth: 160,
    ...CommonStyle.center,
  },
});

const GradientButton = (props) => {
  const {
    title,
    onPress,
    exStyle,
    isProcessing = false,
    textOnly = false,
  } = props;
  const {appTheme} = useContext(AppContext);
  const {gradientBtn} = styles;
  return (
    <View
      style={[
        CommonStyle.shadow,
        {alignSelf: 'center', opacity: (isProcessing && 0.6) || 1},
        exStyle && exStyle,
      ]}>
      <TouchableOpacity onPress={onPress} disabled={isProcessing}>
        <LinearGradient colors={appTheme.gradient} style={gradientBtn}>
          {((!isProcessing || textOnly) && (
            <CustomText large style={[{color: appTheme.tint}]}>
              {title}
            </CustomText>
          )) || <ActivityIndicator color={appTheme.tint} />}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const ButtonComponent = (props) => {
  const {
    title,
    onPress,
    style,
    border,
    backColor,
    textColor,
    isProcessing,
  } = props;
  const {outer} = styles;
  const {appTheme} = useContext(AppContext);
  return (
    <TouchableOpacity onPress={onPress} disabled={isProcessing}>
      <View
        style={[
          outer,
          {
            backgroundColor: backColor || appTheme.themeColor,
            borderColor: border || appTheme.border,
          },
          style,
        ]}>
        {(!isProcessing && (
          <CustomText large style={{color: textColor || appTheme.tint}}>
            {title}
          </CustomText>
        )) || <ActivityIndicator color={textColor || appTheme.tint} />}
      </View>
    </TouchableOpacity>
  );
};

export {GradientButton, ButtonComponent};
