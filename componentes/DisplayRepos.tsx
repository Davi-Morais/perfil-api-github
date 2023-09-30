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
            {repos ? (

                <FlatList
                data={repos}
                renderItem={(r) =>

                    <View key={r.index} style={styles.repo}>
                        <Text style={styles.name}>{r.item.name}</Text>
                        <Text style={styles.description}>{r.item.description}</Text>
                    </View>}

                />

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
    },
    repo: {
        marginBottom: 45,
        backgroundColor: '#444653',
        width: 342,
        height: 111,
        alignItems: 'center'
    },
    name: {
        color: '#fff',
        fontSize: 30
    },
    description: {
        color: '#fff',
        fontSize: 15
    }
})