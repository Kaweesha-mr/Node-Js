const express = require("express")
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,

    updateContact,
    deleteContact
} = require("../controllers/contactController")

//todo:below are the data get from get,post,update,delete
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;