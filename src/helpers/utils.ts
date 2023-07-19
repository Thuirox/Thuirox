function addRandomness (value: number, portion: number = 0.1): number {
  const valPortion = value * portion
  const portionToRemove = valPortion / 2

  return value - portionToRemove + valPortion * Math.random()
}

export { addRandomness }
