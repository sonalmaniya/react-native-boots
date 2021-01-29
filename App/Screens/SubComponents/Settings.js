import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import {CustomText} from '../CommonComponent';
import {AppContext} from '../../AppContext';
import CommonStyle from '../../Theme/CommonStyle';
import Constant from '../../Utils/Constant';

const styles = StyleSheet.create({
  outer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const SettingHeader = (props) => {
  const {title} = props;
  return null;
};

const SettingRow = (props) => {
  const {title, exStyle, onPress, value, isSwitch = false} = props;
  const {outer} = styles;
  const {appTheme} = useContext(AppContext);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={outer}>
        <CustomText style={{color: appTheme.text}}>{title}</CustomText>
        {(isSwitch && <Switch onChange={onPress} value={value} />) || null}
      </View>
    </TouchableOpacity>
  );
};

export {SettingRow, SettingHeader};
