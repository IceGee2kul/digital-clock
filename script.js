let hrs = document.getElementById("hrs");

let min = document.getElementById("min");

let sec = document.getElementById("sec")

    setInterval(() => {
        let times = new Date;
        
        hrs.innerHTML = (times.getHours()<10?"0":"") + times.getHours() ;
        
        min.innerHTML = (times.getMinutes()<10?"0":"") + times.getMinutes() ;

        sec.innerHTML = (times.getSeconds()<10?"0":"") + times.getSeconds() ;
        }, 1000);
        
        

