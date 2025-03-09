import styled from "@emotion/native";
import { SafeAreaView, View, TouchableOpacity, TextInput } from "react-native";
import { Text } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import theme from "../../styles/theme";

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 20px;
`;

export const HeaderContainer = styled(View)`
  margin-top: 40px;
  margin-bottom: 15px;
`;

export const GreetingText = styled(Text)`
  font-size: 40px;
  color: ${theme.colors.roxoPrincipal};
  font-family: ${theme.fonts.extraBold};
`;

export const SearchContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: #F4F2FF;
  border-radius: 12px;
  padding: 0 10px;
  margin-bottom: 20px;
`;

export const SearchIcon = styled(Feather)`
  color: ${theme.colors.roxoSecundario};
  margin-right: 10px;
`;

export const SearchInput = styled(TextInput)`
  flex: 1;
  height: 50px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.regular};
  font-size: 16px;
`;

export const ActivityCard = styled(TouchableOpacity)`
  background-color: #F4F2FF;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 16px;
  elevation: 2;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
`;

export const ActivityText = styled(Text)`
  font-size: 25px;
  color: ${theme.colors.roxoPrincipal};
  font-family: ${theme.fonts.bold};
  text-align: center;
`;

export const AddButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${theme.colors.roxoPrincipal};
  justify-content: center;
  align-items: center;
  elevation: 5;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: #000;
  shadow-offset: 0px 3px;
`;

export const AddButtonIcon = styled(Feather)`
  color: white;
`;

export const EmptyListContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const EmptyListText = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.medium};
  text-align: center;
`;