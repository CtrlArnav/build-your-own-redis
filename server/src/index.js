import net from "net";

const PORT= 6379;

const server= net.createServer((connection) => {
    console.log("New client connected!");
    connection.on("data", (data)=> {
        const input=data.toString();

        if(input.includes("PING")) {
            connection.write("+PONG\r\n");
        }
    });
    connection.on("end", ()=> {
        console.log("Client disconnected.");
    });
});

server.listen(PORT, ()=> {
    console.log(`Redis server is listening on port ${PORT}`);
});