const dateFormatter = (date : Date,format = "date") => {
    const year = date.getFullYear()
    const month = date.getMonth() < 10
    ? `0${date.getMonth()}` 
    : date.getMonth() 
    const day = date.getDay() < 10
    ? `0${date.getDay()}` 
    : date.getDay()
    const formatDate = `${year}-${month}-${day}`
    if(format === "date"){
        return formatDate
    }
    const hours = date.getHours() < 10
    ? `0${date.getMinutes()}`
    : date.getMinutes()
    const minutes = date.getMinutes() < 10
    ? `0${date.getMinutes()}`
    : date.getMinutes()
    const seconds = date.getSeconds() < 10
    ? `0${date.getSeconds()}`
    : date.getSeconds()
    return `${formatDate} ${hours}:${minutes}:${seconds}`
}

export default dateFormatter