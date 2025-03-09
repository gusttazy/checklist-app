import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  SafeContainer,
  HeaderContainer,
  GreetingText,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ActivityCard,
  ActivityText,
  AddButton,
  AddButtonIcon,
  EmptyListContainer,
  EmptyListText,
} from "./styles";
import ActivityModal from "../../components/ModalActivity";

type HomeProps = {
  navigation: any;
};

type Activity = {
  id: string;
  title: string;
};

export default function Home({ navigation }: HomeProps) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const filteredActivities = searchQuery
    ? activities.filter((activity) =>
        activity.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activities;

  const handleAddActivity = () => {
    setModalVisible(true);
  };

  const handleSaveActivity = (title: string) => {
    if (title.trim() === "") {
      Alert.alert("Erro", "O nome da atividade não pode estar vazio.");
      return;
    }

    const newActivity = {
      id: Date.now().toString(),
      title: title.trim(),
    };

    setActivities([...activities, newActivity]);
    setModalVisible(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleActivityPress = (id: string) => {
    navigation.navigate("ActivityDetails", { activityId: id });
  };

  const handleRemoveActivity = (id: string) => {
    Alert.alert(
      "Remover Atividade",
      "Tem certeza que deseja remover esta atividade?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          onPress: () => {
            setActivities(activities.filter((activity) => activity.id !== id));
          },
          style: "destructive",
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: Activity }) => (
    <ActivityCard
      onPress={() => handleActivityPress(item.id)}
      onLongPress={() => handleRemoveActivity(item.id)}
    >
      <ActivityText>{item.title}</ActivityText>
    </ActivityCard>
  );

  const renderEmptyList = () => (
    <EmptyListContainer>
      <EmptyListText>Nenhuma atividade encontrada</EmptyListText>
      <EmptyListText>Clique no botão + para adicionar</EmptyListText>
    </EmptyListContainer>
  );

  return (
    <SafeContainer>
      <HeaderContainer>
        <GreetingText>Olá, Gustavo!</GreetingText>
      </HeaderContainer>

      <SearchContainer>
        <SearchIcon name="search" size={20} />
        <SearchInput
          placeholder="Pesquisar listas"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery !== "" && (
          <Feather
            name="x"
            size={20}
            color="#8162DA"
            onPress={() => setSearchQuery("")}
            style={{ padding: 8 }}
          />
        )}
      </SearchContainer>

      <FlatList
        data={filteredActivities}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          flexGrow: 1,
          justifyContent: activities.length === 0 ? "center" : "flex-start",
        }}
        ListEmptyComponent={renderEmptyList}
      />

      <AddButton onPress={handleAddActivity}>
        <AddButtonIcon name="plus" size={30} />
      </AddButton>

      <ActivityModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onSave={handleSaveActivity}
      />
    </SafeContainer>
  );
}
