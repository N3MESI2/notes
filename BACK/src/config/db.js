import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
        
        mongoose.connect(dbURI)    
        console.log('MONGODatabase connected successfully')
        
    } catch (error) {
        console.error('Error de conexion en la dataBase:', error)
        process.exit(1);
        }
} 