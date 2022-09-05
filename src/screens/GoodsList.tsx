import React, { FC, useCallback, useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CategoryCard } from '$components';
import { CategoryType } from 'types/categories';
import { requestGoods, removeGoods } from '$store/categories';
import { useAppDispatch, useAppSelector } from '$store/hooks';

export const GoodsList: FC<any> = (props) => {
  const {
    route: {
      params: { category },
    },
  } = props;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {
    categories: { goodsList },
    common: { loading },
  } = useAppSelector((state) => state);

  useEffect(() => {
    console.log('category', category);
    if (!goodsList.length) {
      dispatch(requestGoods(category));
      console.log('goods');
    }
  }, [dispatch]);

  const handleCardPress = useCallback(
    (category: CategoryType) => () => {
      console.log('category', category);
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item: category }) => (
      <CategoryCard
        id={category.id}
        key={category.id}
        name={category.name}
        image={category.img}
        onPress={handleCardPress(category)}
      />
    ),
    [handleCardPress],
  );

  const handleOnPressGoBack = useCallback(() => {
    dispatch(removeGoods());
    navigation.goBack();
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10 }}>
        <Button title="Go back" onPress={handleOnPressGoBack} />
        <FlatList
          data={goodsList}
          renderItem={renderItem}
          keyExtractor={(category) => category.id.toString()}
          ListFooterComponent={loading ? ActivityIndicator : <></>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
