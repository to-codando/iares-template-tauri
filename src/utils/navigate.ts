type Tnavigation = (hash: string) => void

export const navigate: Tnavigation = (hash) => {
  window.location.hash = hash
}
