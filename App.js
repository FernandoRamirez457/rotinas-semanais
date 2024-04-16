import React from "react";
import { StyleSheet, View, FlatList, Text} from "react-native";
import Header from "./components/header/index.js";
import Card from "./components/card/index.js";
import ROTINAS from "./data/index.js";

export default function App() {
  return (
    <View style={estilo.container}>
      <Header />
      <FlatList style={{width: "100%"}}
        data={ROTINAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card 
          porcentagem = {item.porcentagem}
          title_task = {item.title_task}
          descript = {item.descript}
          image = {item.image}
          />
        )}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    backgroundColor: "#CAF0F8",

    borderColor: "#90E0EF",

    paddingHorizontal: 20,
  },
});
