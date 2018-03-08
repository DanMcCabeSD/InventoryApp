
var db = require("./app");

// read by category
db.Item.findAll({
    where:{
        category:'#####'
    }
}).then(function(dbItem){
    console.log(dbItem);
});

//read by quantity
db.Item.findAll ({
    where: {
        quantity:'#####' 
    }
}).then(function(dbItem){
    console.log(dbItem);
});

//read by name
db.Item.findAll ({
    where: {
        name:'#####' 
    }
}).then(function(dbItem){
    console.log(dbItem);
});

// read by brand
db.Item.findAll ({
    where: {
        brand:'#####' 
    }
}).then(function(dbItem){
    console.log(dbItem);
});

db.Item.findAll ({
    
})

var jqxhr = .post('')