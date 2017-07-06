import User from '../models/User';
import Restaurant from '../models/Restaurant';

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

  Restaurant.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const restaurant1 = new Restaurant({
      restaurantId: '1231029i3kllasdf',
      generalInfo: {
        displayName: "Asian Legend",
        city: 'toronto',
      }
    })

    const restaurant2 = new Restaurant({
      restaurantId: 'asdflkn1232jnjfd',
      generalInfo: {
        displayName: "Happy Land",
        city: 'ottawa',
      }
    })

    const restaurant3 = new Restaurant({
      restaurantId: 'asdflkn1232jnjnds',
      generalInfo: {
        displayName: "Mario World",
        city: 'toronto',
      }
    })

    Restaurant.create([restaurant1, restaurant2, restaurant3], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });

  })
}
