import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export const Camera = ({style}) => (
  <Icon name="camera" size={20} style={style} />
);
export const Send = ({style, onPress}) => (
  <Icon name="send" size={20} style={style} onPress={onPress} />
);
