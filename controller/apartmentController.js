const { ApartmentInfo, Apartment, ApartmentStatus} = require('../models');


class ApartmentController {
    async getAll(req, res) {
        let { user_id, payment_id, apartment_status_id, apartment_info_id } = req.query;

        let apartments;

        if (!user_id && !payment_id && !apartment_status_id && !apartment_info_id) {
            apartments = await Apartment.findAndCountAll({
                where: apartment_info_id,
                include: [{ model: ApartmentInfo, as: 'info' }],
            });
        }

        res.status(201).json(apartments);
    };

    async create(req, res) {
        try {
            let { title, description, address, square, room_count, cost, user_id } = req.body;

            const img = req.file;

            if (!img) {
                return res.status(400).send({ message: "Изображение не было загружено." });
            }

            const apartmentInfo = await ApartmentInfo.create({
                title, description, address, square, room_count, cost, img: img.filename,
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
