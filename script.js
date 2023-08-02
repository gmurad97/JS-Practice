//OBJECT REFERENCE

let auto_obj = {
    "brand": "Mercedes-Benz",
    "model": "S500",
    "price": "$125000",
};

// Create object with an existing object as prototype

/* let n = Object.create(auto_obj,{
    color:{
        writable:false, //if writable then you can change the value
        enumerable:false, // enumerable
        configurable:true, // configure
        value: "red" // object value
    },
    engine:{
        writable:false,
        configurable:false,
        enumerable:false,
        value: "4.0 v8 Engine Benzin | Hybrid"
    }
});

console.log(`${n.brand} ${n.model} ${n.engine} - x ${n.color} | ${n.price}`); */

//Adding or changing an object property

/* let def_obj = Object.defineProperty(auto_obj,"color",{
    writable:false, //if writable then you can change the value
    enumerable:false, // enumerable
    configurable:true, // configure
    value: "red" // object value
});

console.log(def_obj); */

//Adding or changing object properties

/* let def_props = Object.defineProperties(auto_obj,{
    color:{
        value: "gray",
        writable:true,
        enumerable:false,
        configurable: false
    },
    engine:{
        value: "4.0 v8 Engine | Hybrid",
        writable:true,
        enumerable:false,
        configurable: false
    }
});

console.log(def_props); */

// Accessing Properties

/* let get_own_prop_obj = Object.getOwnPropertyDescriptor(auto_obj,"brand");

console.log(get_own_prop_obj); */

// Returns all properties as an array

/* let get_own_prop_names = Object.getOwnPropertyNames(auto_obj);

console.log(get_own_prop_names); */

// Accessing the prototype

/* let proto_obj = Object.create(auto_obj);

console.log(Object.getPrototypeOf(proto_obj) == auto_obj ? true : false); */


// Returns enumerable properties as an array

/* console.log(Object.keys(auto_obj)); */