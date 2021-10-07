import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import CommonStyle from '../../Theme/CommonStyle';
import {AppContext} from '../../AppContext';
import {CustomText} from '../CommonComponent';
import {ButtonComponent} from './AppButton';

const styles = StyleSheet.create({
  outer: {
    ...CommonStyle.absoluteView,
    ...CommonStyle.center,
  },
  inner: {
    width: '60%',
    borderRadius: 10,
    paddingTop: 20,
    overflow: 'hidden',
    borderWidth: 0.5,
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 5,
  },
  textAlign: {
    textAlign: 'center',
  },
  btnStyle: {
    width: '100%',
    marginVertical: 0,
    borderRadius: 0,
  },
});

const NoConnection = props => {
  const {appTheme} = useContext(AppContext);
  const {textAlign, btnStyle, inner, outer, subTitle} = styles;
  const {retryConnection} = props;
  return (
    <View style={outer}>
      <View
        style={[
          inner,
          {backgroundColor: appTheme.card, borderColor: appTheme.border},
        ]}>
        <CustomText large style={[textAlign, {color: appTheme.text}]}>
          Oops!
        </CustomText>
        <CustomText large style={[subTitle, {color: appTheme.lightText}]}>
          {'No Internet Connection!\n Check your connection.'}
        </CustomText>
        <ButtonComponent
          title={'Retry'}
          icon={'refresh'}
          onPress={retryConnection}
          style={btnStyle}
        />
      </View>
    </View>
  );
};

export {NoConnection};
