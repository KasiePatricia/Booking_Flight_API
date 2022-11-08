const {example} = require("../models/Flight");
const {v4: uuid} = require("uuid");

// exports.example = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }

//get all flight
exports.getFlights = async(req, res) => {
    try {
        const flight = example;
        res.status(200).json({
            message: "All flights",
            flights: flight
        });
    } catch(err) {
        res.status(500).json({message: err});
    }
}

//get single flight
exports.getFlight = async(req, res) => {
    try {
        let id = req.params.id;
        const flight = example.find((flight) => flight.id === id);
        res.status(200).json({
            message: "flights found",
            flight
        });
    } catch(err) {
        res.status(500).json({message: err});
    }
}

//create new flights
exports.createFlight = async(req, res) => {
    try {
        const {title, time, price, date} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time: new Date().toLocaleTimeString(),
            price,
            date: new Date().toLocaleDateString()
        };
        
        example.push(newFlight);
        res.status(201).json({
            message: "Fight created",
            newFlight
        });
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

//update / edit flight
exports.updateFlight = async(req, res) => {
    try {
        let id = req.params.id;
        const flight = example.find((flight) => flight.id === id);
        const {title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "flights updated",
            flight,
        });
    } catch(err) {
        res.status(500).json({message: err});
    }
}

//delete flight
exports.deleteFlight = async(req, res) => {
    try {
        let id = req.params.id;
        const flight = example.find((flight) => flight.id === id);
        example.splice(example.indexOf(flight), 1);
        res.status(200).json({
            message: "flights deleted",
            flight
        });
    } catch(err) {
        res.status(500).json({message: err});
    }
}