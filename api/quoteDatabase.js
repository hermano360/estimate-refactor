let listOfAvailableQuotes = [1,3,5]

let quotes = [
  {
    salesman: 'John Chavez',
    customerFirstName: 'a',
    customerLastName: 'a',
    email: 'a',
    projectDescription: 'a',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    specification: '',
    phone: '',
    fax: '',
    shoppingCart:[],
    quoteNumber: 1,
    date: 444,
    isAvailableOnDatabase: true
  },
  {
    salesman: 'Arnold Corona',
    customerFirstName: 'a',
    customerLastName: 'a',
    email: 'a',
    projectDescription: 'a',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    specification: '',
    phone: '',
    fax: '',
    shoppingCart:[],
    quoteNumber: 2,
    date: 444,
    isAvailableOnDatabase: false
  },
  {
    salesman: 'Arnold Corona',
    customerFirstName: 'b',
    customerLastName: 'b',
    email: 'b',
    projectDescription: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    specification: '',
    phone: '',
    fax: '',
    shoppingCart:[],
    quoteNumber: 3,
    date: 444,
    isAvailableOnDatabase: true
  },
  {
    salesman: 'Bob Leon',
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
    shoppingCart:[],
    quoteNumber: 4,
    date: 444,
    isAvailableOnDatabase: false
  },
  {
    salesman: '',
    customerFirstName: 'c',
    customerLastName: 'c',
    email: 'c',
    projectDescription: 'c',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    specification: '',
    phone: '',
    fax: '',
    shoppingCart:[
      {
        Description: 'Demolition of Non-Reinforced Concrete Slab Up to 4" Thick and Dumping of Debris',
        Labor: 1.75,
        Material: 0,
        SKU:"idk",
        UOM:"sqft",
        keyCode:"DMCSLB4",
        picture:"http://via.placeholder.com/350x150",
        productGroup:"Demolition",
        template:"Demolition",
        supplier:"Home Depot",
        updated:1501563875457,
        url:"http://www.google.com",
        quantity:5
      }
    ],
    quoteNumber: 5,
    date: 444,
    isAvailableOnDatabase: true
  }
]

let emptyQuote = {
  salesman: '',
  customerFirstName: 'd',
  customerLastName: 'd',
  email: 'd',
  projectDescription: 'd',
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

module.exports ={
  getNewQuoteNumber: ()=>{
    return listOfAvailableQuotes[listOfAvailableQuotes.length - 1] + 1
  },
  // Todo, return the highest number before the given quote number, or return itself
  getPreviousQuote: (currentQuote)=>{
    let availableQuoteNumber;
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
      if (quote.quoteNumber === quoteNumber && quote.isAvailableOnDatabase){
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
