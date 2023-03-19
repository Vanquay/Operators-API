const { query } = require("../../db/query");

const createOpportunity = async (jsonBody) => {
    const text = `
        INSERT INTO opportunities
        ( "businessName", "industry", "addressLine1", "addressLine2",
          "city", "state", "zipcode")
        VALUES ( $1, $2, $3, $4, $5, $6, $7)
    `;
    await query( text, [jsonBody.businessName, jsonBody.industry, 
                        jsonBody.addressLine1, jsonBody.addressLine2,
                        jsonBody.city, jsonBody.state, jsonBody.zipcode ]);
}

module.exports = {
    createOpportunity
}