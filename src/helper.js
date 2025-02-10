export { dateFormatter };

function dateFormatter(dateInstance){
    const date = new Date(dateInstance);
    const year = date.getFullYear();
    var month = date.getMonth()+1;    
    var day = date.getDate();

    if (month < 10 && day < 10){
        month = `0${month}`;
        day = `0${day}`;

        return `${year}-${month}-${day}`;

    } else if (month < 10 && day > 10){
        month = `0${month}`;

        return `${year}-${month}-${day}`;

    } else if (month > 10 && day < 10){
        day = `0${day}`;

        return `${year}-${month}-${day}`;
    } else {
        return `${year}-${month}-${day}`
    };
};