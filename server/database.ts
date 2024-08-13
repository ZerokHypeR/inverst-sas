import { connect } from "mongoose";

export const startConnection = async () => {
    try {
        // Corrige el protocolo y el nombre del host
        const db = await connect('mongodb://localhost/mevn-database');
        console.log(`Connected to database: ${db.connection.name}`);
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};
