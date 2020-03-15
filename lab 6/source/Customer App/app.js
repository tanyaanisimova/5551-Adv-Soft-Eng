const yargs = require('yargs');
const customers = require('./customer.js');

// Configure commands

const idOptions = {
    describe: 'Customer ID',
    demand : true,
    alias : 'i'
}

const firstNameOptions = {
    describe: 'Customer first name',
    demand : true,
    alias : 'f'
}

const lastNameOptions = {
    describe: 'Customer last name',
    demand : true,
    alias : 'l'
}

const emailOptions = {
    describe: 'Customer email',
    demand : true,
    alias : 'e'
}

const phoneOptions = {
    describe: 'Customer phone number',
    demand : true,
    alias : 'p'
}

const argv =  yargs
    .command('add','Add a new customer',{
        id: idOptions,
        firstName: firstNameOptions,
        lastName: lastNameOptions,
        email: emailOptions,
        phone: phoneOptions
    })
    .command('list','List all customers')
    .command('delete','Delete customer',{
        id: idOptions,
    })
    .command('update','Update customer',{
        id: idOptions,
    })
    .help()
    .argv;


// End of configuration

const command = yargs.argv._[0];

if (command === 'add') {
    const customer = customers.create(argv.id, argv.firstName, argv.lastName, argv.email, argv.phone);
    if (customer) {
        console.log("Added Customer");
        customers.logCustomer(customer);
    } else{
      console.log("Customer already exists");
    }
}

else if (command === 'list') {
    const customerList = customers.listAll();
    if (customerList.length === 0) {
        console.log(`There are no customers.`);
    } else if (customerList.length === 1) {
        console.log(`Printing 1 customer.`);
    } else {
        console.log(`Printing ${customerList.length} customers.`);
    }
    customerList.forEach((customer)=>{
        customers.logCustomer(customer);
    });
}

else if (command === 'delete') {
    const deletedCustomer = customers.remove(argv.id);
    const message = deletedCustomer ? 'Customer was removed' : 'Customer was not found';
    console.log(message);
}

else {
    console.log('command recognized');
}
