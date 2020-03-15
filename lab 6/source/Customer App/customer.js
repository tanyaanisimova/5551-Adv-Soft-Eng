const fs = require('fs');

const getCustomers = () => {
  try {
      const customerString = fs.readFileSync('customer-data.json');
      return JSON.parse(customerString);
  } catch(e) {
    return [];
  }
};

const saveCustomers = (customers) => {
  fs.writeFileSync('customer-data.json',JSON.stringify(customers));
};

const create = (id, firstName, lastName, email, phone) => {
    const customers = getCustomers();
    const customer = {id, firstName, lastName, email, phone};

    const duplicateCustomers =  customers.filter((customer) => {
      return customer.id === id;
    });

    if (duplicateCustomers.length === 0) {
      customers.push(customer);
      saveCustomers(customers);
      return customer
    }
};

const listAll = () => {
    return getCustomers();
};

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

module.exports = {
    create, listAll, remove, logCustomer
};
