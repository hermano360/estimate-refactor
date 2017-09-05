
let quotes = [
  {
    salesman: 'John Chavez',
    customerFirstName: 'John',
    customerLastName: 'Smith',
    email: 'sample@email.com',
    projectDescription: 'This is a short description of the project',
    address: '542 Bruin Boulevard',
    city: 'Westwood',
    state: 'CA',
    zipcode: '90210',
    specification: 'This is the slightly longer scope of work for the project',
    phone: '310-111-5555',
    fax: '213-111-5555',
    shoppingCart: [
      {
        Description: 'Demolition of Non-Reinforced Concrete Slab Up to 4" Thick and Dumping of Debris',
        Labor: 1.75,
        Material: 0,
        SKU: 'idk',
        UOM: 'sqft',
        keyCode: 'DMCSLB4',
        picture: 'http://via.placeholder.com/350x150',
        productGroup: 'Demolition',
        template: 'Demolition',
        supplier: 'Home Depot',
        updated: 1501563875457,
        url: 'http://www.google.com',
        quantity: 500
      },
      {
        keyCode: 'DMDRW',
        productGroup: 'Demolition',
        supplier: 'Harbor Freight',
        UOM: 'sqft',
        Description: `Demolition of Drywall From Wood or Metal Framed Walls and Dumping of Debris`,
        Material: 0,
        Labor: 0.65,
        SKU: 'idk',
        updated: 1501563875457,
        picture: 'http://via.placeholder.com/350x150',
        url: 'http://www.google.com',
        template: 'Demolition',
        quantity: 5
      },
      {
        keyCode: 'DMSTCO',
        productGroup: 'Demolition',
        supplier: 'Furguson',
        UOM: 'sqft',
        Description: `Supply Labor For Demolition of Stucco And Lath From Exterior Walls and Dumping of Debris`,
        Material: 0,
        Labor: 1.1,
        SKU: 'idk',
        updated: 1501563875457,
        picture: 'http://via.placeholder.com/350x150',
        url: 'http://www.google.com',
        template: 'Demolition',
        quantity: 5
      },
      {
        keyCode: 'foot24x12',
        productGroup: 'Foundation/Footings',
        supplier: 'N/A',
        UOM: 'ft',
        Description: `Excavate and Finish a 24" x 12" Reinforced Concrete Footing With Reinforcing Steel Tied and Finished at Grade "Contractor Not Responsible For Removal of Excavated Dirt from Job Site." Includes upgrade 12" footing to 24" footing.\nFooting With Reinforcing Steel Tied and Finished at Grade. "Contractor Not Responsible For Removal of Excavated Dirt from Job Site."`,
        Material: 5.14,
        Labor: 6.3,
        SKU: 'idk',
        updated: 1501563875457,
        picture: 'http://via.placeholder.com/350x150',
        url: 'http://www.google.com',
        quantity: 5,
        template: 'Foundation/Footings'
      }
    ],
    quoteNumber: 1,
    date: '17-Jul-17',
    isAvailableOnDatabase: true
  },
  {
    salesman: 'Bob Leon',
    customerFirstName: 'Jake',
    customerLastName: 'Brown',
    email: 'jbrown@email.com',
    projectDescription: 'This is a short description of the project',
    address: '1233 Second Street',
    city: 'Walnut',
    state: 'CA',
    zipcode: '90210',
    specification: 'This is the slightly longer scope of work for the project',
    phone: '310-111-5555',
    fax: '213-111-5555',
    shoppingCart: [
      {
        Description: 'Demolition of Non-Reinforced Concrete Slab Up to 4" Thick and Dumping of Debris',
        Labor: 1.75,
        Material: 0,
        SKU: 'idk',
        UOM: 'sqft',
        keyCode: 'DMCSLB4',
        picture: 'http://via.placeholder.com/350x150',
        productGroup: 'Demolition',
        template: 'Demolition',
        supplier: 'Home Depot',
        updated: 1501563875457,
        url: 'http://www.google.com',
        quantity: 562
      },
      {
        keyCode: 'DMDRW',
        productGroup: 'Demolition',
        supplier: 'Harbor Freight',
        UOM: 'sqft',
        Description: `Demolition of Drywall From Wood or Metal Framed Walls and Dumping of Debris`,
        Material: 0,
        Labor: 0.65,
        SKU: 'idk',
        updated: 1501563875457,
        picture: 'http://via.placeholder.com/350x150',
        url: 'http://www.google.com',
        template: 'Demolition',
        quantity: 23
      }
    ],
    quoteNumber: 2,
    date: '19-Aug-17',
    isAvailableOnDatabase: false
  },
  {
    salesman: 'John Chavez',
    customerFirstName: 'Tyler',
    customerLastName: 'Durden',
    email: 'tdurden@email.com',
    projectDescription: 'This is a short description of the project',
    address: '123 Victory Street',
    city: 'Beverly Hills',
    state: 'CA',
    zipcode: '90210',
    specification: 'This is the slightly longer scope of work for the project',
    phone: '310-111-5555',
    fax: '213-111-5555',
    shoppingCart: [
      {
        Description: 'Demolition of Non-Reinforced Concrete Slab Up to 4" Thick and Dumping of Debris',
        Labor: 1.75,
        Material: 0,
        SKU: 'idk',
        UOM: 'sqft',
        keyCode: 'DMCSLB4',
        picture: 'http://via.placeholder.com/350x150',
        productGroup: 'Demolition',
        template: 'Demolition',
        supplier: 'Home Depot',
        updated: 1501563875457,
        url: 'http://www.google.com',
        quantity: 5
      },
      {
        Description: 'Demolition of Non-Reinforced Concrete Slab Up to 4" Thick and Dumping of Debris',
        Labor: 1.75,
        Material: 0,
        SKU: 'idk',
        UOM: 'sqft',
        keyCode: 'DMCSLB4',
        picture: 'http://via.placeholder.com/350x150',
        productGroup: 'Demolition',
        template: 'Foundation/Footings',
        supplier: 'Home Depot',
        updated: 1501563875457,
        url: 'http://www.google.com',
        quantity: 5
      }
    ],
    quoteNumber: 3,
    date: '23-Jan-17',
    isAvailableOnDatabase: true
  },
  {
    salesman: 'John Chavez',
    customerFirstName: 'Owen',
    customerLastName: 'Cook',
    email: 'sample@email.com',
    projectDescription: 'This is a short description of the project',
    address: '123 Main Street',
    city: 'Diamond',
    state: 'CA',
    zipcode: '90210',
    specification: 'This is the slightly longer scope of work for the project',
    phone: '310-111-5555',
    fax: '213-111-5555',
    shoppingCart: [
      {
        Description: 'Demolition of Non-Reinforced Concrete Slab Up to 4" Thick and Dumping of Debris',
        Labor: 1.75,
        Material: 0,
        SKU: 'idk',
        UOM: 'sqft',
        keyCode: 'DMCSLB4',
        picture: 'http://via.placeholder.com/350x150',
        productGroup: 'Demolition',
        template: 'Demolition',
        supplier: 'Home Depot',
        updated: 1501563875457,
        url: 'http://www.google.com',
        quantity: 5
      },
      {
        Description: 'Demolition of Non-Reinforced Concrete Slab Up to 4" Thick and Dumping of Debris',
        Labor: 1.75,
        Material: 0,
        SKU: 'idk',
        UOM: 'sqft',
        keyCode: 'DMCSLB4',
        picture: 'http://via.placeholder.com/350x150',
        productGroup: 'Demolition',
        template: 'Foundation/Footings',
        supplier: 'Home Depot',
        updated: 1501563875457,
        url: 'http://www.google.com',
        quantity: 5
      }
    ],
    quoteNumber: 4,
    date: '23-Apr-17',
    isAvailableOnDatabase: false
  },
  {
    salesman: 'Bob Leon',
    customerFirstName: 'Owen',
    customerLastName: 'Cook',
    email: 'ocook@email.com',
    projectDescription: 'This is a short description of the project',
    address: '432 Marine Street',
    city: 'Venice',
    state: 'CA',
    zipcode: '90210',
    specification: 'This is the slightly longer scope of work for the project',
    phone: '310-111-5555',
    fax: '213-111-5555',
    shoppingCart: [
      {
        Description: 'Demolition of Non-Reinforced Concrete Slab Up to 4" Thick and Dumping of Debris',
        Labor: 1.75,
        Material: 0,
        SKU: 'idk',
        UOM: 'sqft',
        keyCode: 'DMCSLB4',
        picture: 'http://via.placeholder.com/350x150',
        productGroup: 'Demolition',
        template: 'Demolition',
        supplier: 'Home Depot',
        updated: 1501563875457,
        url: 'http://www.google.com',
        quantity: 5
      }
    ],
    quoteNumber: 5,
    date: '6-June-17',
    isAvailableOnDatabase: true
  }
]

let listOfAvailableQuotes =
  quotes
  .filter((quote) => quote.isAvailableOnDatabase)
  .map((quote) => quote.quoteNumber)

let emptyQuote = {
  salesman: '',
  customerFirstName: '',
  customerLastName: '',
  email: '',
  projectDescription: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  specification: '',
  phone: '',
  fax: '',
  quoteNumber: '',
  date: '',
  isAvailableOnDatabase: false
}

module.exports = {
  getNewQuoteNumber: () => {
    return listOfAvailableQuotes[listOfAvailableQuotes.length - 1] + 1
  },
  // Todo, return the highest number before the given quote number, or return itself
  getPreviousQuote: (currentQuote) => {
    // first query, decending, with availability in database
    for (let i = quotes.length - 1; i >= 0; i--) {
      if (quotes[i].quoteNumber < currentQuote.quoteNumber) {
        return quotes[i]
      }
      return currentQuote
    }
  },
  retrieveQuote: (quoteNumber) => {
    let quoteToReturn = emptyQuote
    quotes.forEach((quote) => {
      if (quote.quoteNumber === quoteNumber && quote.isAvailableOnDatabase) {
        quoteToReturn = quote
      }
    })
    return quoteToReturn
  },
  retrieveAvailableQuoteNumbers: () => {
    // obtained with a query getting all the quote numbers excluding the ones where isAvailableOnDatabase is false
    return quotes.filter((quote) => {
      return quote.isAvailableOnDatabase
    }).map((quote) => {
      return quote.quoteNumber
    })
  }
}
