const express= require("express");
const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repository");

const { PORT } =    require("./config/ServerConfig");

const setupandstartserver = async () => {
    const app= express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        const repo = new CityRepository();

         repo.createCity(
            {
                name: "Mumbai"
            }
        )
        
    }
    )
}

setupandstartserver();