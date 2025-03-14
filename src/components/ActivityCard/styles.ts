import styled from "@emotion/native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../styles/theme";

export const ActivityCardContainer = styled(TouchableOpacity)`
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
