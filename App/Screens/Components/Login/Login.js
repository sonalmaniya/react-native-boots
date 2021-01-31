import React, {Component} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import AppImages from '../../../Theme/AppImages';
import {GradientButton, BottomView} from '../../SubComponents';
import {CustomText} from '../../CommonComponent';
import {setItemInStorage} from '../../../Utils/Storage';

const styles = StyleSheet.create({
  outer: {
    width: '85%',
    alignSelf: 'center',
    flex: 1,
    marginTop: 130,
  },
  title: {
    marginVertical: 20,
    textAlign: 'center',
  },
});

class Login extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isSecureTextEntry: true,
      isProcessing: false,
    };
  }

  onSubmitEditing = (refName) => {
    if (this[refName]) {
      this[refName].focus();
    }
  };

  onChangeText = (text, type) => {
    this.setState({
      [type]: text,
    });
  };

  onShowPassword = () => {
    this.setState({
      isSecureTextEntry: !this.state.isSecureTextEntry,
    });
  };

  manageProcessing = (isProcessing) => {
    this.setState({
      isProcessing,
    });
  };

  onLogin = async () => {
    try {
      // Field Validation
      // Make api call ans store user in redux and token in Storage
      this.goToNextScreen('Home');
      await setItemInStorage('token', 'set login token');
    } catch (error) {
      this.manageProcessing(false);
    }
  };

  goToNextScreen = (page) => {
    const {navigation} = this.props;
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: page}],
      }),
    );
  };

  render() {
    const {appTheme, translations} = this.context;
    const {email, password, isSecureTextEntry, isProcessing} = this.state;
    const {outer, title} = styles;
    const inputStyle = [
      CommonStyle.input,
      {
        color: appTheme.text,
        borderColor: appTheme.border,
      },
    ];
    return (
      <SafeAreaView
        style={[
          CommonStyle.flexContainer,
          {backgroundColor: appTheme.background},
        ]}>
        <View style={[CommonStyle.flexContainer, CommonStyle.center]}>
          <View style={outer}>
            <CustomText xxlarge style={[title, {color: appTheme.text}]}>
              {translations.SIGN_IN}
            </CustomText>
            <TextInput
              onChangeText={(text) => this.onChangeText(text, 'email')}
              value={email}
              autoCapitalize={'none'}
              placeholder={'Email'}
              style={inputStyle}
              placeholderTextColor={appTheme.lightText}
              underlineColorAndroid={appTheme.transparent}
              keyboardType={'email-address'}
              returnKeyType={'next'}
              ref={(ref) => (this.refEmail = ref)}
              onSubmitEditing={() => this.onSubmitEditing('refPassword')}
            />
            <View style={{flexDirection: 'row'}}>
              <TextInput
                onChangeText={(text) => this.onChangeText(text, 'password')}
                value={password}
                autoCapitalize={'none'}
                placeholder={'Password'}
                style={[inputStyle, {flex: 1}]}
                placeholderTextColor={appTheme.lightText}
                underlineColorAndroid={appTheme.transparent}
                secureTextEntry={isSecureTextEntry}
                returnKeyType={'done'}
                ref={(ref) => (this.refPassword = ref)}
                onSubmitEditing={this.onLogin}
              />
              <TouchableOpacity onPress={this.onShowPassword} activeOpacity={1}>
                <View
                  style={{
                    ...CommonStyle.center,
                    ...CommonStyle.inputIcon,
                    borderBottomColor: appTheme.border,
                  }}>
                  <Image
                    resizeMode={'contain'}
                    source={
                      (isSecureTextEntry && AppImages.passwordOpen) ||
                      AppImages.passwordClosed
                    }
                    style={CommonStyle.inputImg}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <CustomText
              style={{
                color: appTheme.lightText,
                textAlign: 'right',
                paddingVertical: 5,
              }}>
              Forgot Password?
            </CustomText>
            <GradientButton
              title={'Log in'}
              isProcessing={isProcessing}
              onPress={this.onLogin}
              exStyle={{marginTop: 50}}
            />
            <BottomView
              title={'Need to create an account?'}
              subTitle={'Sign up here'}
              onSubTitle={() => console.log('go to signup')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
