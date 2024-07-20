// scripts/createAdminUser.js
import mongoose from 'mongoose';
import UserModel from '../models/User.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await UserModel.findOne({ roles: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    const admin = new UserModel({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      roles: ['admin']
    });

    await admin.save();
    console.log('Admin user created successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error creating admin user:', error);
    mongoose.disconnect();
  }
};

createAdminUser();
