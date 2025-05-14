const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'MOVIE-VISPER=X4B2FJga#Xun4RjKNnrUuw9o_o9FOczKDiLN7a7IjBSNjsKBTJVU' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT, 
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'movievisper' : process.env.SESSION_NAME,  

};
