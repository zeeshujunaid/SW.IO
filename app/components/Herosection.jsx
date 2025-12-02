import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function Herosection() {
  return (
    <View
      style={{
        flexDirection: "column",
        width: "100%",
        height: "40%",
        justifyContent: "space-around",
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#fff",
          padding: 12,
          gap: 10,
          borderWidth: 1,
          borderColor: "#00000020",
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#rgba(238, 242, 251, 1)",
              padding: 8,
              borderRadius: 60,
              marginRight: 8,
            }}
          >
            <Feather name="users" size={24} color="#527EDB" />
          </View>

          <Text
            style={{
              fontSize: 18,
              color: "#333",
              fontFamily: "fustat",
              fontWeight: "bold",
            }}
          >
            Total Inquire
          </Text>
        </View>

        <Text
          style={{
            fontSize: 26,
            fontWeight: "700",
            marginTop: 6,
            color: "#000",
          }}
        >
          100
        </Text>

        <View style={{ flexDirection: "row", marginTop: 4, gap: 5 }}>
          <Text
            style={{
              color: "#rgba(0, 113, 186, 1)",
              fontWeight: "600",
              borderWidth: 1,
              borderColor: "#border: 1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: 5,
              padding: 3,
            }}
          >
            +24%{" "}
          </Text>
          <Text style={{ color: "#666" }}>vs last week</Text>
        </View>
      </View>

      {/* second two cards in row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#fff",
            padding: 12,
            borderWidth: 1,
            gap: 10,
            borderColor: "#00000020",
            borderRadius: 10,
            width: "48%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#rgba(137, 196, 65, 0.1)",
                padding: 8,
                borderRadius: 60,
                marginRight: 8,
              }}
            >
              <Feather
                name="users"
                size={24}
                color="#border: 1.11px solid rgba(137, 196, 65, 1)"
              />
            </View>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#333",
                flex: 1,
                flexWrap: "wrap",
              }}
              numberOfLines={2}
            >
              Completed
            </Text>
          </View>

          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              marginTop: 6,
              color: "#000",
            }}
          >
            100
          </Text>

          <View style={{ flexDirection: "row", marginTop: 4, gap: 5 }}>
            <Text
              style={{
                color: "#rgba(137, 196, 65, 1);",
                fontWeight: "600",
                borderWidth: 1,
                borderColor: "#border: 1px solid rgba(0, 0, 0, 0.12)",
                borderRadius: 5,
                padding: 3,
              }}
            >
              +24%{" "}
            </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#fff",
            padding: 12,
            borderWidth: 1,
            gap: 10,
            borderColor: "#00000020",
            borderRadius: 10,
            width: "48%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#17b26a1a",
                padding: 8,
                borderRadius: 50,
                marginRight: 8,
              }}
            >
              <MaterialIcons name="pending-actions" size={24} color="#17B26A" />
            </View>

            <Text style={{ fontSize: 18, fontWeight: "600", color: "#333" }}>
              Pending Quotation
            </Text>
          </View>

          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              marginTop: 6,
              color: "#000",
            }}
          >
            25%
          </Text>

          <View style={{ flexDirection: "row", marginTop: 4, gap: 4 }}>
            <Text
              style={{
                color: "green",
                fontWeight: "600",
                backgroundColor: "#E5F5ED",
                borderRadius: 5,
              }}
            >
              +2%{" "}
            </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
