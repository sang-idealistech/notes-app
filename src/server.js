// require Hapi class and object routes
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

// initialization server
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: "localhost",
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    });

    // routing server
    server.route(routes);

    // run after make server
    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
};

init();
