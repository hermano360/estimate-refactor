let allItems = [
	"DMCSLB4",
	"DMDRW",
	"DMSTCO",
	"dmwdwalla",
	'foot24x12',
	'pump',
	'slab3',
	'slab51/2'
];

module.exports ={
	Demolition:[
		"DMCSLB4",
		"DMDRW",
		"DMSTCO",
		"dmwdwalla"
	],
	"Foundation/Footings":[
    'foot24x12',
    'pump',
    'slab3',
    'slab51/2'
	],

	all: allItems,
	getSample: (index)=>{
		return allItems.slice(index, index+10)
	}
}
