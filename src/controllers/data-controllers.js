const User = require('../models/data-models');

const getData =  async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);

    }catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const createData = async (req, res) => {
    try {
        const { name, umur, jenis_kelamin } = req.body;
        const newUser = await User.create({ name, umur, jenis_kelamin });
        res.status(201).json(newUser);
    } catch (error) {
        console.error("ERROR DETAIL:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, umur, jenis_kelamin } = req.body;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.update({ name, umur, jenis_kelamin });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getData,
    createData,
    updateData,
    deleteData
};
