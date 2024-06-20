import React from 'react' /// import bolishi shart
import { it, expect, describe } from 'vitest'
import {render, screen } from '@testing-library/react'
import Greet from '../src/app/components/Greet'
import '@testing-library/jest-dom/vitest'

describe('Greet', () => {
    it('it should render Hello', () => {
        render(<Greet name='Developer' />)
        // screen.debug()
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/hello developer/i)
    })
})