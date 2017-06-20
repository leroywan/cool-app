import User from '../models/User';

export default function () {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    
    const user1 = new User({
      username: 'Sam',
      email: 'somebody@email.com',
      password: '123456',
      role: 'Normal'
    })

    const user2 = new User({
      username: 'Tom',
      email: 'tom@email.com',
      password: 'lololol',
      role: 'Admin'
    })

    User.create([user1, user2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}