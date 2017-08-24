import { Component } from '@stencil/core'
import Cleave from 'cleave.js'

@Component({
    tag: 'my-first-component'
})
export class MyComponent {
    // inputRef: HTMLElement

    get inputRef() {
        return this['__el'].querySelector('input')
    }
    componentDidLoad() {
        new Cleave(this.inputRef, {
            delimiter: '-',
            blocks: [3, 2, 4]
        })
    }

    render() {
        return (
            <p>
                <slot />
            </p>
        )
    }
}
