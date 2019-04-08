import React from 'react'
import { shallow } from 'enzyme'
import CharacterList, { CharacterButton } from '../../components/character-list'

describe('CharacterList', () => {
  const characters = [{ name: 'rick', id: 1 }, { name: 'morty', id: 2 }]

  it('renders without crashing', () => {
    const component = shallow(<CharacterList characters={characters} />)

    expect(component.exists()).toBe(true)
  })

  it('renders one image per character', () => {
    const component = shallow(<CharacterList characters={characters} />)

    expect(component.find('img')).toHaveLength(characters.length)
  })

  describe('button click', () => {
    it('should call function if not animating', () => {
      const mock = jest.fn()
      const component = shallow(
        <CharacterList characters={characters} isAnimating={false} handleClick={mock} />)

      component.find(CharacterButton).first().simulate('click')
      expect(mock).toHaveBeenCalled()
    })

    it('should not call function if animating', () => {
      const mock = jest.fn()
      const component = shallow(
        <CharacterList characters={characters} isAnimating handleClick={mock} />)

      component.find(CharacterButton).first().simulate('click')
      expect(mock).toHaveBeenCalledTimes(0)
    })
  })
})
