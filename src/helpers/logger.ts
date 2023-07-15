const debugText = document.getElementById('debug_text')

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Logger {
  static readonly shouldDebugAnimation: boolean = false
  static readonly shouldDebugInteraction: boolean = false
  static readonly isDebugging: boolean = true

  static screenDebug (message: string): void {
    if (Logger.isDebugging && debugText) debugText.textContent = message
  }

  static error (message: string): void {
    if (Logger.isDebugging) console.error(message)
  }

  static debugAnimation (message: string): void {
    if (Logger.isDebugging && Logger.shouldDebugAnimation) console.log(`Animation: ${message}`)
  }

  static debugInteraction (message: string): void {
    if (Logger.isDebugging && Logger.shouldDebugInteraction) console.log(`Interaction: ${message}`)
  }
}

export { Logger }
