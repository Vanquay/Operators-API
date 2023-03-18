const { query }  = require('./query');

const createOperators = async () => {
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

const seed = async () => {
    console.log( 'Seeding...' );

    await createOperators();

    console.log( 'Seeding Completed.' );
}

module.exports = {
    seed
}