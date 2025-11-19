const Dustbin = require('../models/Dustbin');

// Function to retrieve all dustbins
const getAllDustbins = async () => {
    try {
        const dustbins = await Dustbin.find();
        return dustbins;
    } catch (error) {
        throw new Error('Error retrieving dustbins: ' + error.message);
    }
};

// Function to retrieve a dustbin by ID
const getDustbinById = async (id) => {
    try {
        const dustbin = await Dustbin.findById(id);
        if (!dustbin) {
            throw new Error('Dustbin not found');
        }
        return dustbin;
    } catch (error) {
        throw new Error('Error retrieving dustbin: ' + error.message);
    }
};

// Function to create a new dustbin
const createDustbin = async (dustbinData) => {
    try {
        const newDustbin = new Dustbin(dustbinData);
        await newDustbin.save();
        return newDustbin;
    } catch (error) {
        throw new Error('Error creating dustbin: ' + error.message);
    }
};

// Function to update a dustbin by ID
const updateDustbin = async (id, dustbinData) => {
    try {
        const updatedDustbin = await Dustbin.findByIdAndUpdate(id, dustbinData, { new: true });
        if (!updatedDustbin) {
            throw new Error('Dustbin not found');
        }
        return updatedDustbin;
    } catch (error) {
        throw new Error('Error updating dustbin: ' + error.message);
    }
};

// Function to delete a dustbin by ID
const deleteDustbin = async (id) => {
    try {
        const deletedDustbin = await Dustbin.findByIdAndDelete(id);
        if (!deletedDustbin) {
            throw new Error('Dustbin not found');
        }
        return deletedDustbin;
    } catch (error) {
        throw new Error('Error deleting dustbin: ' + error.message);
    }
};

module.exports = {
    getAllDustbins,
    getDustbinById,
    createDustbin,
    updateDustbin,
    deleteDustbin,
};