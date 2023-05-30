import express from "express"

const server = express()

server.use(express.static("dist"))
server.set("view engine", "ejs")
server.use("/", (req, res) => {
    res.render("index", {
        content: "EJS is cool!",
    });
} )

server.listen(8080, "127.0.0.1", () => {
    console.info(
        "Express Server is listening at http://0.0.0.0:8080"
    );
})