import { View, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Header = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../../Images/logo.png')}></Image>
        <Image style={styles.menu} source={require('../../Images/menu.png')}></Image>
    </View>
  )
}

export default Header