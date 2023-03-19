const { query } = require("../../db/query");

const createOpportunity = async (jsonBody) => {
    const text = `
        INSERT INTO opportunities
        ( "operatorId", "businessId", "businessName", "opTitle",
          "opDescription", "pay", "startTime", "endTime")
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8)
    `;
    await query( text, [jsonBody.operatorId, jsonBody.businessId, 
                        jsonBody.businessName, jsonBody.opTitle,
                        jsonBody.opDescription, jsonBody.pay,
                        jsonBody.startTime, jsonBody.endTime ]);
}

module.exports = {
    createOpportunity
}