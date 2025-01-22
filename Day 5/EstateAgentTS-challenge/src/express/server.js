import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const port = 8080;

const seller = [{"firstName": "Stephanie ","surname": "Hill","address": "brecon Town, Brecon","postcode": "BR1 2JE","phone": "","id": "1"},{"firstName": "Jade","surname": "Song","address": "Sichuan, China","postcode": "1131321","phone": "","id": "2"},{"firstName": "Nicohola","surname": "Green","address": "Fairwater, Cardiff","postcode": "CF1 1AA","phone": "1234234","id": "3"},{"firstName": "Cookie","surname": "Cat","address": "Tesco Street","postcode": "A11 AA1","phone": "12345","id": "4"},{"firstName": "Sam","surname": "Ash","address": "Very We","postcode": "QA1 1QA","phone": "123344556","id": "5"}];
const property = [{"id": "1","address": "34 OK Place, OK Town","postcode": "OK1 1OK","type": "DETACHED","price": 100000,"bedroom": 3,"bathroom": 1,"garden": 0,"sellerId": 1,"status": "SOLD","buyerId": "1"},{"id": "2","address": "Somewhere House, Some Street, Some City","postcode": "SO1 2ME","type": "APARTMENT","price": 200000,"bedroom": 1,"bathroom": 1,"garden": 0,"sellerId": 1,"status": "SOLD","buyerId": 3},{"address": "8 Hilltop, Ebbw Vale","postcode": "EB1 2VA","type": "DETACHED","price": 99000,"bedroom": 3,"bathroom": 3,"garden": 1,"sellerId": 4,"status": "SOLD","id": "4"},{"address": "107 Fairway","postcode": "NR85HE","type": "SEMI","price": 234567,"bedrooms": 1,"bathrooms": 1,"garden": "true","sellerId": "1","status": "FORSALE","id": "o6suYCb"}];
const buyer = [{"id": "1","firstName": "Cookie","surname": "Cat","address": "42 Pen-y-lan Road, Cardiff","postcode": "CA1 8RR","phone": ""},{"id": "2","firstName": "Nilla","surname": "Cat","address": "100 Magor Road, Newport","postcode": "NP1 2LL","phone": ""},{"firstName": "Monty","surname": "Dog","address": "Very Rich Street, London","postcode": "W1","phone": "","id": "3"}];

app.get('/seller', (req, res) => {
    res.json(seller);
});

app.post('/seller', (req, res) => {
    const newSeller = req.body;
    seller.push(newSeller);
    res.status(201).json(newSeller);
});

app.post('/seller', (req, res) => {
    const newSeller = req.body;
    seller.push(newSeller);
    res.status(201).json(newSeller);
});
app.get('/property', (req, res) => {
    res.json(property);
});

app.get('/buyer', (req, res) => {
    res.json(buyer);
});

app.post('/buyer', (req, res) => {
    const newbuyer = req.body;
    seller.push(newbuyer);
    res.status(201).json(newbuyer);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});