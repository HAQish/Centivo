const mongoose = require('mongoose');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Centivo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB for seeding'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Random filler data
const users = [
  {
    _id: 1,
    name: "John Doe",
    email: "johndoe@email.com",
    age: 30
  },
  {
    _id: 2,
    name: "Jane Smith",
    email: "janesmith@email.com",
    age: 25
  },
  {
    _id: 3,
    name: "Bob Johnson",
    email: "bob@email.com",
    age: 42
  },
  {
    _id: 4,
    name: "Tim Phillips",
    email: "tim@email.com",
    age: 20
  },
  {
    _id: 5,
    name: "Dill Picker",
    email: "dill@email.com",
    age: 19
  },
  {
    _id: 6,
    name: "Marsha Landford",
    email: "marsh@email.com",
    age: 31
  }
];

// Seed the database
async function seedDatabase() {
  try {
    // Insert new users
    await User.insertMany(users);
    
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();