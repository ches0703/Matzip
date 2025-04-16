import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

const AuthHomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>AuthHomeScreen</Text>
      <Button
        title="로그인 화면으로 이동"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
