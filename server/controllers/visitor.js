const Visitor = require('../models/visitor');
const requestIp = require('request-ip');
const axios = require('axios');



//= =======================================
// Visitor Routes
//= =======================================
exports.logVisitor = function (req, res, next) {

    //Internet IP Address
    var ipAddress = requestIp.getClientIp(req); 
    console.log(ipAddress);

    //Local IP Address
    var localIP = req.body.IP;
    console.log(localIP);
    
    //Getting Current Date and Time
    var currentDate =new Date().toLocaleString();
    console.log(currentDate);

    //Get IP4 Address
    var temp = ipAddress.split(":");
    var ip4Address = temp.pop();
    console.log(ip4Address);

    axios.get('http://ip-api.com/json/'+ip4Address)
    .then(response => {
        saveData(response.data);
    })
    .catch(error => {
        saveData(null);
    });

    function saveData(countryData){
        //Vistors Schema
        var newVisitor = new Visitor({
            ip_address: ip4Address,
            local_ip_address: localIP,
            countryData: countryData,
            date: currentDate
        });

        //Register New Visitor 
        newVisitor.save((err, user) => {
            console.log("Registered Visitor info!");
            if (err)
                return next(err);
            return res.status(200).json();
        });
    }
};

exports.findVisitors = function (req, res, next) {
    Visitor.find({}).exec(function(err, result) {
        if(err){
            return next(err);
        }
        console.log("Got Visitors Data from DB!");
        return res.status(200).json({"visitors": result});
    });
}
