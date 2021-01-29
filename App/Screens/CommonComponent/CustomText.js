import React from 'react';
import {Text} from 'react-native';
import Constant from '../../Utils/Constant';

const DEFAULT_SIZES = Constant.fontSize;

const CustomText = (props) => {
  const {
    size,
    xsmall,
    small,
    large,
    xlarge,
    xxlarge,
    xxxlarge,
    style,
    children,
  } = props;

  const getFontSize = () => {
    let fontSize = size || DEFAULT_SIZES.medium;
    if (xsmall) {
      fontSize = DEFAULT_SIZES.xsmall;
    } else if (small) {
      fontSize = DEFAULT_SIZES.small;
    } else if (large) {
      fontSize = DEFAULT_SIZES.large;
    } else if (xxlarge) {
      fontSize = DEFAULT_SIZES.xxlarge;
    } else if (xlarge) {
      fontSize = DEFAULT_SIZES.xlarge;
    } else if (xxxlarge) {
      fontSize = DEFAULT_SIZES.xxxlarge;
    }
    return {
      fontSize,
    };
  };

  return (
    <Text {...props} style={[getFontSize(), style && style]}>
      {children}
    </Text>
  );
};

export {CustomText};
