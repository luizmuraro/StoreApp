import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import Modal from '../components/Modal'
import TestIcon from '../../assets/images/ic_alert.png'

describe('Modal component', () => {
  test('call primary button onMainPress callback', () => {
    const onMainPress = jest.fn()
    const onSecondaryPress = jest.fn()

    const { getByTestId } = render(
      <Modal
        modalVisibility={true}
        icon={TestIcon}
        title="Teste teste"
        message="Isso é um teste"
        mainButtonText="Teste botão"
        secondaryButtonText="Teste botão 2"
        onMainPress={onMainPress}
        onSecondaryPress={onSecondaryPress}
      />
    )

    fireEvent.press(getByTestId('test-primary-button'))

    expect(onMainPress).toHaveBeenCalledTimes(1)
  })

  test('call secondary button onSecondaryPress callback', () => {
    const onMainPress = jest.fn()
    const onSecondaryPress = jest.fn()

    const { getByTestId } = render(
      <Modal
        modalVisibility={true}
        icon={TestIcon}
        title="Teste teste"
        message="Isso é um teste"
        mainButtonText="Teste botão"
        secondaryButtonText="Teste botão 2"
        onMainPress={onMainPress}
        onSecondaryPress={onSecondaryPress}
      />
    )

    fireEvent.press(getByTestId('test-secondary-button'))

    expect(onSecondaryPress).toHaveBeenCalledTimes(1)
  })
})
