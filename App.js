import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{
        uri: 'http://localhost:5000/api/auth/mobile-platform-redirect?source=http://localhost:5000/&remember=false',
        headers: {
          // Authorization: 'Bearer ', - ADD REFRESH TOKEN HERE
        },
      }}
    />
  );
}
