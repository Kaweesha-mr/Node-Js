//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) => {
    res.status(200).json({message: "get all "});
}

//@desc create new contact
//@route POST /api/contacts
//@access public
const createContact = (req,res) => {
    res.status(201).json({message: "get all "});
}


//@desc create new contact
//@route GET /api/contacts:id
//@access public
const getContact = (req,res) => {
    res.status(200).json({message: `get from ${req.params.id}`});
}

//@desc update contact
//@route GET /api/contacts:id
//@access public
const updateContact = (req,res) => {
    res.status(200).json({message: `update contact ${req.params.id}`});
}

//@desc delete contact
//@route GET /api/contacts:id
//@access public
const deleteContact = (req,res) => {
    res.status(200).json({message: `delete contact $${req.params.id}`});
}





//export this becouse so that we can import it somewhere
module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact

}