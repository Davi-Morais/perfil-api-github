import { Text } from "react-native";
import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
    placeholder: string,
    onChange: () => void,
    busca: string
}


export default function SearchBar({placeholder, onChange, busca}:Props) {
    return (
        <TextInput
        style={styles.input}
        placeholder={placeholder}>
        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        width: 342,
        height: 70,
        borderRadius: 16,
        marginTop: 70,
        fontSize: 25,
        padding: 20
    }
})