var Customer = require('./model');

const read = async (req, res) => {
        const customer = await Customer.find();
        console.log(customer)
        res.render('home', {
            customer
        });
}

const create = async (req, res) => {
    const {nama, alamat, tanggal_lahir, customer_type, keterangan, status} = req.body;
    const newCustomer = new Customer({
        nama,
        alamat,
        tanggal_lahir,
        customer_type,
        keterangan,
        status
    });
    newCustomer.save();
    res.redirect('/');
}

const remove = async (req, res) => {
    try {
        const singleCustomer = await Customer.find({_id: req.params.id});
        if (singleCustomer) {
            Customer.remove({_id: req.params.id}, (err => res.render('error', {message:err})));
        }
        res.redirect('/');
    } catch (error) {
        res.render('error', {
            message: error
        })
    }
}

const update = async (req, res) => {
    const {nama, alamat, customer_type, tanggal_lahir, status} = req.body;
    const updateCustomer = await Customer.findOneAndUpdate({_id: req.params.id}, {
        nama,
        alamat,
        customer_type,
        tanggal_lahir,
        status
    });
    res.redirect('/');
}

module.exports = {
    read,
    create,
    remove,
    update
}