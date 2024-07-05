import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideo: [],
  changeSaveVideo: () => {},
  activeBtn: 1,
  changeActiveBtn: () => {},
  inActivateBtn: () => {},
  menu: false,
  toggleMenu: () => {},
})

export default AppContext
