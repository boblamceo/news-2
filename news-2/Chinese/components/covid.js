import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Header from "./header";
import * as Font from "expo-font";
import axios from "axios";
import { vw } from "react-native-expo-viewport-units";
import Covid19 from "../../assets/covid.jpeg";

const Covid = React.memo(({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const country_list = [
    "阿富汗",
    "阿尔巴尼亚",
    "阿尔及利亚",
    "安道尔",
    "安哥拉",
    "安圭拉",
    "安提瓜和巴布达",
    "阿根廷",
    "亚美尼亚",
    "阿鲁巴岛",
    "澳大利亚",
    "奥地利",
    "阿塞拜疆",
    "巴哈马",
    "巴林",
    "孟加拉国",
    "巴巴多斯",
    "白俄罗斯",
    "比利时",
    "伯利兹",
    "贝宁",
    "百慕大",
    "不丹",
    "玻利维亚",
    "波斯尼亚",
    "博茨瓦纳",
    "巴西",
    "英属维尔京群岛",
    "文莱",
    "保加利亚",
    "布基纳法索",
    "布隆迪",
    "佛得角",
    "柬埔寨",
    "喀麦隆",
    "加拿大",
    "加勒比海荷兰",
    "开曼群岛",
    "中非共和国",
    "乍得",
    "海峡群岛",
    "智利",
    "中国",
    "哥伦比亚",
    "科摩罗",
    "刚果",
    "哥斯达黎加",
    "克罗地亚",
    "古巴",
    "库拉索",
    "塞浦路斯",
    "捷克",
    "科特迪瓦",
    "刚果民主共和国",
    "丹麦",
    "钻石公主",
    "吉布提",
    "多米尼加",
    "多明尼加共和国",
    "厄瓜多尔",
    "埃及",
    "萨尔瓦多",
    "赤道几内亚",
    "厄立特里亚",
    "爱沙尼亚",
    "埃塞俄比亚",
    "福克兰群岛（马尔维纳斯）",
    "法罗群岛",
    "斐济",
    "芬兰",
    "法国",
    "法属圭亚那",
    "法属波利尼西亚",
    "加蓬",
    "冈比亚",
    "乔治亚州",
    "德国",
    "加纳",
    "直布罗陀",
    "希腊",
    "格陵兰",
    "格林纳达",
    "瓜德罗普岛",
    "危地马拉",
    "几内亚",
    "几内亚比绍",
    "圭亚那",
    "海地",
    "罗马教廷（梵蒂冈城国）",
    "洪都拉斯",
    "香港",
    "匈牙利",
    "冰岛",
    "印度",
    "印度尼西亚",
    "伊朗",
    "伊拉克",
    "爱尔兰",
    "马恩岛",
    "以色列",
    "意大利",
    "牙买加",
    "日本",
    "约旦",
    "哈萨克斯坦",
    "肯尼亚",
    "科威特",
    "吉尔吉斯斯坦",
    "老挝人民民主共和国",
    "拉脱维亚",
    "黎巴嫩",
    "莱索托",
    "利比里亚",
    "阿拉伯利比亚民众国",
    "列支敦士登",
    "立陶宛",
    "卢森堡",
    "赞丹女士",
    "澳门",
    "马其顿",
    "马达加斯加",
    "马拉维",
    "马来西亚",
    "马尔代夫",
    "马里",
    "马耳他",
    "马绍尔群岛",
    "马提尼克",
    "毛里塔尼亚",
    "毛里求斯",
    "马约特岛",
    "墨西哥",
    "密克罗尼西亚",
    "摩尔多瓦",
    "摩纳哥",
    "蒙古",
    "黑山",
    "蒙特塞拉特",
    "摩洛哥",
    "莫桑比克",
    "缅甸",
    "纳米比亚",
    "尼泊尔",
    "荷兰",
    "新喀里多尼亚",
    "新西兰",
    "尼加拉瓜",
    "尼日尔",
    "尼日利亚",
    "挪威",
    "阿曼",
    "巴基斯坦",
    "帕劳",
    "巴勒斯坦",
    "巴拿马",
    "巴布亚新几内亚",
    "巴拉圭",
    "秘鲁",
    "菲律宾",
    "波兰",
    "葡萄牙",
    "卡塔尔",
    "罗马尼亚",
    "俄罗斯",
    "卢旺达",
    "团圆",
    "韩国",
    "圣赫勒拿",
    "圣基茨和尼维斯",
    "圣卢西亚",
    "圣马丁",
    "圣皮埃尔密克隆",
    "圣文森特和格林纳丁斯",
    "萨摩亚",
    "圣马力诺",
    "圣多美和普林西比",
    "沙特阿拉伯",
    "塞内加尔",
    "塞尔维亚",
    "塞舌尔",
    "塞拉利昂",
    "新加坡",
    "圣马丁岛",
    "斯洛伐克",
    "斯洛文尼亚",
    "所罗门群岛",
    "索马里",
    "南非",
    "南苏丹",
    "西班牙",
    "斯里兰卡",
    "圣巴特",
    "苏丹",
    "苏里南",
    "斯威士兰",
    "瑞典",
    "瑞士",
    "阿拉伯叙利亚共和国",
    "台湾",
    "塔吉克斯坦",
    "坦桑尼亚",
    "泰国",
    "东帝汶",
    "多哥",
    "特立尼达和多巴哥",
    "突尼斯",
    "土耳其",
    "特克斯和凯科斯群岛",
    "阿联酋",
    "英国",
    "美国",
    "乌干达",
    "乌克兰",
    "乌拉圭",
    "乌兹别克斯坦",
    "瓦努阿图",
    "委内瑞拉",
    "越南",
    "瓦利斯和富图纳",
    "西撒哈拉",
    "也门",
    "赞比亚",
    "津巴布韦",
  ];
  const loadFonts = async () => {
    await Font.loadAsync({
      VRound: require("../../assets/VarelaRound-Regular.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    axios.get("https://corona.lmao.ninja/v3/covid-19/countries").then((res) => {
      const newone = res.data.map((curr, index) => {
        let obj = { ...curr };
        delete obj.country;
        return { country: country_list[index], ...obj };
      });
      setData(newone);
    });
    loadFonts();
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Header goBack={false} navigation={navigation}></Header>
      <ImageBackground source={Covid19} resizeMode="cover" style={{ flex: 1 }}>
        <FlatList
          data={data}
          style={styles.list}
          renderItem={({
            item: {
              country,
              countryInfo: { flag, lat, long },
              deaths,
              recovered,
              active,
              todayCases,
              todayDeaths,
              todayRecovered,
              tests,
            },
          }) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  navigation.navigate("Country", {
                    country,
                    flag,
                    deaths,
                    recovered,
                    active,
                    lat,
                    long,
                    todayCases,
                    todayDeaths,
                    todayRecovered,
                    tests,
                  });
                }}
              >
                <Image source={{ uri: flag }} style={styles.image}></Image>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: vw(9),
                    },
                  ]}
                  adjustsFontSizeToFit={true}
                >
                  {country}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={({ country }) => country}
        ></FlatList>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    fontFamily: "VRound",
    margin: 20,
    color: "white",
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
  },
  image: {
    width: 100,
    height: (2 / 3) * 100,
    borderRadius: 10,
  },
  info: {
    flexDirection: "row",
  },
});
export default Covid;
