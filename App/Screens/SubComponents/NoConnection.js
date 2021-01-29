import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import CommonStyle from '../../Theme/CommonStyle';
import {AppContext} from '../../AppContext';
import {CustomText} from '../CommonComponent';
import {ButtonWithIcon} from './AppButton';

const styles = StyleSheet.create({
  outer: {
    ...CommonStyle.absoluteView,
    ...CommonStyle.center,
  },
  inner: {
    width: '60%',
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 20,
    overflow: 'hidden',
    borderWidth: 0.5,
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 5,
  },
});

const NoConnection = (props) => {
  const {appTheme} = useContext(AppContext);
  const {retryConnection} = props;
  return (
    <View style={styles.outer}>
      <View style={[styles.inner, {backgroundColor: appTheme.cardBackground}]}>
        <CustomText large style={[{color: appTheme.text}]}>
          Oops!
        </CustomText>
        <CustomText
          large
          style={[styles.subTitle, {color: appTheme.lightText}]}>
          {'No Internet Connection!\n Check your connection.'}
        </CustomText>
        <ButtonWithIcon
          title={'Retry'}
          icon={'refresh'}
          exStyle={{width: '100%'}}
          onPress={retryConnection}
        />
      </View>
    </View>
  );
};

export {NoConnection};
