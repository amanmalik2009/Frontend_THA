const main=document.querySelector(".main");
const booked=document.querySelector(".booked");
const Remaining=document.querySelector(".Remaining");
var totalseats= 56;
var bookedseats=0;
for(let i=0;i<56;i++)
{
    const items=document.createElement("div")
    // items.innerHTML="<i class='fas fa-chair fa-3x'></i>";
    items.addEventListener('click',()=>{
        if(items.style.backgroundColor!="black"){
            items.style.backgroundColor="black";
            bookedseats+=1;
            totalseats-=1;
            booked.innerHTML = `${bookedseats}`;
            Remaining.innerHTML = `<b>${totalseats}</b>`;
        }
        
        else{
            items.style.background="none rgba(94, 89, 89, 0.6)";
            bookedseats-=1;
            totalseats+=1;
            booked.innerHTML = `${bookedseats}`;
            Remaining.innerHTML = `<b>${totalseats}</b>`;
        }
        
    })
    main.appendChild(items)
}