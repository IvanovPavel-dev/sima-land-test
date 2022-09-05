import React, { FC, useCallback, useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CategoryCard } from '$components';
import { CategoryType } from 'types/categories';
import { requestSubCategories, removeSubCategoriesLevelTwo } from '$store/categories';
import { useAppDispatch, useAppSelector } from '$store/hooks';

export const SubCategoryLevelTwo: FC<any> = (props) => {
  const {
    route: {
      params: { category },
    },
  } = props;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {
    categories: { subListLevelTwo },
    common: { loading },
  } = useAppSelector((state) => state);

  useEffect(() => {
    console.log('category', category);
    if (!subListLevelTwo.length) {
      dispatch(requestSubCategories(category));
    }
  }, [dispatch]);

  const handleCardPress = useCallback(
    (category: CategoryType) => () => {
      if (category?.sub_categories.length > 0) {
        navigation.navigate('SubCategoryLevelThree', { category });
      }
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

  const handleOnPressGoBack = useCallback(() => {
    dispatch(removeSubCategoriesLevelTwo());
    navigation.goBack();
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10 }}>
        <Button title="Go back" onPress={handleOnPressGoBack} />
        <FlatList
          data={subListLevelTwo}
          renderItem={renderItem}
          keyExtractor={(category) => category.id.toString()}
          ListFooterComponent={loading ? ActivityIndicator : <></>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
