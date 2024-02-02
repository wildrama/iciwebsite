import multer from 'multer';
const date = new Date();
const formattedDate = date.toISOString().split('T')[0];

const paymentStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, `./src/public/paymentReceipt`)
    },
    filename: (req, file, cb) =>{
        const userData = JSON.parse(req.body.studentData);
        const fileExtension = file.originalname.split('.').pop();
        cb(null, formattedDate + '-' + userData.dni + '.' + fileExtension);
    }
});

export const uploadPayment = multer({
    storage: paymentStorage
});