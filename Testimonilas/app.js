(function () {
  const customerImage = document.querySelector("#customer-img");
  const customerName = document.querySelector("#customer-name");
  const customerText = document.querySelector("#customer-text");

  const btn = document.querySelectorAll(".btn");
  let index = 0;
  const customers = [];

  function Customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
  }

  function createCustomer(img, name, text) {
    let Img = `./img/${img}.jpg`;
    let customer = new Customer(Img, name, text);

    customers.push(customer);
  }
  createCustomer(0, "Vijay Setupati","Ad unde harum blanditiis omnis quos culpa eos dolorum dignissimos delectus. Consequatur iste accusamus ipsam aliquid est nulla odit dolores vitae delectus!");
  createCustomer(1, "John Uncle","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad unde harum blanditiis omnis quos culpa eos dolorum dignissimos delectus. Consequatur iste accusamus ipsam aliquid est nulla odit dolores vitae delectus!");
  createCustomer(2, "Amy","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad unde harum blanditiis omnis quos culpa eos Consequatur iste accusamus ipsam aliquid est nulla odit dolores vitae delectus!");
  createCustomer(3, "Maya","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad unde harum blanditiis omnis quos culpa eos dolorum dignissimos delectus. Consequatur iste accusamus ipsam aliquid est nulla odit dolores vitae delectus!");
  createCustomer(4, "Raju Kaka"," blanditiis omnis quos culpa eos dolorum dignissimos delectus. Consequatur iste accusamus ipsam aliquid est nulla odit dolores vitae delectus!");
  createCustomer(5, "Ansuhka","consectetur, adipisicing elit. Ad unde harum blanditiis omnite accusamus ipsam aliquid est nulla odit dolores vitae delectus!");

  createCustomer(6, "Siya","Lunde harum blanditiis omnis quos culpa eos dolorum dignissimos delectus iste accusamus ipsam aliquid est nulla odit dolores vitae delectus!");


  btn.forEach(function(button){
button.addEventListener('click',function(e){
    if(e.target.parentElement.classList.contains('prevBtn')){
        if(index === 0){
            index = customers.length
        }
        index--
        customerImage.src= customers[index].img
        customerName.textContent = customers[index].name
        customerText.textContent = customers[index].text
    }

    if(e.target.parentElement.classList.contains('nextBtn'))
    { index++
        if(index ===  customers.length){
            index = 0
        }
       
        customerImage.src= customers[index].img
        customerName.textContent = customers[index].name
        customerText.textContent = customers[index].text
    }
})
  })
})(); 
 