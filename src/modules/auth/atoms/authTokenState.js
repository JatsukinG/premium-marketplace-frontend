import { atom } from 'recoil'
import { AUTH_TOKEN_KEY } from "../constants/index.js"
import { localStorageEffect } from "../../../atoms/localStorageEffect.js"


const authTokenState = atom({
  key: 'authTokenState',
  default: undefined,
  effects: [
    localStorageEffect(AUTH_TOKEN_KEY),
  ],
})

export default authTokenState