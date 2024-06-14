import React from 'react';
import { SafeAreaView, StyleSheet, View, Platform, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {Platform.OS === 'web' ? (
        <iframe
          src="http://localhost:3000" // 将此 URI 替换为你的 Next.js 应用的实际 URL
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="WebView"
        />
      ) : (
        <View style={styles.container}>
          <WebView
            source={{ uri: 'http://localhost:3000' }}
            style={{ flex: 1 }}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
