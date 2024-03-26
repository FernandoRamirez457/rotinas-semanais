import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/header/index.js";
import Card from "./components/card/index.js";

export default function App() {
  return (
    <View style={estilo.container}>
      <Header />

      <Card
        porcentagem="29.17%"
        title_task="A mimir"
        descript="Uma pausa merecida para reabastecer suas energias, seu corpo e mente."
        image="https://cdn.pixabay.com/photo/2015/06/07/19/42/animal-800760_1280.jpg"
      />

      <Card
        porcentagem="22.02%"
        title_task="Curso de DS"
        descript="Tempo dedicado ao curso de DS, buscando aproveitar ao máximo cada momento para estudos e criação de resumos completos."
        image="https://cdn.pixabay.com/photo/2014/03/25/23/04/technology-298256_1280.jpg"
      />

      <Card
        porcentagem="17.86%"
        title_task="Ir para ETEC"
        descript="É o momento de ir para a Etec, onde dedico-me ao aprimoramento dos conhecimentos do ensino médio e do curso de informática."
        image="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg"
      />

      <Card
        porcentagem="05.36%"
        title_task="Refeições"
        descript="Momento crucial do dia, restaurando as energias através das refeições."
        image="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg"
      />

      <Card
        porcentagem="20.83%"
        title_task="Estudar"
        descript="Momento do dia reservado para estudar novos conteúdos e revisitar, momento para realizar atividades importantes."
        image="https://cdn.pixabay.com/photo/2015/07/28/22/05/child-865116_1280.jpg"
      />

      <Card
        porcentagem="04.76%"
        title_task="Jogar pra Relaxar"
        descript="Momento para relaxar e descontrair, aproveitando momentos de lazer com jogos durante os fins de semana."
        image="https://cdn.pixabay.com/photo/2019/09/02/20/43/game-4448065_1280.jpg"
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
