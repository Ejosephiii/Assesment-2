///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function (acc, obj){ return acc + obj.price;}, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
 let finalNumber = cartTotal * tax - couponValue
 console.log(finalNumber)
}

calcFinalPrice(9.99, .06, 1)
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/


//A cart page would need pricing, tax, shipping/handling, checkout. Price is obvioiusly the initial price, tax and shipping is so they know how much more they're paying to receive product and get it shipped
//checkout is so the customer can confirm their purchasePrice, tax, and shipping are all number data types because all represent a type of price the customer will be paying. checkout is a string because it doesn't hold a numerical value just a word you're reading to "buy" a product


/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

customer = {
    price : 100,
    tax : 8.95,
    shipping : 30,
    checkout: "comfirm purchase"
}
