import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// from 자바스크립트 파일명
// from 디렉토리명 -> 디렉토리/index.js
// import HelloWorld from './components/HelloWorld'
// import Counter from './components/Counter'
// import LotsOfGreetings from './components/LotsOfGreetings'
import SimpleList from './components/SimpleList'

/* APP 컴포넌트 시작 부분 */
export default function App() {
  // JSX
  // UI 템플릿을 작성
  return (
        // 속성={값}
        // 속성 = {"문자열"}
        // 속성 = {{name:"sss",phone:"aaaa"}}
        // 속성 = {개체변수}
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <HelloWorld></HelloWorld> */}
      {/* <Counter></Counter> */}
      {/* <LotsOfGreetings></LotsOfGreetings> */}
      <SimpleList></SimpleList>
      <StatusBar style="auto" />
    </View>
  );
}
/* APP 컴포넌트 끝 */

// style="display:flex;"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
