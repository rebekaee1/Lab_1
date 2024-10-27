// src/utils.js
function formatQueryResult(result) {
    return {
        success: true,
        rowCount: result.rowCount,
        rows: result.rows
    };
}

module.exports = {
    formatQueryResult
};
