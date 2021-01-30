import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Switch, Image} from 'react-native';
import {CustomText} from '../CommonComponent';
import {AppContext} from '../../AppContext';
import AppImages from '../../Theme/AppImages';

const styles = StyleSheet.create({
  outer: {
    height: 60,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 10,
    fontWeight: '500',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

const SettingHeader = (props) => {
  const {appTheme} = useContext(AppContext);
  const {title} = props;
  return (
    <CustomText style={[styles.header, {color: appTheme.lightText}]}>
      {title}
    </CustomText>
  );
};

const SettingRow = (props) => {
  const {appTheme} = useContext(AppContext);
  const {
    title,
    style,
    textStyle,
    onPress,
    value,
    isSwitch = false,
    isSelected = false,
  } = props;
  const {outer, icon} = styles;
  return (
    <TouchableOpacity onPress={() => onPress(value)} activeOpacity={0.6}>
      <View
        style={[
          outer,
          {backgroundColor: appTheme.card, borderColor: appTheme.border},
          style,
        ]}>
        <CustomText large style={[{color: appTheme.text}, textStyle]}>
          {title}
        </CustomText>
        {(isSwitch && (
          <Switch onChange={() => onPress(value)} value={value} />
        )) ||
          null}
        {(isSelected && (
          <Image
            source={AppImages.tick}
            style={[icon, {tintColor: appTheme.themeColor}]}
          />
        )) ||
          null}
      </View>
    </TouchableOpacity>
  );
};

export {SettingRow, SettingHeader};
