// pages/api/submit-form.js
// This API handles all data update to the database
import User from '@/models/User';
import db from '@/utils/db';

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
