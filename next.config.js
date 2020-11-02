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
    async headers() {
      return [
        {
          // mathching all API routes
          source: "/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    },
    env: {
      BACKEND_URL: "https://tututor-backend.herokuapp.com",
      WS_URL: "wss://tututor-backend.herokuapp.com/cable"
    },
    /* config options for all phases except development here */
  };
};