import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'
import { fetchCharacters } from '../store/game-data'
import CharacterList from '../components/character-list'
import { getRandomInArray } from '../utils/random'

const GameStatus = styled.h1`
  text-align: center;  
`

const gameStates = {
  SHOWING_SEQUENCE: 'SHOWING_SEQUENCE',
  WAITING_PLAYER: 'WAITING_PLAYER',
  LOST: 'LOST'
}

const Index = ({ characters }) => {
  const [isAnimating, setIsAnimating] = useState(true)
  const [sequence, setSequence] = useState([])
  const [clickedSequence, setClickedSequence] = useState([])
  const [gameState, setGameState] = useState(gameStates.SHOWING_SEQUENCE)

  useEffect(() => {
    if (gameState !== gameStates.SHOWING_SEQUENCE) {
      return
    }

    setIsAnimating(true)

    const charactersIds = characters.map(c => c.id)
    const newSequence = [...sequence, getRandomInArray(charactersIds)]

    newSequence.map((id, index) => {
      const element = document.getElementById(id)

      setTimeout(() => {
        element.classList.add('scale-up')
        setTimeout(() => {
          element.classList.remove('scale-up')
          if (index === newSequence.length - 1) {
            setIsAnimating(false)
          }
        }, 200)
      }, (index + 1) * 1000)
    })

    setSequence(newSequence)
    setGameState(gameStates.WAITING_PLAYER)
  })

  const handleClick = event => {
    const newClickedSequence = [...clickedSequence, parseInt(event.target.id)]
    const sequencesMatch = sequence
      .slice(0, newClickedSequence.length)
      .every((id, index) => id === newClickedSequence[index])

    if (!sequencesMatch) {
      setGameState(gameStates.LOST)
      return
    }

    if (newClickedSequence.length === sequence.length) {
      setClickedSequence([])
      setGameState(gameStates.SHOWING_SEQUENCE)
    } else {
      setClickedSequence(newClickedSequence)
    }
  }

  return (
    <>
      {gameState === gameStates.LOST
        ? <GameStatus>
          You lost :( <Link href='/'><a>Try again?</a></Link>
        </GameStatus>
        : <>
          <GameStatus>
            {isAnimating ? 'Pay attention to the sequence!' : 'Your turn!'}
          </GameStatus>
          <CharacterList
            characters={characters}
            handleClick={handleClick}
            isAnimating={isAnimating} />
        </>
      }
    </>
  )
}

Index.getInitialProps = async ({ store }) => {
  if (!store.getState().gameData.characters.length) {
    await store.dispatch(fetchCharacters())
  }

  return { characters: store.getState().gameData.characters }
}

const mapStateToProps = ({ gameData }) => {
  return { characters: gameData.characters }
}

export default connect(mapStateToProps)(Index)
