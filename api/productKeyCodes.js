let allItems = [
  'DMCSLB4',
  'DMDRW',
  'DMSTCO',
  'dmwdwalla',
  'foot24x12',
  'pump',
  'slab3',
  'slab51/2',
  'faucet1',
  'bathtub1',
  'bathdoor1',
  'drywall1',
  'faucet1',
  'faucet2',
  'faucet3',
  'faucet4',
  'fan1',
  'fan2',
  'fan3',
  'fan4',
  'light1',
  'light2',
  'light3',
  'light4'
]

module.exports = {
  Demolition: [
    'DMCSLB4',
    'DMDRW',
    'DMSTCO',
    'dmwdwalla'
  ],
  'Foundation/Footings': [
    'foot24x12',
    'pump',
    'slab3',
    'slab51/2'
  ],
  'Bathroom': [
    'faucet1',
    'bathtub1',
    'bathdoor1',
    'drywall1'
  ],

  all: () => {
    return allItems
  },
  getSample: (index) => {
    return allItems.slice(index, index + 10)
  }
}
