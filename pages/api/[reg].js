// pages/api/submit-form.js

import UpdateDate from '@/components/UpdateDate';
import User from '@/models/User';
import db from '@/utils/db';

/* export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Create a new instance of the Form model

      const newUser = new User({
        name,
        email,
        message,
      });

      // Save the form data to MongoDB
      await db.connect();
      await User.deleteMany();
      await newUser.save();
      res.status(200).json({ message: 'Form data saved successfully!' });
      await db.disconnect;
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Failed to save form data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
 */
// I want to use props to also be able to use this to update users, purchases and payments
const handler = async (req, res) => {
  if (req.method === 'POST' && req.query.reg === 'regUser') {
    const data = req.body;

    try {
      await db.connect();

      await User.insertMany(data);
      await db.disconnect();
      res.send({ message: 'Client Added Successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add Client' });
    }
  } else if (req.method === 'POST' && req.query.reg === 'updateDate') {
    try {
      const filter = { name: req.body.name };
      const update = { paymentDueDate: req.body.paymentDueDate };
      const options = { new: true };
      await db.connect();
      await User.findOneAndUpdate(filter, update, options);
      await db.disconnect();
      res.send({ message: 'Date updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to Update new Date' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
