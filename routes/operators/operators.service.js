const { query } = require("../../db/query")

const getOperator = async ( operatorId ) => {
    const text = `
        SELECT id
            , "firstName"
            , "lastName"
            , "createdAt"
        FROM operators
        WHERE id = $1;
    `;
    const [ operator ] = await query( text, [ operatorId ] );
    return operator;
};


const createOperator = async ( { firstName, lastName } ) => {
    const text = `
        INSERT INTO operators
        ( "firstName", "lastName" )
        VALUES ( $1, $2 )
    `;
    await query( text, [ firstName, lastName ] );
};

const getSchedules = async (operatorId) => {
    const text = `
        SELECT 
        o.businessName, o.opTitle, o.pay,
        o.startTime, o.endTime, b.addressLine1,
        b.addressLine2, b.city, b.state, b.zip
        FROM opportunities as o
        INNER JOIN businesses as b
        ON o.businessName == b.businessName
        WHERE o.operatorId == $operatorId
    `;
    const schedule  = await query( text, [ operatorId ] );
    return schedule;
}

module.exports = {
    getOperator,
    createOperator,
    getSchedules
}