export const http_formatter = (data : any, message : string = "ok", success: boolean = true) => {
    if(success===false && data.code === 11000){
        message = '';
        Object.keys(data.keyValue).forEach(key => {
            message += `${key} : ${data.keyValue[key]} already exists in our record.`
        })
    }
    return {data, success, message}
}