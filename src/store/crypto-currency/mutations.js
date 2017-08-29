const cryptoCurrencyData = require('./currency-data.json')

const mutations = {
  SET_CURRENCIES(state, payload) {
    state.cryptoCurrencies = payload
  },
  SET_IMAGES (state) {
    // const { cryptoCurrency } = state
    state.cryptoCurrencies.forEach(cryptoCurrency => {
      cryptoCurrency.id = cryptoCurrency.id in cryptoCurrencyData ? cryptoCurrency.id : undefined
      cryptoCurrency.image = `${cryptoCurrency.id}_image`
      cryptoCurrency.description = cryptoCurrencyData[cryptoCurrency.id].description
      cryptoCurrency.website = cryptoCurrencyData[cryptoCurrency.id].website
      cryptoCurrency.paper = cryptoCurrencyData[cryptoCurrency.id].paper
      cryptoCurrency.github = cryptoCurrencyData[cryptoCurrency.id].github
      // cryptoCurrency.positivePercentChange = !(cryptoCurrency.percent_change_24h.indexOf('-') > -1)
      // cryptoCurrency.percentChange24h = cryptoCurrency.percent_change_24h.replace(/^-/, '')
  })      
  },

};

export default mutations;