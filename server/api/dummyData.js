import Posting from './models/Posting';

export default function () {
  Posting.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    
    const posting1 = new Posting({
      driverName: 'Sam',
      description: 'Driving from Toronto to Montreal pickup at this location at 5:00pm. Please be a nice person.',
      startingPoint: 'Toronto',
      destination: 'Montreal',
      carModel: 'Honda CRV',
      seatsAvailable: 4,
      petsAllowed: true
    })

    const posting2 = new Posting({
      driverName: 'Tom',
      description: 'Driving from Toronto to Ottawa pickup at this location at 5:00pm. Please be a nice person.',
      startingPoint: 'Toronto',
      destination: 'Ottawa',
      carModel: 'Honda Civic',
      seatsAvailable: 4,
      petsAllowed: true
    })

    Posting.create([posting1, posting2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}