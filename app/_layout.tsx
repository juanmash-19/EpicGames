import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const data = [
  { id: '1', name: 'Elemento 1' },
  { id: '2', name: 'Elemento 2' },
  { id: '3', name: 'Elemento 3' },
  { id: '4', name: 'Elemento 4' },
];

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <Link href='/account/878'>
        <Text style={styles.profileButton}>Perfil</Text>
      </Link>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: 'red',
  },
  profileButton: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center',
  },
  listItem: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default Index;
