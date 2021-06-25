function calculate (stock){
    let prediction = 0;
    for (let i=0; i<stock.length; i++){
        if (i===2)break
        let item = stock[i]
        if (item.changeActual>0)prediction++
      else if (item.changeActual<0)prediction--
    }
    console.log(prediction)
    if (prediction>0)
    return "Likely to Increase"
    else if (prediction<0)
    return "Likely to Decrease"
    
    return "Likely not to change"
}

export default calculate