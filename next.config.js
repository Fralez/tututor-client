const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        backendURL: "http://localhost:3000",
      },
    };
  }

  return {
    env: {
      backendURL: "",
    },
    /* config options for all phases except development here */
  };
};
