import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {CustomText} from '../CommonComponent';
import {AppContext} from '../../AppContext';
import CommonStyle from '../../Theme/CommonStyle';

const styles = StyleSheet.create({
  outer: {
    ...CommonStyle.flexContainer,
    justifyContent: 'flex-end',
    marginBottom: 30,
    alignSelf: 'center',
  },
});

const BottomView = (props) => {
  const {title, subTitle, onSubTitle, exStyle, exTextStyle = {}} = props;
  const {outer} = styles;
  const {appTheme} = useContext(AppContext);
  return (
    <View style={[outer, exStyle && exStyle]}>
      <View style={{flexDirection: 'row'}}>
        <CustomText
          large
          style={[
            {
              color: appTheme.lightText,
              paddingVertical: 10,
            },
            exTextStyle,
          ]}>
          {title}
        </CustomText>
        <TouchableOpacity onPress={onSubTitle}>
          <CustomText
            large
            style={[
              {
                color: appTheme.themeColor,
                paddingVertical: 10,
                paddingHorizontal: 5,
              },
              exTextStyle,
            ]}>
            {subTitle}
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {BottomView};
