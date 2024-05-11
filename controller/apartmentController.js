const { Apartment, ApartmentInfo, ApartmentStatus, User, Passport } = require('../models');


class ApartmentController {
    async getAll(req, res) {
        try {
            const apartments = await Apartment.findAll({
                include: [
                    {
                        model: User,
                        as: 'user', // Убедитесь, что алиасы совпадают с определениями в ассоциациях
                        attributes: ['id', 'email', 'roles'],
                        include: [{
                            model: Passport,
                            as: 'passport', // Проверьте, что алиас 'passport' используется в ассоциациях
                            attributes: ['name', 'last_name', 'passport_number', 'passport_series']
                        }]
                    },
                    {
                        model: ApartmentInfo,
                        as: 'info',
                        attributes: ['address', 'square', 'room_count']
                    },
                    {
                        model: ApartmentStatus,
                        as: 'status', // Алиас для статуса
                        attributes: ['status', 'comment']
                    }
                ]
            });
            res.status(200).json(apartments);
        } catch (error) {
            res.status(500).send({
                message: "Ошибка при получении списка апартаментов: " + error.message
            });
        }
    };

    async create(req, res) {
        try {

        } catch (e) {

        }
    };

    // async getOne(req, res) {};

    async update(req, res) {};

    async delete(req, res) {};
}

module.exports = new ApartmentController();
