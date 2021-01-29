import {Platform, Dimensions} from 'react-native';

const isIOS = Platform.OS === 'ios';

const {height, width} = Dimensions.get('window');

const aspectRatio = height / width;
const isiPad = aspectRatio < 1.6;

// Custom Fonts
const fonts = {
  Regular: {fontFamily: 'Regular'},
  Light: {fontFamily: 'Light'},
  Medium: {fontFamily: 'Medium'},
  oBold: {fontFamily: 'Bold'},
};

// Font Sizes
const fontSize = {
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 18,
  xxlarge: 25,
};

const Constant = {
  fonts,
  fontSize,
  height,
  width,
  isIOS,
  isiPad,
};

export default Constant;
