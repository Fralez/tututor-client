const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      // Access example: process.env.VAR_NAME
      env: {
        BACKEND_URL: "http://localhost:3000",
        WS_URL: "ws://localhost:3000/cable"
      },
    };
  }

  return {
    env: {
      BACKEND_URL: "https://tututor-backend.herokuapp.com",
      WS_URL: "wss://tututor-backend.herokuapp.com/cable"
    },
    /* config options for all phases except development here */
  };
};