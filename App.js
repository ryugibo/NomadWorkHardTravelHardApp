import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "./colors";

const STORAGE_KEY = "@toDos";

const TAB_KEY = "@tab";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const addToDo = () => {
    if (text === "") {
      return;
    }
    setToDos((toDos) => ({
      ...toDos,
      [Date.now()]: { text, working, complete: false },
    }));
    setText("");
  };
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    setToDos(JSON.parse(s));
  };
  const deleteToDo = (key) => {
    Alert.alert("Delete To Do?", "Are you sure?", [
      {
        text: "Cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setToDos((toDos) => {
            const newToDos = { ...toDos };
            delete newToDos[key];
            return newToDos;
          });
        },
      },
    ]);
  };
  const completeToDo = (key) => {
    console.log(toDos[key].complete, key);
    setToDos((toDos) => ({
      ...toDos,
      [key]: { ...toDos[key], complete: !toDos[key].complete },
    }));
  };
  const saveWorking = async (working) => {
    await AsyncStorage.setItem(TAB_KEY, JSON.stringify(working));
  };
  const loadWorking = async () => {
    const s = await AsyncStorage.getItem(TAB_KEY);
    if (!s) {
      return;
    }
    setWorking(JSON.parse(s));
  };

  useEffect(() => {
    loadToDos();
    loadWorking();
  }, []);
  useEffect(() => {
    saveToDos(toDos);
  }, [toDos]);
  useEffect(() => {
    saveWorking(working);
  }, [working]);

  console.log(toDos);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{ ...styles.btnText, color: working ? theme.grey : "white" }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onChangeText={onChangeText}
        onSubmitEditing={addToDo}
        value={text}
        returnKeyType="done"
        style={styles.input}
        placeholder={working ? "Add a To Do" : "Where do you want to go?"}
      />
      <ScrollView>
        {Object.keys(toDos)
          .sort()
          .map((key) =>
            toDos[key].working === working ? (
              <View style={styles.toDo} key={key}>
                <TouchableOpacity
                  style={styles.toDoBtn}
                  onPress={() => completeToDo(key)}
                >
                  <Text>
                    {toDos[key].complete ? (
                      <Fontisto
                        name="checkbox-active"
                        color={theme.grey}
                        size={18}
                      />
                    ) : (
                      <Fontisto
                        name="checkbox-passive"
                        color="white"
                        size={18}
                      />
                    )}
                  </Text>
                </TouchableOpacity>
                <Text
                  style={
                    toDos[key].complete
                      ? styles.toDoTextComplete
                      : styles.toDoText
                  }
                >
                  {toDos[key].text}
                </Text>
                <TouchableOpacity
                  style={styles.toDoBtn}
                  onPress={() => deleteToDo(key)}
                >
                  <Text>
                    <Fontisto name="trash" color={theme.grey} size={18} />
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null
          )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingVertical: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  toDoTextComplete: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    textDecorationLine: "line-through",
    color: theme.grey,
  },
  toDoBtn: {
    paddingHorizontal: 20,
  },
});
