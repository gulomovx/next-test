import React from 'react'
import { it, expect, describe } from 'vitest'
import {render, screen } from '@testing-library/react'
import Greet from '../src/app/components/Greet'


describe('Greet', () => {
    it('it should render Hello', () => {
        render(<Greet name='Developer' />)
        screen.debug()
    })
})