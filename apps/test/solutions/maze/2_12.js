var testUtils = require('../../util/testUtils');
var TestResults = require('@cdo/apps/constants.js').TestResults;

module.exports = {
  app: "maze",
  levelFile: "levels",
  levelId: "2_12",
  tests: [
    {
      description: "Verify solution",
      expected: {
        result: true,
        testResult: TestResults.ALL_PASS
      },
      xml: '<xml><block type="maze_forever" x="40" y="49"><statement name="DO"><block type="maze_turn"><title name="DIR">turnRight</title><next><block type="maze_moveForward"><next><block type="maze_turn"><title name="DIR">turnLeft</title><next><block type="maze_moveForward" /></next></block></next></block></next></block></statement></block></xml>'
    }
  ]
};
