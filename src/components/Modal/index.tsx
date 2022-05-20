import React from 'react'
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageSourcePropType,
} from 'react-native'

import { GRAY_38 } from '../../utils/colors'

import styles from './styles'

export type ModalProps = {
  modalVisibility: boolean
  icon: ImageSourcePropType
  title: string
  message: string
  mainButtonText: string
  secondaryButtonText: string
  onMainPress: () => void
  onSecondaryPress: () => void
}

const ModalComponent: React.FC<ModalProps> = ({
  modalVisibility,
  icon,
  title,
  message,
  mainButtonText,
  secondaryButtonText,
  onMainPress,
  onSecondaryPress,
}) => {
  return (
    <Modal visible={modalVisibility} transparent animationType="fade">
      <StatusBar backgroundColor={GRAY_38} barStyle="light-content" />
      <View style={styles.modalBackground}>
        <View style={styles.modal}>
          <Image source={icon} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={onMainPress}
            testID="test-primary-button"
          >
            <Text style={styles.buttonText}>{mainButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={onSecondaryPress}
            testID="test-secondary-button"
          >
            <Text style={styles.buttonText}>{secondaryButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default ModalComponent
