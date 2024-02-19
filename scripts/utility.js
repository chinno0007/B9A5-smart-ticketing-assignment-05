// console.log("object");
const allSeat = document.getElementsByClassName('seat');
// console.log(allSeat);

let count = 0;
// let count2 =8;
for(const seat of allSeat){
    seat.addEventListener('click', function(event){
        count = count+1;

        // seat number option
        const seatNumber = event.target.innerText;
        console.log(event.target);        
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

        event.target.disabled = true;
        const totalSeatCount = document.getElementById("total-seat-quantity");
        const totalSeat = totalSeatCount.innerText;
        const seatLeft = parseInt(totalSeat);

        const nowSeat = seatLeft -1;
        
        if(nowSeat<4){
            alert('You can buy only 4 seat.');
            return;
        }
        else{
            
            totalSeatCount.innerText = nowSeat;

        }
        // const convertedTotalSeatQuantity = parseInt(totalSeat);

        // // if(convertedTotalSeatQuantity-count <4){
        // //     alert("Maximum 4 Tickets can be bought by One Person");
        // //     return;
        // // }
        // // document.getElementById("total-seat-quantity").innerText = parseInt(convertedTotalSeatQuantity) - parseInt(count);
        // // // setInnerTextForRestOfTickets("total-seat-quantity", count)
        // setInnerTextForRestOfTickets(convertedTotalSeatQuantity, 8)



        // setBackgroundColorById(seatNumber);





        event.target.style.backgroundColor = "gray"
                // event.target.classList.add('disabled');




        seatCategory.appendChild(div);


        totalCost("total-price" , ticketPrice);
        // hideElementsById(event.target);

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
    // disableButton(event.target)

        grandTotalCost("grand-total" , ticketPrice);
        setInnerText("seatQuantity", count);
    });



    const submitForTickets = document.getElementById('next-submit');
    submitForTickets.addEventListener('click', function(){

        my_modal_4.showModal();

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
function setInnerTextForRestOfTickets(id, value){
  const ticketsLeft=  document.getElementById(id).innerText = value;
  ticketsLeft = value-1;

}

function disableOption(id, value){
    const makingDisable = document.getElementById('coupon-taking-option');
    makingDisable.classList.add('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


function hideElementsById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

