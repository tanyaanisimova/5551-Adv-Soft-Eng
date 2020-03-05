const fs = require('fs');

// ------------------Begin of Reusable functions ---------------------

const getCustomers = () => {
  try {                          //if file won't exist
      const customerString = fs.readFileSync('customer-data.json');
      return JSON.parse(customerString);
  } catch(e){
    return [];
  }
};

const saveCustomers = (customers) => {
  fs.writeFileSync('customer-data.json',JSON.stringify(customers));
};


// ------------------End of Reusable functions ---------------------


//  to add a new note

const create = (id, firstName, lastName, email, phone) => {
    const customers = getCustomers();
    const customer = {id, firstName, lastName, email, phone};

    const duplicateCustomers =  customers.filter((customer) => { // to check if note already exists
      return customer.id === id;
    });

    if (duplicateCustomers.length === 0){
      customers.push(customer);
      saveCustomers(customers);
      return customer
    }
  };


//to list all the notes

const listAll = () => {
    return getCustomers();
};


// // to read a note
//
// const getNote = (title) => {
//
//     const notes = getCustomers();
//
//     const getNotes =  notes.filter((note) => {  // to check if note exists and return note
//       return note.title === title;
//     });
//
//     return getNotes[0]
//
// };


const remove = (id) => {

    const customers = getCustomers();

    const filteredCustomers =  customers.filter((customer) => {
      return customer.id !== id;
    });

    saveCustomers(filteredCustomers);

    return customers.length !== filteredCustomers.length
};

const logCustomer = (customer) => {
    console.log('--');
    console.log(`ID: ${customer.id}`);
    console.log(`Name: ${customer.firstName} ${customer.lastName}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Phone Number: ${customer.phone}`);
};

// add new function names here to be accessible from other modules

module.exports = {
  create, listAll, remove, logCustomer
};
