const channels = new Map()

export function eventBus(key) {
  function on(callback) {
    const callbacks = channels.get(key) || []

    channels.set(key, [...callbacks, callback])
  }

  function once(callback) {
    function _on_listen(...args) {
      const callbacks = channels.get(key) || []
      const filtedCallbacks = callbacks.filter(item => item !== _on_listen)
      channels.set(key, filtedCallbacks)

      callback(...args)
    }

    on(_on_listen)
  }

  function emit(message) {
    const callbacks = channels.get(key)

    if (callbacks)
      callbacks.map(callback => callback(message))
  }

  function close() {
    if (channels.has(key))
      channels.delete(key)
  }

  return {
    on,
    once,
    emit,
    close,
  }
}
