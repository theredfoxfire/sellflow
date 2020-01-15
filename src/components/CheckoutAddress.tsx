import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Alert,
} from 'react-native';
import { Text, RadioButton } from 'exoflex';

import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';

type Props = {
  id: string | number;
  style?: StyleProp<ViewStyle>;
  name: string;
  address: string;
  phoneNumber: string;
  isSelected: boolean;
  onSelect: () => void;
};

export default function CheckoutAddress(props: Props) {
  let { id, style, name, address, phoneNumber, isSelected, onSelect } = props;

  let onEdit = () => Alert.alert('Edit Clicked', 'Edit Adress with ID ' + id);

  return (
    <TouchableOpacity
      style={[styles.container, styles.rowFlex, style]}
      onPress={() => onSelect()}
    >
      <RadioButton
        size={18}
        style={styles.radioButton}
        checked={isSelected}
        onPress={() => onSelect()}
      />
      <View style={{ flex: 1, paddingBottom: 12 }}>
        <View style={styles.nameText}>
          <Text style={styles.label}>{name}</Text>
          <TouchableOpacity onPress={onEdit}>
            <Text style={[styles.label, styles.textCapitalized]}>
              {t('Edit')}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.address, styles.opacity]} numberOfLines={3}>
          {address}
        </Text>
        <Text style={styles.opacity}>{phoneNumber}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  rowFlex: { flexDirection: 'row' },
  label: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.black,
  },
  textCapitalized: {
    textTransform: 'capitalize',
  },
  nameText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  address: {
    fontSize: FONT_SIZE.small,
    color: COLORS.black,
    marginVertical: 6,
  },
  opacity: {
    opacity: 0.6,
  },
  radioButton: { padding: 2, alignSelf: 'flex-start', marginTop: 12 },
});