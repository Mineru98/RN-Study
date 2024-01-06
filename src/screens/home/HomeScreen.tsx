import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import createStyles from "./HomeScreen.style";
import StyledText from "components/atoms/Text";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const Header = () => <View style={styles.header}></View>;

  const List = () => <View style={styles.listContainer}></View>;

  const Welcome = () => (
    <>
      <StyledText className={`font-bold color-[${colors.text}]`}>
        Home
      </StyledText>
    </>
  );

  const Content = () => (
    <View style={styles.contentContainer}>
      <Welcome />
      <List />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Content />
    </SafeAreaView>
  );
};

export default HomeScreen;
