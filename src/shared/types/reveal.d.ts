declare module 'reveal.js' {
  interface RevealOptions {
    embedded?: boolean
    hash?: boolean
    controls?: boolean
    progress?: boolean
  }

  export default class Reveal {
    constructor(element: HTMLElement, options?: RevealOptions)
    initialize(): Promise<void>
  }
}

