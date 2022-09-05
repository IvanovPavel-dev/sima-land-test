import React, { FC, memo, useState } from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  StyleProp,
  ViewStyle,
  ImageProps,
  StyleSheet,
} from 'react-native';

interface ImageWithLoaderProps {
  uri: string;
  style: StyleProp<ViewStyle>;
  imageProps?: Omit<ImageProps, 'source'>;
}

const ImageWithLoader: FC<ImageWithLoaderProps> = ({ uri, style, imageProps = {} }) => {
  const [imageLoading, setImageLoading] = useState(false);

  return (
    <View style={style}>
      <Image
        onLoadStart={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}
        style={styles.image}
        source={{ uri }}
        {...imageProps}
      />
      {imageLoading && (
        <View style={[style, styles.loaderContainer]}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(ImageWithLoader);
