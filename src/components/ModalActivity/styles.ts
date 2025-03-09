import styled from "@emotion/native";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../styles/theme";

export const ModalContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled(View)`
  width: 85%;
  background-color: white;
  border-radius: 20px;
  padding: 25px;
  align-items: center;
  elevation: 5;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
`;

export const ModalTitle = styled(Text)`
  font-size: 22px;
  color: ${theme.colors.roxoPrincipal};
  font-family: ${theme.fonts.bold};
  margin-bottom: 20px;
  text-align: center;
`;

export const InputContainer = styled(View)`
  width: 100%;
  margin-bottom: 25px;
`;

export const ActivityInput = styled(TextInput)`
  width: 100%;
  height: 55px;
  background-color: #f4f2ff;
  border-radius: 10px;
  padding: 0 15px;
  font-size: 16px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.medium};
`;

export const ButtonsContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CancelButton = styled(TouchableOpacity)`
  flex: 1;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.roxoSecundario};
`;

export const CancelButtonText = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.bold};
`;

export const SaveButton = styled(TouchableOpacity)`
  flex: 1;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 10px;
  background-color: ${theme.colors.roxoPrincipal};
`;

export const SaveButtonText = styled(Text)`
  font-size: 16px;
  color: white;
  font-family: ${theme.fonts.bold};
`;
