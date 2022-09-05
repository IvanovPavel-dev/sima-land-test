import React, { FC, memo } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { CategoryImageType } from 'types/categories';
import ImageWithLoader from './ImageWithLoader';

interface CategoryCardProps {
  id: string;
  name: string;
  image: CategoryImageType;
  onPress: () => void;
}

export const CategoryCard: FC<CategoryCardProps> = (props) => {
  const { name, image, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageWithLoader
        uri={image ? image : null}
        style={[styles.image]}
        imageProps={{ resizeMode: 'cover' }}
      />
      <View>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.name}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    //elevation: 20,
    // maxHeight: 80,
    flexDirection: 'row',
    marginBottom: 15,
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 2,
    alignContent: 'center',
  },
  name: {
    fontSize: 18,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
});

export default memo(CategoryCard);
