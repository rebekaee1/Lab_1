// tests/utils.test.js
const assert = require('assert');
const { formatQueryResult } = require('../src/utils');

describe('Utils Tests', () => {
    it('should format query result correctly', () => {
        const mockResult = {
            rowCount: 2,
            rows: [{ id: 1 }, { id: 2 }]
        };
        
        const formatted = formatQueryResult(mockResult);
        
        assert.equal(formatted.success, true);
        assert.equal(formatted.rowCount, 2);
        assert.deepEqual(formatted.rows, [{ id: 1 }, { id: 2 }]);
    });
});
