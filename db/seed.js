const { query }  = require('./query');

const createOperators = async () => {
    console.log('Creating Operators table')
    await query( 
        `
            CREATE TABLE IF NOT EXISTS operators (
                id INTEGER PRIMARY KEY NOT NULL
                , "firstName" TEXT
                , "lastName" TEXT NOT NULL
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
            );
        `
    );
}
const createBusinesses = async () => {
    console.log('Creating Businesses Table');
    await query(
        `
            CREATE TABLE IF NOT EXISTS businesses (
                id INTEGER PRIMARY KEY NOT NULL,
                "businessName" TEXT NOT NULL,
                "industry" TEXT NOT NULL,
                "addressLine1" TEXT NOT NULL,
                "addressLine2" TEXT,
                "city" TEXT NOT NULL,
                "state" TEXT NOT NULL,
                "zipcode" TEXT NOT NULL, 
                "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
            );
        `
    )
}

const createOpportunities = async() => {
    console.log('Creating Opportunities Table');
    await query(
        `
            CREATE TABLE IF NOT EXISTS opportunities (
                id INTEGER PRIMARY KEY NOT NULL,
                "operatorId" INTEGER NOT NULL,
                "businessId" INTEGER NOT NULL,
                "businessName" TEXT NOT NULL,
                "opTitle" TEXT NOT NULL,
                "opDescription" TEXT NOT NULL,
                "pay" REAL NOT NULL,
                "startTime" TEXT NOT NULL,
                "endTime" TEXT NOT NULL,
                "createdAt" DATE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(operatorId) REFERENCES operators(id),
                FOREIGN KEY(businessId) REFERENCES businesses(id)
            )`
    )
}

const seed = async () => {
    console.log( 'Seeding...' );
    await createOperators();
    await createBusinesses();
    await createOpportunities();
    console.log( 'Seeding Completed.' );  
}

module.exports = {
    seed
}