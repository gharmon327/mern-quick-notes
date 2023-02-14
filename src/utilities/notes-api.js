import sendRequest from "./users-api";

export async function createNote(){
    // // pausing code to wait for response back from server
    // const res = await fetch(BASE_URL, {
    //     // I want to make a user
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(userData)
    // })
    // // if success 
    // // we get a true on res.ok if status is in the 200s
    // if (res.ok){
    //     return res.json()
    // }else{
    //     // if error throw new error
    //     throw new Error('Invalid Sign Up')
    // }
    return sendRequest(BASE_URL, 'POST', userData)
}