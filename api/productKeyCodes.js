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
  'drywall1'
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
