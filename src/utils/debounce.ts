export type Thandler = (args: Event) => void

export type Tdebounc = (callback: Thandler, delay?: number) => Thandler

export const debounce: Tdebounc = (callback, delay = 500) => {
  let timer!: NodeJS.Timeout

  return (args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(args)
    }, delay)
  }
}
