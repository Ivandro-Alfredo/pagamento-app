import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
      flex: 0,
      backgroundColor: "#00aa00",
    },
    scrollView: {
      flex: 1,
    },
    header: {
      backgroundColor: "#00aa00",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
    searchBarContainer: {
      backgroundColor: "#fff",
      padding: 16,
    },
    filterButton: {
      marginTop: 8,
      backgroundColor: "#00aa00",
    },
    bestMatchContainer: {
      backgroundColor: "#fff",
      padding: 16,
      marginTop: 16,
    },
    matchHeader: {
      flexDirection: "row",
      alignItems: "center",
    },
    matchImage: {
      width: 64,
      height: 64,
      borderRadius: 32,
      marginRight: 16,
    },
    matchInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    matchName: {
      fontSize: 16,
      fontWeight: "bold",
    },
    matchSkills: {
      fontSize: 14,
      color: "#666",
    },
    investButton: {
      height: 40,
      alignSelf: "flex-end",
      marginLeft: 10,
      backgroundColor: "#00aa00",
    },
    investDescription: {
      fontSize: 14,
      color: "#666",
      marginTop: 8,
    },
    divider: {
      marginVertical: 16,
    },
    detailsContainer: {
      marginTop: 16,
    },
    detailsTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    ratingIcon: {
      marginRight: 8,
    },
    learnMoreButton: {
      alignSelf: "flex-end",
      marginTop: 8,
    },
    learnMoreText: {
      color: "#00aa00",
      fontSize: 14,
      fontWeight: "bold",
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 4,
    },
    locationText: {
      fontSize: 14,
      color: "#666",
      marginLeft: 4,
    },
  });