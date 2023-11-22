function calculate(){
    let gas_used = document.getElementById("used_gas").value;
    let calorific_value = document.getElementById("calorific_value").value;
    let corr_fac = document.getElementById("corr_fac").value;
    let cost = document.getElementById("cost").value;
    const conversion_factor = 3.6;

    var costForGas = ((gas_used*calorific_value*corr_fac)/conversion_factor)*cost;

    costForGas = costForGas.toFixed(2);

    const answer = document.getElementById("result").value + costForGas + "";

}