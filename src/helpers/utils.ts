function isMobile (): boolean {
  // Check if the user is usign a mobile device. https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

  // First method working on all devices.
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ]

  const isMobile = toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem)
  })

  // Seconde method. Not compatible with all devices.
  // Especially problematic for Iphone using Safari and WebView Android when the site opens up there.
  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData

  // const isMobile = navigator.userAgentData.mobile;

  return isMobile
}

function addRandomness (value: number, portion: number = 0.1): number {
  const valPortion = value * portion
  const portionToRemove = valPortion / 2

  return value - portionToRemove + valPortion * Math.random()
}

export { isMobile, addRandomness }
