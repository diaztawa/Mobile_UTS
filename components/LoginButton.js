import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import useTheme from '../hooks/useTheme';

const { font_size, radius } = useTheme();

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pil,
  },
});

const LoginButton = ({
  icon, label, style, onPress,
}) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
  >
    <MaterialCommunityIcons
      name={icon.name}
      size={font_size.size.xl}
      color={icon.color}
    />
    <Text style={{
      marginLeft: 8,
      color: label.color,
    }}
    >
      {label.placeholder}
    </Text>
  </TouchableOpacity>
);

export default LoginButton;