import {render, screen} from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import PhotoOverlay from '../src/PhotoOverlay'

describe('PhotoOverlay', () => {
    test('PhotoOverlay displays title', () => {
        render(<PhotoOverlay photoTitle={"photoTitle"}/>)

        expect(screen.getByText('photoTitle')).toBeInTheDocument()
    })
})