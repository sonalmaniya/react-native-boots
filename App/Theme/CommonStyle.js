import {StyleSheet} from 'react-native';

const CommonStyle = StyleSheet.create({
  absoluteView: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  clearBack: {
    backgroundColor: 'transparent',
  },
  flexContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingTop: 10,
  },
  inputIcon: {
    height: 50,
    width: 50,
    borderBottomWidth: 1,
  },
  inputImg: {
    width: 23,
    height: 23,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CommonStyle;
