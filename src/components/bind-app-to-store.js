import React, { PureComponent } from 'react'
import { getOrCreateStore } from '../utils/redux-utils'

export default (ComposedComponent) => {
  return class AppWithRedux extends PureComponent {
    static async getInitialProps (appContext) {
      const store = getOrCreateStore()
      appContext.ctx.store = store

      const appProps = typeof ComposedComponent.getInitialProps === 'function'
        ? await ComposedComponent.getInitialProps(appContext)
        : {}

      return {
        ...appProps,
        initialReduxState: store.getState()
      }
    }

    constructor (props) {
      super(props)

      this.store = getOrCreateStore(props.initialReduxState)
    }

    render () {
      return <ComposedComponent {...this.props} store={this.store} />
    }
  }
}
