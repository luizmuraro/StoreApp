import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'

interface Props {
  text: string
  onPress: () => void
  style: {
    backgroundColor: string
  }
}

const StoreButton: React.FC<Props> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default StoreButton
