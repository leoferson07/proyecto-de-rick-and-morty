const http = require("http");
const PORT = 3001;
const characters = require("./utils/data");
const getCharById = require("./controllers/getCharById");


http
.createServer((req, res)=> {
res.setHeader('Access-Control-Allow-Origin', '*');

if(req.url.includes("/rickandmorty/character")){
    const id = req.url.split("/").pop();
getCharById(res, id);


    // const character = characters.find(
    //     char => char.id === Number(id)
    // );
    //console.log(character);
    // if(character){
    //     return res
    //     .writeHead(200, { "Content-Type": "application/json"})
    //     .end(JSON.stringify(character));

    // }else{
    //     return res
    //     .writeHead(404, { "Content-Type": "application/json"})
    //     .end(JSON.stringify({messaje: "Character Not found"}));
    // }
}
// return res
//         .writeHead(404, { "Content-Type": "application/json"})
//         .end(JSON.stringify({messaje: "Wrong url"}));

})
.listen(PORT, "127.0.0.1",
()=> {console.log(`Server listening on port ${PORT}`)}
)