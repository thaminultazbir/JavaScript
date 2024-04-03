const takeOrder = (customer, callback) =>{
    console.log(`Order take from ${customer}`);
    callback(customer);
};

const processOrder = (customer, callback) =>{
    console.log(`Processing order for ${customer}`);

    setTimeout(()=>{
        console.log(`Cooking Complete`);
        console.log(`order Processed for ${customer}`);
        callback(customer);
    }, 3000);
};

const completeOrder = (customer) =>{
    console.log(`Completed order for ${customer}`)
};

takeOrder("Customer1", (customer)=>{
    processOrder(customer, (customer)=>{
        completeOrder(customer);
    });
});