const Flash = require('c:/Users/Lenovo/Desktop/Stud/ВТИП 2 сем/5 лаба/server/models/flash');

// Добавление новой записи
exports.addFlash = async (req, res) => {
    const { manufacturer, capacity, warranty, quantity } = req.body;
    const newFlash = new Flash({ manufacturer, capacity, warranty, quantity });
    await newFlash.save();
    res.status(201).json(newFlash);
};

// Получение всех производителей с гарантией меньше заданного
exports.getManufacturersWithLowWarranty = async (req, res) => {
    const { warranty } = req.query;
    const flashes = await Flash.find({ warranty: { $lt: warranty } });
    const manufacturers = flashes.map(flash => flash.manufacturer);
    res.json(manufacturers);
};

// Удаление записей с гарантией меньше заданного
exports.deleteFlashesWithLowWarranty = async (req, res) => {
    const { warranty } = req.query;
    await Flash.deleteMany({ warranty: { $lt: warranty } });
    res.status(204).send();
};