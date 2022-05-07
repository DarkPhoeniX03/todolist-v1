exports.getDate = ()=>{
    let today = new Date();
    let options = {
        day: 'numeric',
        month: 'short' ,
        weekday: 'long'
    }
    return today.toLocaleDateString('az-AZ' , options);
}