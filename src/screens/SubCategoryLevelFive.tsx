import React, { FC, useCallback, useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CategoryCard } from '$components';
import { CategoryType } from 'types/categories';
import { requestSubCategories, removeSubCategoriesLevelFive } from '$store/categories';
import { useAppDispatch, useAppSelector } from '$store/hooks';

export const SubCategoryLevelFive: FC<any> = (props) => {
  const {
    route: {
      params: { category },
    },
  } = props;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {
    categories: { subListLevelFive },
    common: { loading },
  } = useAppSelector((state) => state);

  useEffect(() => {
    console.log('category', category);
    if (!subListLevelFive.length) {
      dispatch(requestSubCategories(category));
      console.log('four');
    }
  }, [dispatch]);

  const handleCardPress = useCallback(
    (category: CategoryType) => () => {
      console.log('category', category);
      if (category?.sub_categories.length > 0) {
        console.log('is go fw 6?');
        navigation.navigate('SubCategoryLevelSix', { category });
      } else {
        navigation.navigate('GoodsList', { category });
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
    dispatch(removeSubCategoriesLevelFive());
    navigation.goBack();
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10 }}>
        <Button title="Go back" onPress={handleOnPressGoBack} />
        <FlatList
          data={subListLevelFive}
          renderItem={renderItem}
          keyExtractor={(category) => category.id.toString()}
          ListFooterComponent={loading ? ActivityIndicator : <></>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
