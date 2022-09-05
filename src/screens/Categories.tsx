import React, { FC, useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CategoryCard } from '$components';
import { CategoryType } from 'types/categories';
import { requestCategories } from '$store/categories';
import { useAppDispatch, useAppSelector } from '$store/hooks';

export const CategoriesScreen: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {
    categories: { list },
    common: { loading },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (!list.length) {
      dispatch(requestCategories());
    }
  }, [list, dispatch]);

  const handleCardPress = useCallback(
    (category: CategoryType) => () => {
      navigation.navigate('SubCategoryLevelTwo', { category });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item: category }) => (
      <CategoryCard
        id={category.id}
        key={category.id}
        name={category.name}
        image={category.icon}
        onPress={handleCardPress(category)}
      />
    ),
    [handleCardPress],
  );

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10 }}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(category) => category.id.toString().toString()}
          ListFooterComponent={loading ? ActivityIndicator : <></>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
