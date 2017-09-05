const obj = {
  values: [],
  get: function() {
    return this.values
  },
  push: function(val) {
    return this.values.push(val)
  },
}


export default obj