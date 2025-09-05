import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
export default function NotFoundScreen() {
    return (
        <>
            <View style={styles.container}>
                <Link href="/tabs" style={styles.button}>
                    Go back home 
                </Link>
            </View>

        </>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});