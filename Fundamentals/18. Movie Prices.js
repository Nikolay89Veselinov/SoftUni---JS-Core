function moviePrices(a, b) {
    let movie = a.toLowerCase();
    let day = b.toLowerCase();

    if (movie === "the godfather" && day === "monday") {
        console.log(12)   
    } else if (movie === "the godfather" && day === "tuesday") {
        console.log(10)       
    } else if (movie === "the godfather" && day === "wednesday") {
        console.log(15)       
    } else if (movie === "the godfather" && day === "thursday") {
        console.log(12.50)    
    } else if (movie === "the godfather" && day === "friday") {
        console.log(15)       
    } else if (movie === "the godfather" && day === "saturday") {
        console.log(25)       
    } else if (movie === "the godfather" && day === "sunday") {
        console.log(30)

    }
    if (movie === "schindler's list" && day === "monday") {
        console.log(8.50)
    } else if (movie === "schindler's list" && day === "tuesday") {
        console.log(8.50) 
    } else if (movie === "schindler's list" && day === "wednesday") {
        console.log(8.50) 
    } else if (movie === "schindler's list" && day === "thursday") {
        console.log(8.50) 
    } else if (movie === "schindler's list" && day === "friday") {
        console.log(8.50) 
    } else if (movie === "schindler's list" && day === "saturday") {
        console.log(15)   
    } else if (movie === "schindler's list" && day === "sunday") {
        console.log(15)

    }
    else if (movie === "casablanca" && day === "monday") {
        console.log(8)
    } else if (movie === "casablanca" && day === "tuesday") {
        console.log(8)    
    } else if (movie === "casablanca" && day === "wednesday") {
        console.log(8)    
    } else if (movie === "casablanca" && day === "thursday") {
        console.log(8)    
    } else if (movie === "casablanca" && day === "friday") {
        console.log(8)    
    } else if (movie === "casablanca" && day === "saturday") {
        console.log(10)   
    } else if (movie === "casablanca" && day === "sunday") {
        console.log(10)
                                        
    } else if (movie === "the wizard of oz" && day === "monday") {
        console.log(10)              
    } else if (movie === "the wizard of oz" && day === "tuesday") {
        console.log(10)              
    } else if (movie === "the wizard of oz" && day === "wednesday") {
        console.log(10)               
    } else if (movie === "the wizard of oz" && day === "thursday") {
        console.log(10)              
    } else if (movie === "the wizard of oz" && day === "friday") {
        console.log(10)            
    } else if (movie === "the wizard of oz" && day === "saturday") {
        console.log(15)             
    } else if (movie === "the wizard of oz" && day === "sunday") {
        console.log(15)       

    } else {
        console.log("error")
    }
}
moviePrices("tHe wizARd of oz", "suNday")