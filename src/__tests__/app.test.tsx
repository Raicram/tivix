import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react'
import Home from '@/app/page';


describe('Homepage', () => {

    it('should renders a component',  () => {
        const rendered = render(<Home />)
        expect(rendered).toBeTruthy();
    })

    it('renders header be in the page',  () => {
        render(<Home />)
        const heading = screen.getAllByText('LEGO MINIFIGS MYSTERY BOX')[0]
        expect(heading).toBeInTheDocument()
    })

    it('should display button with text', async () => {
        render(<Home />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button.textContent).toEqual(`LET'S GO!`)
    })
})


