import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
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
  flexDirection: {
    flexDirection: 'row',
  },
  paddingVertical: {
    paddingVertical: 10,
  },
  padding: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
  },
  space: {padding: 5},
});

const BottomView = props => {
  const {title, subTitle, onSubTitle, exStyle, exTextStyle = {}} = props;
  const {outer, flexDirection, paddingVertical, padding} = styles;
  const {appTheme} = useContext(AppContext);
  return (
    <View style={[outer, exStyle && exStyle]}>
      <View style={flexDirection}>
        <CustomText
          large
          style={[
            paddingVertical,
            {
              color: appTheme.lightText,
            },
            exTextStyle,
          ]}>
          {title}
        </CustomText>
        <TouchableOpacity onPress={onSubTitle}>
          <CustomText
            large
            style={[
              padding,
              {
                color: appTheme.themeColor,
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

const ShowFooter = ({isPageCalling, events, page}) => {
  const {appTheme} = useContext(AppContext);
  if (isPageCalling && events.length && page !== 1) {
    return (
      <View style={styles.footer}>
        <ActivityIndicator
          animating={true}
          size={'small'}
          color={appTheme.themeColor}
        />
        <CustomText style={[styles.space, {color: appTheme.lightText}]} medium>
          Loading Data...
        </CustomText>
      </View>
    );
  } else {
    return null;
  }
};

export {BottomView, ShowFooter};
