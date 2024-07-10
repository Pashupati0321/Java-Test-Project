const sDetails = {
    name: 'P',
    age: 28,
    role: 'S/W Engineer',
    show: function() {
        const that=this
        //console.log(this)
        setTimeout(function() {            
            console.log(`Student is ${that.name}` );
         }, 2000)
    }
    
}
sDetails.show();