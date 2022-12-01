import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { readAsStringAsync } from 'expo-file-system';
import { WebView } from 'react-native-webview';
import { useAssets } from 'expo-asset';
import { useState } from 'react';

const exampleHTML = require('./simple-image/example.html');

export default function App() {
    console.log('PolicyHTML:', exampleHTML);
    const [index, indexLoadingError] = useAssets(require('./simple-image/example.html'));
    // const [html, setHtml] = useState('');

    // if (index) {
    //     readAsStringAsync(index[0].localUri).then((data) => {
    //         setHtml(data);
    //     });
    // }
    return (
        <WebView
            style={styles.container}
            source={require('./simple-image/example.html')}
            originWhitelist={'["*"]'}
            javaScriptEnabled={true}
            domStorageEnabled={true}
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
