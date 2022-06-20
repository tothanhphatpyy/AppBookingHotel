const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const HotelSchema = new Schema({

    /**
     * 0: KHÁCH SẠN
     * 1: HOMESTAY
     * 2: VILLA
     */
    type: {
        type: Number,
        default: 0
    },
    nameRoom: String,

    location : { 
        type: Schema.Types.ObjectId,
        ref : 'location'
    },
});

const Hotel = mongoose.model('hotel', HotelSchema);
module.exports = {
    Hotel
};