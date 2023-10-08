const debugText = document.getElementById('debug-text')

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Logger {
  static readonly shouldDebugAnimation: boolean = false
  static readonly shouldDebugInteraction: boolean = false
  static readonly showDebug: boolean = true
  static readonly showError: boolean = true

  static screenDebug (message: string): void {
    if (Logger.showDebug && debugText) debugText.textContent = message
  }

  static debug (message: string, context?: object): void {
    if (Logger.showDebug) console.log(message, context)
  }

  static error (message: string, context?: object): void {
    if (Logger.showError) console.error(message, context)
  }

  static debugAnimation (message: string, context?: object): void {
    if (Logger.showDebug && Logger.shouldDebugAnimation) {
      console.log(`Animation: ${message}`, context ?? '')
    }
  }

  static debugInteraction (message: string, context?: object): void {
    if (Logger.showDebug && Logger.shouldDebugInteraction) console.log(`Interaction: ${message}`, context ?? '')
  }
}

export { Logger }
