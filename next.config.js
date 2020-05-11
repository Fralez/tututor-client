const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      // Access example: process.env.VAR_NAME
      env: {
        BACKEND_URL: "http://localhost:3000",
      },
    };
  }

  return {
    env: {
      BACKEND_URL: "",
    },
    /* config options for all phases except development here */
  };
};