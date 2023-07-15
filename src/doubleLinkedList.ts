class DoubleLinkedList<T extends DoubleLinkedList<T>> {
  public next: DoubleLinkedList<T> | null
  public previous: DoubleLinkedList<T> | null

  constructor () {
    this.next = null
    this.previous = null
  }

  setPrevious (previous: DoubleLinkedList<T>, toSet: boolean = true): void {
    this.removePrevious()
    this.previous = previous
    if (toSet) {
      this.previous.setNext(this, false)
    }
  }

  setNext (next: DoubleLinkedList<T>, toSet: boolean = true): void {
    this.next = next
    if (toSet) {
      this.next.setPrevious(this, false)
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
