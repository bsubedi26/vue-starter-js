const helpers = {
  delayTimeout(timer) {
    return new Promise(resolve => setTimeout(resolve, timer))
  }
}

export default helpers;