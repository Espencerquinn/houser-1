module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');
        db.get_houses()
        .then((inventory) => {res.status(200).send(inventory)})
        .catch((err) => res.status(500).send('Error Getting All Houses'))
    },
    getCheaper: (req, res) => {
        const db = req.app.get('db');
        rent = (Number(req.params.rent))
        db.get_cheaper([rent])
        .then((inventory) => {res.status(200).send(inventory)})
        .catch((err) => res.status(500).send('Error Getting All Houses'))
    },
    addHouse: (req, res) => {
        const db = req.app.get('db');
        const {name, address, city, stateName, zipcode, image_url, monthly_mortgage, desired_rent} = req.body;
        db.create_house([name, address, city, stateName, zipcode, image_url, monthly_mortgage, desired_rent])
        .then(() => res.sendStatus(200))
        .catch((err) => res.status(500).send('Error Adding House'))
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        db.delete_house([req.params.id])
        .then((inventory) => {res.status(200).send(inventory)})
        .catch((err) => {res.status(200).send('Error Deleting House')})
    }
}