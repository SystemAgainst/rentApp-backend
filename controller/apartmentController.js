const { ApartmentInfo, Apartment, ApartmentStatus} = require('../models');


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
            const { title, description, address, square, room_count, cost, user_id } = req.body;

            const apartmentInfo = await ApartmentInfo.create({
                title, description, address, square, room_count, cost
            });

            const apartmentStatus = await ApartmentStatus.create({});

            const apartment = await Apartment.create({
                user_id,
                apartment_info_id: apartmentInfo.id,
                apartment_status_id: apartmentStatus.id,
                rental_cost: apartmentInfo.cost,
            });

            res.status(201).json(apartment);
        } catch (error) {
            res.status(500).send({
                message: "Ошибка при создании апартамента: " + error.message
            });
        }
    };

    async getOne(req, res) {
        const { id } = req.params;
        const apartment = await Apartment.findOne({
           where: { id },
            include: [{ model: ApartmentInfo, as: 'info' }],
        });

        res.status(201).json(apartment);
    };

    async update(req, res) {};

    async delete(req, res) {};
}

module.exports = new ApartmentController();
