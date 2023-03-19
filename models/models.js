//File that acts like typescript interfaces to describe database models

export const Business = {
    "id": Number,
    "businessName" : String,
    "industry": String,
    "addressLine1": String,
    "addressLine2": String,
    "city": String,
    "state": String,
    "zipcode": String,
    "createdAt": String
}

export const Opportunities = {
    "id": Number,
    "operatorId": Number,
    "businessId": Number,
    "businessName": String,
    "opTitle": String,
    "opDescription" : String,
    "pay": Number,
    "startTime": String,
    "endTime": String
    
}