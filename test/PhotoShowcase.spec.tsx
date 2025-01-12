import {render, screen} from '@testing-library/react'
import PhotoShowcase from '../src/PhotoShowcase'
import {describe, test, expect} from 'vitest'

describe("PhotoShowcase", () => {
    test('PhotoShowcase displays Photo Showcase header text', () => {
        render(<PhotoShowcase/>)

        expect(screen.getByRole('heading')).toHaveTextContent('Photo Showcase')
    })
})