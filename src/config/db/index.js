const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_tutorials');
        console.log('Kết nối mongodb thành công');
    } catch (error) {
        console.log('Kết nối mongodb thất bại');
    }
}

module.exports = { connect };
