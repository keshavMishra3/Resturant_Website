
document.addEventListener('DOMContentLoaded',()=>{
    let orderTrack=document.getElementById('orderTrack');
    let intervalId=setInterval(()=>{
       orderTrack.innerText=parseInt(orderTrack.innerText)+100;
       if(orderTrack.innerText>10580){
         clearInterval(intervalId)
       }
    },1)
})
document.addEventListener('DOMContentLoaded',()=>{
    let totalOrder=document.getElementById('totalOrder');
    let intervalId=setInterval(()=>{
        totalOrder.innerText=parseInt(totalOrder.innerText)+100;
       if(totalOrder.innerText>19540){
         clearInterval(intervalId)
       }
    },1)
})

document.addEventListener('DOMContentLoaded',()=>{
    let eventAttender=document.getElementById('eventAttender');
    let intervalId=setInterval(()=>{
        eventAttender.innerText=parseInt(eventAttender.innerText)+100;
       if(eventAttender.innerText>10590){
         clearInterval(intervalId)
       }
    },1)
})


document.addEventListener('DOMContentLoaded',()=>{
    let dailyTraffic=document.getElementById('dailyTraffic');
    let intervalId=setInterval(()=>{
        dailyTraffic.innerText=parseInt(dailyTraffic.innerText)+100;
       if(dailyTraffic.innerText>7000){
         clearInterval(intervalId)
       }
    },1)
})