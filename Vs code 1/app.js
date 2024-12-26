(function () {
    const customerImage=document.querySelector('#customer-img');
    const customerName=document.querySelector('#customer-name');
    const customerText=document.querySelector('#customer-text');
    const btn=document.querySelectorAll('.btn');

    let index=0;
    const customers=[];
    function Customer(img, name, text) {
        this.img=img;
        this.name=name;
        this.text=text;
    }
    function createCustomer(img, name, text) {
        let Img=`./img/${img}.jpg`;
        let customer=new Customer(Img, name, text);
        customers.push(customer);
    }
    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi adipisci soluta at saepe fuga voluptas rerum ducimus asperiores sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, dignissimos.'
 )
 createCustomer(1, 'Zoha', 'Morem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi adipisci soluta at saepe fuga voluptas rerum ducimus asperiores sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, dignissimos.'
 ) 
 createCustomer(2, 'Sydney', 'Norem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi adipisci soluta at saepe fuga voluptas rerum ducimus asperiores sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, dignissimos.'
 )
 createCustomer(3, 'Fara', 'Oorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi adipisci soluta at saepe fuga voluptas rerum ducimus asperiores sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, dignissimos.'
 )
 createCustomer(4, 'Tyrell', 'Qorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi adipisci soluta at saepe fuga voluptas rerum ducimus asperiores sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, dignissimos.'
 )
 btn.forEach(function (button) {
    button.addEventListener('click',function (e) {
        if(e.target.parentElement.classList.contains('prevBtn')){
            if(index===0){
                index=customers.length
            }
            index--;
            customerImage.src=customers[index].img;
            customerName.textContent=customers[index].name;
            customerText.textContent=customers[index].text;
        }
        if(e.target.parentElement.classList.contains('nextBtn')){
            index++;
            if(index===customers.length){
                index=0
            }
            customerImage.src=customers[index].img;
            customerName.textContent=customers[index].name;
            customerText.textContent=customers[index].text;
        }
    })
 })
})();