import { useEffect, useState } from "react";
import { View, ScrollView, Image } from "react-native";

import { DataTestDAO, TestDAO } from "../interfaces/TestInterface";

import { getInfoTest } from "../libs/testApi/api_test";

const TestApi = () => {

  const [responseListTest, setResponseListTest] = useState<TestDAO>({
    status: 0,
    message: '',
    data: []
  })
  const [myList, setMyList] = useState<DataTestDAO[]>([])
 
  useEffect(() => {
    getInfoTest()
    .then((data: TestDAO) => {
      console.log('informacion de get Info Test', data);
      setResponseListTest(data)
      setMyList(data.data)
    })
  }, [])

  return (
    <View className="flex-1 bg-black">
      <ScrollView className="p-4">
        MyList
      </ScrollView>
    </View>
  );
};

export default TestApi;
