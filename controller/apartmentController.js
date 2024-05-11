const { ApartmentInfo } = require('../models');


class ApartmentController {
    async getAll(req, res) {
        try {

        } catch (error) {
            res.status(500).send({
                message: "Ошибка при получении списка апартаментов: " + error.message
            });
        }
    };

    async create(req, res) {
        try {
            const { title, description, address, square, room_count } = req.body;

            const apartmentInfo = await ApartmentInfo.create({ title, description, address, square, room_count });

            res.status(201).json(apartmentInfo);
        } catch (error) {
            res.status(500).send({
                message: "Ошибка при создании апартамента: " + error.message
            });
        }
    };

    // async getOne(req, res) {};

    async update(req, res) {};

    async delete(req, res) {};
}

module.exports = new ApartmentController();
