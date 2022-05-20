import React from 'react'
import { ActivityIndicator } from 'react-native'

import { BRAND_GREEN } from '../../utils/colors'

const LOADER_DEFAULT_SIZE = 'large'

interface Props {
  size?: 'large' | 'small'
  color?: string
}

const Loader: React.FC<Props> = ({ size = LOADER_DEFAULT_SIZE, color = BRAND_GREEN }) => (
  <ActivityIndicator size={size} color={color} />
)

export default Loader
