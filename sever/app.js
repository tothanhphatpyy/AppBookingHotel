const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const uri               = 'mongodb://localhost:27017/BookingHotel';
const { Hotel }         = require('./database/hotel-coll');
const { Location }      = require('./database/location-coll.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));

app.get('/', (req, res) => {
    res.send("Welcome NodeJs");
})

//Thêm data location
app.post('/add-location', async (req, res) => {
    try {
        let { name, image } = req.body;
        console.log({ name, image });
        let newLocation = new Location({ name, image });
        let locationAfterSave = await newLocation.save();
        if(locationAfterSave){
            res.json({message: 'Thêm thành công', data: locationAfterSave})
        }else{
            res.json({message: 'Thêm thất bại'})
        }
    } catch (e) {
        res.json({message: 'Thêm thất bại'})
    }
})

//Lấy danh sách địa danh

//Xóa địa danh
app.get('/location/:locationID', async (req, res) => {
    let { locationID } = req.params;
    console.log({ locationID });
    let locationRemove = await Location.findByIdAndDelete({ _id: locationID });
    res.json({message: 'Xóa thành công', locationRemove: locationRemove});
})

//Thêm data hotel
app.post('/add-hotel', async (req, res) => {
    let { type, nameRoom, location } = req.body;
    console.log({ type, nameRoom, location });
    let newHotel = new Hotel({ type, nameRoom, location });
    let hotelAfterSave = await newHotel.save();
    res.json(hotelAfterSave)
})

//Lấy danh sách hotel
app.get('/list-hotel', async (req, res) => {
    let { locationID, type } = req.query;
    console.log({ locationID, type });
    let listHotel;
    
    if(locationID || type){
        listHotel = await Hotel.findOne({ location: locationID, type });
    }else{
        listHotel = await Hotel.find();
    }

    console.log({ listHotel });

    res.json(listHotel);
})

//Lấy danh sách hotel theo địa danh
app.get('/list-hotel/:locationID', async (req, res) => {
    let { locationID } = req.params;
    console.log({ locationID });
    let listHotel = await Hotel.findOne({ location: locationID });
    res.json(listHotel);
})

mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log(`mongo client connected`)
    app.listen(3000, () => console.log(`server started at port 3000`));
});