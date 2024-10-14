import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';

const App = () => {
	const [text, setText] = useState('');

	const copyToClipboard = async () => {
		await Clipboard.setString(text);
		Alert.alert('Texto copiado al portapapeles');
	};

	const cutToClipboard = async () => {
		await Clipboard.setString(text);
		setText('');
		Alert.alert('Texto cortado y copiado al portapapeles');
	};

	const pasteFromClipboard = async () => {
		const content = await Clipboard.getStringAsync();
		setText(content);
		Alert.alert('Texto pegado desde el portapapeles');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.infoText}>
				1. Versión de React Native: 0.62 o superior.
				{'\n'}2. Librería a instalar: expo-clipboard.
				{'\n'} Comando: npm i expo-clipboard.
				{'\n'}3. No se requieren permisos especiales en Android e iOS.
			</Text>
			<TextInput
				value={text}
				onChangeText={setText}
				placeholder="Escribe algo aquí"
				style={styles.input}
			/>
			<View style={styles.buttonContainer}>
				<Button title="Copiar" onPress={copyToClipboard} />
				<Button title="Cortar" onPress={cutToClipboard} />
				<Button title="Pegar" onPress={pasteFromClipboard} />
			</View>
			<Text style={styles.resultText}>Texto en el portapapeles: {text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#f5f5f5',
	},
	infoText: {
		marginBottom: 20,
		fontSize: 16,
		color: '#555',
		textAlign: 'center',
	},
	input: {
		height: 40,
		width: '100%',
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 20,
		backgroundColor: '#fff',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginBottom: 20,
	},
	resultText: {
		marginTop: 20,
		fontSize: 16,
		color: '#333',
	},
});

export default App;
