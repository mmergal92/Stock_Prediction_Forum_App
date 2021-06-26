function calculate (stock){
    let sortedStock;
      sortedStock = Object.values(stock).sort((a, b) => new Date(b.date) - new Date(a.date))
        console.log(typeof stock)
        console.log(Object.values(stock).sort((a, b) => new Date(b.date) - new Date(a.date)))
        let prediction = 0;
        for (let i=0; i<sortedStock.length; i++){
            if (i===2)break
            let item = sortedStock[i]
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