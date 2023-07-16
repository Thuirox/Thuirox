const debugText = document.getElementById('debug_text')

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Logger {
  static readonly shouldDebugAnimation: boolean = false
  static readonly shouldDebugInteraction: boolean = false
  static readonly showDebug: boolean = true
  static readonly showError: boolean = true

  static screenDebug (message: string): void {
    if (Logger.showDebug && debugText) debugText.textContent = message
  }

  static debug (message: string): void {
    if (Logger.showDebug) console.error(message)
  }

  static error (message: string): void {
    if (Logger.showError) console.error(message)
  }

  static debugAnimation (message: string): void {
    if (Logger.showDebug && Logger.shouldDebugAnimation) console.log(`Animation: ${message}`)
  }

  static debugInteraction (message: string): void {
    if (Logger.showDebug && Logger.shouldDebugInteraction) console.log(`Interaction: ${message}`)
  }
}

export { Logger }
