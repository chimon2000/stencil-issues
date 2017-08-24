import { Component } from '@stencil/core'

@Component({
    tag: 'my-first-component'
})
export class MyComponent {
    render() {
        return (
            <p>
                <slot />
            </p>
        )
    }
}
