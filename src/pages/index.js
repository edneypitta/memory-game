import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../store/game-data'
import styled from 'styled-components'
import Link from 'next/link'

const IndexPage = styled.main`
  max-width: 640px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`

const Subtitle = styled.div`
  margin-bottom: 70px;
`

const Button = styled.button`
  padding: 10px;
  background-color: #fff;
  border-color: transparent;
  color: rgb(255, 88, 108);
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;

  &:hover {
    background-color: #f2f2f2;
  }
`

export class Index extends Component {
  static async getInitialProps ({ store }) {
    await store.dispatch(fetchCharacters())
    return {}
  }

  render () {
    return (
      <IndexPage>
        <h1>Welcome to the Sequence Memory Game</h1>
        <Subtitle>Wait for the characters to be highlighted, then click on them in the same order. Good luck!</Subtitle>
        <Link href='/game'>
          <Button>Start game</Button>
        </Link>
      </IndexPage>
    )
  }
}

export default connect()(Index)
