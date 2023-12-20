const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);

        // Log a success message with connection details
        console.log(
            "Database Connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        // Log an error message and exit the process if connection fails
        console.error("Error connecting to the database:", err.message);
        process.exit(1);
    }
};

// Export the connectDB function for use in other modules
module.exports = connectDB;
