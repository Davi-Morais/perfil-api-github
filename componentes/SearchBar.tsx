import { TextInput, StyleSheet } from "react-native";

type Props = {
    placeholder: string,
    onChangeText: (value: string) => void,
    onSubmitEditing: () => void
}


export default function SearchBar({placeholder, onChangeText, onSubmitEditing}:Props) {
    return (
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={e => onChangeText(e)}
        onSubmitEditing={() => onSubmitEditing()}
        ></TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#D9D9D9',
        width: 342,
        height: 70,
        borderRadius: 16,
        marginTop: 70,
        fontSize: 25,
        padding: 20
    }
})