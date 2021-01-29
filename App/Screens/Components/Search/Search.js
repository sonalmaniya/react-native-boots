import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';

const Search = (props) => {
  const {appTheme} = useContext(AppContext);

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      <CustomText xlarge style={{color: appTheme.text}}>
        Search Tab
      </CustomText>
    </SafeAreaView>
  );
};

export default Search;
