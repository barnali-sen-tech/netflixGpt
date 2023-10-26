

export const checkValidData = (email,password)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(password)
    // /^(?=.\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


    if(!isEmailValid){
        return "email id is not valid"
    }
    if(!isPasswordValid){
        return "password  is not valid"
    }
    return null
}