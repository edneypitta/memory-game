import React from 'react'
import styled from 'styled-components'

const CharactersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 640px;
  margin: 0 auto;
`

const Character = styled.div`
  flex: 1 1 auto;
  text-align: center;
  padding: 16px;
`

export const CharacterButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin: 0 auto 10px;
  transition: .15s;
  width: 200px;
  height: 200px;
  border-radius: 10%;
  cursor: ${({ isAnimating }) => isAnimating ? 'not-allowed' : 'pointer'};

  &:hover {
    transform: scale(${({ isAnimating }) => isAnimating ? '1' : '1.02'});
  }
`

const CharacterLabel = styled.span`
  font-weight: bold;
`

const CharacterList = ({ characters = [], isAnimating, handleClick }) => {
  return (
    <CharactersWrapper>
      {characters.map(character =>
        <Character key={character.id}>
          <CharacterButton
            id={character.id}
            isAnimating={isAnimating}
            onClick={isAnimating ? undefined : handleClick}>
            <img alt={`${character.name} icon`} src={character.image} />
          </CharacterButton>
          <CharacterLabel>
            {character.name}
          </CharacterLabel>
        </Character>
      )}
    </CharactersWrapper>
  )
}

export default CharacterList
