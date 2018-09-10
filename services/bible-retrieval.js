var axios = require('axios');

const BRUrl = 'https://api.esv.org/v3/passage/html/';
const header = {
    'Authorization': 'Token ' + process.env.Bible_Key
};
const param = {
    'q': 'John+1'
};
var returnPassage;

getBiblePassage();

async function getBiblePassage() {
    await axios.get(BRUrl, {
        headers: header,
        params: param
    }).then(function (returnedData) {
        // Deal with the returned data from returned json
        console.log(returnedData);
        returnPassage = returnedData;
    }).catch(function (error) {
        console.log(error)
    });

    console.log("this is returned Passage" + returnPassage);
    module.exports = returnPassage;
}