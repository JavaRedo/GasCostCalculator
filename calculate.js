
window.onload =  (event) => {
    const form = document.querySelector(".calc");

    form.addEventListener(
    "submit",(event) => {
        event.preventDefault();
        const data = new FormData(form);
    
        let unit_chose = data.get("units");
        let gas_used = data.get("usedGas");
        let calorific_value = data.get("calVal");
        let corr_fac = data.get("corrFac");
        let cost= data.get("cost");
        const conversion_factor = 3.6;
    
        if(unit_chose === "litres"){
            gas_used = gas_used/1000;
        }
        
        let costForGas = ((gas_used*calorific_value*corr_fac)/conversion_factor)*cost;
            
        costForGas = costForGas.toFixed(2);
        
        document.getElementById("result").innerHTML = costForGas;
        },
        false);
    
};   



    