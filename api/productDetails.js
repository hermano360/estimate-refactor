const productDetails={
  "DMCSLB4":{
    keyCode:"DMCSLB4",
    productGroup:'Demolition',
    supplier:'Home Depot',
    UOM:'sqft',
    Description:`Demolition of Non-Reinforced Concrete Slab Up to 4" Thick and Dumping of Debris`,
    Material:0,
    Labor:1.75,
    SKU:'idk',
    updated:1501563875457,
    picture:'http://via.placeholder.com/350x150',
    url:'http://www.google.com'
  },
  "DMDRW":{
    keyCode:"DMDRW",
    productGroup:'Demolition',
    supplier:'Harbor Freight',
    UOM:'sqft',
    Description:`Demolition of Drywall From Wood or Metal Framed Walls and Dumping of Debris`,
    Material:0,
    Labor:.65,
    SKU:'idk',
    updated:1501563875457,
    picture:'http://via.placeholder.com/350x150',
    url:'http://www.google.com'
  },
  "DMSTCO":{
    keyCode:"DMSTCO",
    productGroup:'Demolition',
    supplier:'Furguson',
    UOM:'sqft',
    Description:`Supply Labor For Demolition of Stucco And Lath From Exterior Walls and Dumping of Debris`,
    Material:0,
    Labor:1.1,
    SKU:'idk',
    updated:1501563875457,
    picture:'http://via.placeholder.com/350x150',
    url:'http://www.google.com'
  },
  "dmwdwalla":{
    keyCode:"dmwdwalla",
    productGroup:'Demolition',
    supplier:'Harbor Freight',
    UOM:'sqft',
    Description:`Demolition of Existing Wood Gramed Wall Assembly, Removal of Existing Electrical Romex Wire, Stud Walls, Sill Plate Cut All Foundation Bolts As Necessay Demolition of existing kitchen ceiling`,
    Material:0,
    Labor:2,
    SKU:'idk',
    updated:1501563875457,
    picture:'http://via.placeholder.com/350x150',
    url:'http://www.google.com'
  },
  'foot24x12':{
    keyCode:'foot24x12',
    productGroup:'Foundation/Footings',
    supplier:'N/A',
    UOM:'ft',
    Description:`Excavate and Finish a 24" x 12" Reinforced Concrete Footing With Reinforcing Steel Tied and Finished at Grade "Contractor Not Responsible For Removal of Excavated Dirt from Job Site." Includes upgrade 12" footing to 24" footing.\nFooting With Reinforcing Steel Tied and Finished at Grade. "Contractor Not Responsible For Removal of Excavated Dirt from Job Site."`,
    Material:5.14,
    Labor:6.3,
    SKU:'idk',
    updated:1501563875457,
    picture:'http://via.placeholder.com/350x150',
    url:'http://www.google.com'
  },
  'pump':{
    keyCode:'pump',
    productGroup:'Foundation/Footings',
    supplier:'Harbor Freight',
    UOM:'pump',
    Description:`Supply Labor and Equipment For A Concrete Pump To Remote Location for Pumping Of Concrete as Required`,
    Material:0,
    Labor:165,
    SKU:'idk',
    updated:1501563875457,
    picture:'http://via.placeholder.com/350x150',
    url:'http://www.google.com'
  },
  'slab3':{
    keyCode:'slab3',
    productGroup:'Foundation/Footings',
    supplier:'Home Depot',
    UOM:'sqft',
    Description:`Pour A 3" 2500 PSI Reinforced Concrete Slab on Grade With Typical Excavation, Slab Base, and Forms. "Contractor Cannot Be Responsible for Minor Cracks in Concrete During the Curing Process" "Contractor Not Responsible For Removal of Excavated Dirt from Job Site."`,
    Material:3.5,
    Labor:1,
    SKU:'idk',
    updated:1501563875457,
    picture:'http://via.placeholder.com/350x150',
    url:'http://www.google.com'
  },
  'slab51/2':{
    keyCode:'slab51/2',
    productGroup:'Foundation/Footings',
    supplier:'Home Depot',
    UOM:'sqft',
    Description:`Pour A 5 1/2" 2500 PSI Reinforced Concrete Slab on Grade With Typical Excavation, Slab Base, Wire Mesh, Forms, and Vapor Barrier. "Contractor Cannot Be Responsible for Minor Cracks in Concrete During the Curing Process" "Contractor Not Responsible For Removal of Excavated Dirt from Job Site."`,
    Material:5,
    Labor:1,
    SKU:'idk',
    updated:1501563875457,
    picture:'http://via.placeholder.com/350x150',
    url:'http://www.google.com'
  }
}


module.exports ={
  getSingleProduct: (keycode)=>{
    if(productDetails[keycode]){
      return productDetails[keycode]
    }
  },
  getBatchProducts: (keycodes)=>{
    let batch=[];
    keycodes.forEach((keycode)=>{
      if(productDetails[keycode]){
        batch.push(productDetails[keycode])
      }
    })
    return batch
  }
}
