import axios from 'axios'

const actions = {
  getCryptoCurrencies ({ dispatch, commit }) {
    const getUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
    axios.get(getUrl).then((response) => {
      commit('SET_CURRENCIES', response.data)
      commit('SET_IMAGES')
      // dispatch('populateImages')
    })
  },
  getTotalMarketCapUSD () {
    const getUrl = 'https://api.coinmarketcap.com/v1/global/'
    axios.get(getUrl).then((response) => {
      const globalData = response.data
      this.state.totalMarketCapUSD = globalData.total_market_cap_usd
    })
  },
  populateImages({ dispatch, state, commit }) {
    state.cryptoCurrencies.forEach(currency => commit('SET_IMAGES', currency))
  },
  
}

export default actions;