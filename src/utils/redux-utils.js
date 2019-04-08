import createStore from '../store'

const CLIENT_STORE_NAMESPACE = '__NEXT_REDUX_STORE__'

const isServer = () => typeof window === 'undefined'

export const getOrCreateStore = (initialState) => {
  if (isServer()) {
    return createStore(initialState)
  }

  if (!window[CLIENT_STORE_NAMESPACE]) {
    window[CLIENT_STORE_NAMESPACE] = createStore(initialState)
  }

  return window[CLIENT_STORE_NAMESPACE]
}
