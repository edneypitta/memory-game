import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'
import { Provider } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import bindAppToStore from '../components/bind-app-to-store'
import Logo from '../static/logo.svg'

const GlobalStyles = createGlobalStyle`
  body {
    background: url('/static/bg.png');
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  a:visited, a:link {
    color: #fff;
  }

  .scale-up {
    transform: scale(1.12)
  }
`

const LogoWrapper = styled.header`
  text-align: center;
  padding: 32px 0;

  & svg {
    cursor: pointer;
  }
`

class MyApp extends App {
  render () {
    const { Component, pageProps, store } = this.props

    return (
      <>
        <GlobalStyles />
        <LogoWrapper>
          <Link href='/'>
            <Logo />
          </Link>
        </LogoWrapper>
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </>
    )
  }
}

export default bindAppToStore(MyApp)
