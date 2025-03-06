import React from "react";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";
import theme from "../../styles/theme";

export function BackButton() {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.goBack()}>
      <ArrowLeft size={32} color={theme.colors.roxoPrincipal} weight="bold" />
    </Container>
  );
}
