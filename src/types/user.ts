//user Type to identify a user whose logged in
export type User = {
    id : string,
    displayName : string,
    email : string,
    token : string,
    imageUrl? : string
}

export type LoginCreds = {
    email : string,
    password : string
}

export type RegisterCreds = {
    email : string,
    displayName : string,
    password : string
}