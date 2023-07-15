abstract class DoubleLinkedList<T extends DoubleLinkedList<T>> {
  public next: T | null
  public previous: T | null

  constructor () {
    this.next = null
    this.previous = null
  }

  abstract getCurrent (): T

  setPrevious (previous: T, toSet: boolean = true): void {
    this.removePrevious()
    this.previous = previous
    if (toSet) {
      this.previous.setNext(this.getCurrent(), false)
    }
  }

  setNext (next: T, toSet: boolean = true): void {
    this.next = next
    if (toSet) {
      this.next.setPrevious(this.getCurrent(), false)
    }
  }

  removeNext (toSet: boolean = true): void {
    if (toSet && this.next != null) {
      this.next.removePrevious(false)
    }
    this.next = null
  }

  removePrevious (toSet: boolean = true): void {
    if (toSet && this.previous != null) {
      this.previous.removeNext(false)
    }
    this.previous = null
  }
}

export { DoubleLinkedList }
