import React from 'react' /// import bolishi shart
// import { it, expect, describe } from 'vitest'
import Greet from '../src/app/components/Greet'
import { render, screen } from '@testing-library/react'
describe('Greet', () => {
    it('it should render Hello', () => {
        render(<Greet name='Developer' />)
        // screen.debug()
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/helloiii developer/i) /// test qilinayotgan component da shunday text bormi tekshiradi...
    })
    it('it should render login when button clicked', () => {
        render(<Greet/>)
        // screen.debug()
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i) /// test qilinayotgan componentda buttonda da shunday text bormi tekshiradi...
    })
})