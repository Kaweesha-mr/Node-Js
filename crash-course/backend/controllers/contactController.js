const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json({message: "get all "});
})

//@desc create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req,res) => {

    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All Fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact);
})


//@desc create new contact
//@route GET /api/contacts:id
//@access public
const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    res.status(200).json({message: `get from ${req.params.id}`});
})

//@desc update contact
//@route GET /api/contacts:id
//@access public
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate((req.params.id),req.body,{
        new:true,
        runValidators:true
    })

    res.status(200).json({message: `update contact ${req.params.id}`});
})

//@desc delete contact
//@route GET /api/contacts:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        // Change the status code to 404 and send a JSON response for consistency
        return res.status(404).json({ error: "Contact not found" });
    }

    // Contact found, proceed with deletion
    await contact.remove();
    res.status(200).json({ message: `Deleted contact ${req.params.id}` });
});





//export this because so that we can import it somewhere
module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}