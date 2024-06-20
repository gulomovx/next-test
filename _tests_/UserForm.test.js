
import { render, screen } from '@testing-library/react'
import { user } from '@testing-library/user-event'
import Form from '../src/app/components/Form.tsx'
import describe from ''
test('user form', () => { 
    render(<Form />)
    const inputFileds = screen.getAllByRole('textbox')
    expect(inputFileds).toHaveLength(1)
 })