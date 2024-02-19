// console.log("object");
const allSeat = document.getElementsByClassName('seat');
// console.log(allSeat);

let count = 0;
for(const seat of allSeat){
    seat.addEventListener('click', function(event){
        count = count+1;

        // seat number option
        const seatNumber = event.target.innerText;
        

        // seat cost option
        const seatCategory = document.getElementById('seat-category');
        const div = document.createElement('div');
        div.classList.add('extra-div');
        const p = document.createElement('p');
        p.innerText=seatNumber;
        const p2 = document.createElement('p');
        p2.innerText = "Economy";
        const p3 = document.createElement('p');
        let ticketPrice = 500;
        p3.innerText = ticketPrice;
        // console.log(perSeatCost);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3)
        seatCategory.appendChild(div);


        totalCost("total-price" , ticketPrice);


        function NewGrandTotalCost(){
            const totalCost = document.getElementById("total-price").innerText;
            const convertedTotalCost = parseInt(totalCost);
            const applyNewCoupon = convertedTotalCost - (convertedTotalCost*.15)
        
            setInnerText("grand-total",applyNewCoupon); 
        }
        function CoupleGrandTotalCost(){
            const totalCost = document.getElementById("total-price").innerText;
            const convertedTotalCost = parseInt(totalCost);
            const applyNewCoupon = convertedTotalCost - (convertedTotalCost*.20)
        
            setInnerText("grand-total",applyNewCoupon); 
        }



        const couponSubmitBtn = document.getElementById('coupon-btn');
        // apply coupon
        couponSubmitBtn.addEventListener('click', function(){
        const newCouponCode = document.getElementById('new-coupon-code').innerText;
        const coupleCouponCode = document.getElementById('couple-coupon-code').innerText;
        const couponId = document.getElementById('coupon-input').value;
        if(newCouponCode == couponId){
            NewGrandTotalCost("grand-total" , ticketPrice);
            disableOption();
        }
        else if(coupleCouponCode == couponId){
            CoupleGrandTotalCost("grand-total" , ticketPrice);
            disableOption();
        }
    })
        grandTotalCost("grand-total" , ticketPrice);
        setInnerText("seatQuantity", count);
    });
}


function totalCost(id, value){
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost+parseInt(value);
    setInnerText("total-price", sum);
}
function grandTotalCost(){
    const totalCost = document.getElementById("total-price").innerText;
    const convertedTotalCost = parseInt(totalCost);

    setInnerText("grand-total",convertedTotalCost); 
}



function setInnerText(id, value){
    document.getElementById(id).innerText = value;

}

function disableOption(){
    const makingDisable = document.getElementById('coupon-taking-option');
    makingDisable.classList.add('hidden');
}