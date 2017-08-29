function delayTimeout(timer) {
  return new Promise(resolve => setTimeout(resolve, timer))
}

export {
  delayTimeout
}