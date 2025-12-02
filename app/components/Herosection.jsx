import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Herosection() {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 12, gap: 12 }}>
      {/* Top Card */}
      <View
        style={{
          backgroundColor: "#fff",
          padding: 16,
          borderWidth: 1,
          borderColor: "#00000020",
          borderRadius: 12,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <View
            style={{
              backgroundColor: "rgba(238, 242, 251, 1)",
              padding: 8,
              borderRadius: 50,
            }}
          >
            <Feather name="users" size={24} color="#527EDB" />
          </View>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
            Total Inquire
          </Text>
        </View>

        <Text
          style={{
            fontSize: 26,
            fontWeight: "700",
            marginTop: 8,
            color: "#000",
          }}
        >
          100
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 6,
            marginTop: 6,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#0071BA",
              fontWeight: "600",
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.12)",
              borderRadius: 5,
              paddingHorizontal: 6,
              paddingVertical: 2,
            }}
          >
            +24%
          </Text>
          <Text style={{ color: "#666" }}>vs last week</Text>
        </View>
      </View>

      {/* Bottom Row Cards */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        {/* Completed Card */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: 16,
            borderWidth: 1,
            borderColor: "#00000020",
            borderRadius: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                backgroundColor: "rgba(137, 196, 65, 0.1)",
                padding: 8,
                borderRadius: 50,
              }}
            >
              <Feather name="users" size={24} color="#89C441" />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#333",
                flex: 1,
              }}
            >
              Completed
            </Text>
          </View>

          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              marginTop: 8,
              color: "#000",
            }}
          >
            100
          </Text>

          <View
            style={{
              flexDirection: "row",
              gap: 6,
              marginTop: 6,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#89C441",
                fontWeight: "600",
                backgroundColor: "#E9F6DF",
                borderRadius: 5,
                paddingHorizontal: 6,
                paddingVertical: 2,
              }}
            >
              +24%
            </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>

        {/* Pending Card */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: 16,
            borderWidth: 1,
            borderColor: "#00000020",
            borderRadius: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                backgroundColor: "rgba(23, 178, 106, 0.1)",
                padding: 8,
                borderRadius: 50,
              }}
            >
              <MaterialIcons name="pending-actions" size={24} color="#17B26A" />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#333",
                flex: 1,
              }}
            >
              Pending Quotation
            </Text>
          </View>

          <Text
            style={{
              fontSize: 26,
              fontWeight: "700",
              marginTop: 8,
              color: "#000",
            }}
          >
            25%
          </Text>

          <View
            style={{
              flexDirection: "row",
              gap: 6,
              marginTop: 6,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#17B26A",
                fontWeight: "600",
                backgroundColor: "#E5F5ED",
                borderRadius: 5,
                paddingHorizontal: 6,
                paddingVertical: 2,
              }}
            >
              +2%
            </Text>
            <Text style={{ color: "#666" }}>vs last week</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
