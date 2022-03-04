var {model, Schema} = require('mongoose');

var customerSchema = new Schema({
    nama: {
        type: String
    },
    alamat: {
        type: String
    },
    tanggal_lahir: {
        type: String
    },
    customer_type: {
        type: String
    },
    keterangan: {
        type: String
    },
    status: {
        type: Boolean
    }
});

const Customer = model('Customer', customerSchema);
module.exports = Customer;