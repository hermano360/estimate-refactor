
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
      },
      {
        keyCode: 'faucet1',
        productGroup:'Bathroom',
        supplier: 'Home Depot',
        UOM: 'each',
        Description: `Darcy 8 in. Widespread 2-Handle High-Arc Bathroom Faucet in Spot Resist Brushed Nickel`,
        Material: 119,
        Labor: 50,
        SKU: 'WS84551SRN',
        updated: 1501563875457,
        picture: 'http://www.homedepot.com/catalog/productImages/1000/1e/1eeadbef-90c9-4ea1-b62d-a77517fcb727_1000.jpg',
        url: 'http://www.homedepot.com/p/MOEN-Darcy-8-in-Widespread-2-Handle-High-Arc-Bathroom-Faucet-in-Spot-Resist-Brushed-Nickel-WS84551SRN/206883359',
        template: 'Bathroom',
        quantity: 5
      },
      {
        keyCode: 'bathtub1',
        productGroup:'Bathroom',
        supplier: 'Home Depot',
        UOM: 'each',
        Description: `5.3 ft. Acrylic Reversible Drain Oval Slipper Flatbottom Non-Whirlpool Freestanding Bathtub in White`,
        Material: 699.30,
        Labor: 200,
        SKU: 'HD-BT0077',
        updated: 1501563875457,
        picture: 'http://www.homedepot.com/catalog/productImages/1000/f6/f6313151-323b-423b-bdbc-41d632a95781_1000.jpg',
        url: 'http://www.homedepot.com/p/AKDY-5-3-ft-Acrylic-Reversible-Drain-Oval-Slipper-Flatbottom-Non-Whirlpool-Freestanding-Bathtub-in-White-HD-BT0077/300794888',
        template: 'Bathroom',
        quantity: 5
      },
      {
        keyCode: 'bathdoor1',
        productGroup:'Bathroom',
        supplier: 'Home Depot',
        UOM: 'sqft',
        Description: `60 in. x 56-3/8 in. Framed Sliding Bathtub Door Kit in Silver with Pebbled Glass`,
        Material: 129,
        Labor: 50,
        SKU: 'SDKIT60-SIL-R',
        updated: 1501563875457,
        picture: "http://www.homedepot.com/catalog/productImages/1000/4b/4b1bb9df-916c-4d6d-aea2-686abae6e64d_1000.jpg",
        url: 'http://www.homedepot.com/p/60-in-x-56-3-8-in-Framed-Sliding-Bathtub-Door-Kit-in-Silver-with-Pebbled-Glass-SDKIT60-SIL-R/203906449',
        template: 'Bathroom',
        quantity: 5
      },
      {
        keyCode: 'drywall1',
        productGroup:'Bathroom',
        supplier: 'Home Depot',
        UOM: 'each',
        Description: `UltraLight 1/2 in. x 4 ft. x 8 ft. Gypsum Board`,
        Material: 10.17,
        Labor: 5,
        SKU: '14113411708',
        updated: 1501563875457,
        picture: 'http://www.homedepot.com/catalog/productImages/1000/d4/d4906be9-f236-45fd-b7cd-8b1a44308a8e_1000.jpg',
        url: 'http://www.homedepot.com/p/Sheetrock-UltraLight-1-2-in-x-4-ft-x-8-ft-Gypsum-Board-14113411708/202530243',
        template: 'Bathroom',
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
