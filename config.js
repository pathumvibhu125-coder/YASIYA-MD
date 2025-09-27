const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~FNBWSSYR#opk9JVI9l7vWLiToDeWqgJgHOPB1Ugk4nIIo2Upa5as'
};
