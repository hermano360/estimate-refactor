const JSZip = require('jszip');
const Docxtemplater = require('docxtemplater');

const fs = require('fs');
const path = require('path');
//Load the docx file as a binary


module.exports = {
  generateWord: function(wordObject){
    var content = fs
        .readFileSync(path.resolve(__dirname, 'input.docx'), 'binary');

    var zip = new JSZip(content);

    var doc = new Docxtemplater();
    doc.loadZip(zip);
    //set the templateVariables
    doc.setData({
      grandTotal:'389.00',
      first_name:'Juan',
      last_name:"Gomez",
      customerStreetAddress:'1629 Second Street',
      scopeOfWork:'The world moves on another, all I think about is more karma. I got smarter in the knick of time.',
      city:'Duarte',
      state:'CA',
      zipcode:'91010',
      quoteNumber: '100',
      dateOfQuote: '8-Aug-2017',
      salesperson: "Juan Chavez",
      description: "The world moves on another, all I think about is more karma. I got smarter in the knick of time.",
      Company: "Pro Builders Express",
      StreetAddress: "1840 W Whittier Blvd, La Habra, CA 90631",
      phone: '866-360-1526',
      fax: '866-360-1526',
      cell: '866-360-1526',
      Date: '8-Aug-2017',
      Page: '1 of 2',
      "users" : [
        {
          "order": "",
          "description": "DEMOLITION",
          "quantity":""
        },
        {
          "order": "1",
          "description": 'Demolition of Non-Reinforced Concrete Slab Up to 4" Thick and Dumping of Debris',
          "quantity":"3 sqft"
        },
        {
          "order": "2",
          "description": "Demolition of Drywall From Wood or Metal Framed Walls and Dumping of Debris",
          "quantity":"5 sqft"
        },
        {
          "order": "3",
          "description": "Supply Labor For Demolition of Stucco And Lath From Exterior Walls and Dumping of Debris",
          "quantity":"3 sqft"
        },
        {
          "order": "4",
          "description": "Demolition of Existing Wood Gramed Wall Assembly, Removal of Existing Electrical Romex Wire, Stud Walls, Sill Plate Cut All Foundation Bolts As Necessay Demolition of existing kitchen ceiling",
          "quantity":"8 sqft"
        },
        {
          "order": "",
          "description": 'Foundation/Footings',
          "quantity":""
        },
        {
          "order": "5",
          "description": 'Excavate and Finish a 24" x 12" Reinforced Concrete Footing With Reinforcing Steel Tied and Finished at Grade "Contractor Not Responsible For Removal of Excavated Dirt from Job Site." Includes upgrade 12" footing to 24" footing. Footing With Reinforcing Steel Tied and Finished at Grade. "Contractor Not Responsible For Removal of Excavated Dirt from Job Site."',
          "quantity":"10 ft"
        },
        {
          "order": "6",
          "description": 'Supply Labor and Equipment For A Concrete Pump To Remote Location for Pumping Of Concrete as Required',
          "quantity":"2 pump"
        },
        {
          order: "8",
          description: 'Pour A 3" 2500 PSI Reinforced Concrete Slab on Grade With Typical Excavation, Slab Base, and Forms. "Contractor Cannot Be Responsible for Minor Cracks in Concrete During the Curing Process" "Contractor Not Responsible For Removal of Excavated Dirt from Job Site."',
          quantity:"5 sqft"
        },
        {
          "order": "9",
          "description": 'Pour A 5 1/2" 2500 PSI Reinforced Concrete Slab on Grade With Typical Excavation, Slab Base, Wire Mesh, Forms, and Vapor Barrier. "Contractor Cannot Be Responsible for Minor Cracks in Concrete During the Curing Process" "Contractor Not Responsible For Removal of Excavated Dirt from Job Site."',
          "quantity":"4 sqft"
        }
      ]
    });

    try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render()
    }
    catch (error) {
        var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
        }
        console.log(JSON.stringify({error: e}));
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
        throw error;
    }

    var buf = doc.getZip()
                 .generate({type: 'nodebuffer'});

    // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);

    console.log("file was written...");
  }
}
