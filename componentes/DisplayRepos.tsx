import { View, Text, FlatList, StyleSheet } from "react-native"


type Repo = {
    name: string,
    description: string
}
type Props = {
    repos: Repo[]|null
}

export default function DisplayRepos({repos}:Props) {
    return (
        <View  style={styles.container}>
            {Array.isArray(repos) ? (
                repos.map((r, index) => (
                    <View key={index} style={styles.repo}>
                        <Text style={styles.name}>{r.name}</Text>
                        <Text style={styles.description}>{r.description}</Text>
                    </View>
                ))
            ) : (
                <View />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 25,
        marginLeft: 25,
        marginTop: 80
    },
    repo: {
        marginBottom: 45,
        backgroundColor: '#444653',
        width: 342,
        height: 'auto',
        alignItems: 'center',
        padding: 10,
        paddingTop: 2
    },
    name: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center'
    },
    description: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'auto'
    }
})