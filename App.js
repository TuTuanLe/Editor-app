import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { readAsStringAsync } from 'expo-file-system';
import { WebView } from 'react-native-webview';
import { useAssets } from 'expo-asset';
import { useState } from 'react';

export default function App() {
    const exampleHTML = require('./simple-image/example.html');
    console.log('PolicyHTML:', exampleHTML);
    const [index, indexLoadingError] = useAssets(require('./simple-image/example.html'));
    const [html, setHtml] = useState('');

    if (index) {
        readAsStringAsync(index[0].localUri).then((data) => {
            setHtml(data);
        });
    }

    return (
        <WebView
            style={styles.container}
            source={{ html, baseUrl: 'web/' }}
            originWhitelist={'["*"]'}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            javaScriptEnabledAndroid={true}
            injectedJavaScript={INJECTED_JAVASCRIPT}
            mixedContentMode="always"
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
