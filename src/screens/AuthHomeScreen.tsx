import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {authNavigations} from '../constants';
import {AuthStackParamList} from '../navigations/stack/AuthStackNavigator';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  return (
    <SafeAreaView>
      <Text>AuthHomeScreen</Text>
      <Button
        title="로그인 화면으로 이동"
        onPress={() => navigation.navigate(authNavigations.LOGIN)}
      />
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
