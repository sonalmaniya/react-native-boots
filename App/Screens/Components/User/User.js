import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {CustomText} from '../../CommonComponent';
import {ButtonComponent} from '../../SubComponents';

const styles = StyleSheet.create({
  btnTitle: {
    marginVertical: 10,
  },
  btnBorder: {
    borderRadius: 40,
  },
});

const Users = props => {
  const {appTheme} = useContext(AppContext);
  const {btnTitle, btnBorder} = styles;

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      <CustomText xlarge style={([btnTitle], {color: appTheme.text})}>
        Button Component
      </CustomText>
      <ButtonComponent title={'Button'} />
      <ButtonComponent title={'Button'} isProcessing />
      <ButtonComponent
        title={'Border Button'}
        border={appTheme.themeColor}
        textColor={appTheme.themeColor}
        backColor={appTheme.background}
      />
      <ButtonComponent
        title={'Danger Button'}
        border={appTheme.red}
        textColor={appTheme.red}
        backColor={appTheme.background}
      />
      <ButtonComponent
        title={'Disabled Button'}
        border={appTheme.lightText}
        textColor={appTheme.lightText}
        backColor={appTheme.background}
      />
      <ButtonComponent title={'Rounded Button'} style={btnBorder} />
    </SafeAreaView>
  );
};

export default Users;
