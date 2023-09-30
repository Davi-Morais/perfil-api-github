import { View, Image, StyleSheet, Text } from "react-native"

type User = {
    name: string,
    avatar_url: string
}

type Props = {
    user: User|null
}

export default function DisplayUser({ user }:Props) {

    return (
        <View style={styles.container}>
            {user ? (
                <>
                    <Image style={styles.image} source={{uri: user.avatar_url}}></Image>
                    <Text style={styles.name}>{user.name}</Text>
                </>
            ) : (
                <View /> 
            )}
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 55
    },
    image: {
        width: 329,
        height: 329,
        borderRadius: 329 / 2
    },
    name: {
        fontSize: 32,
        textAlign: "center",
        color: '#fff',
    }
})