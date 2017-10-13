import User from '../models/User';
import Project from '../models/Project';
import cuid from 'cuid';
import funkyFruitNamer from './funkyFruitNamer'; //generates a random adjective-pronoun name


export default function () {
  User.count().exec((err, count) => {
    if (count > 3) {
      return;
    }
    
    const user1 = new User({
      email: 'supermansam@email.com',
      password: '123',
      role: 'Normal',
      userId: cuid(),
      profile: {
        firstName: funkyFruitNamer.getName(),
        lastName: '(Dummy)',
        picUrl: 'https://dl.dropboxusercontent.com/s/qkl2nrmap3sc7yp/elon.jpg?dl=0',
      }
    })

    const user2 = new User({
      email: 'batmanbob@email.com',
      password: '123',
      role: 'Normal',
      userId: cuid(),
      profile: {
        firstName: funkyFruitNamer.getName(),
        lastName: '(Dummy)',
        picUrl: 'https://dl.dropboxusercontent.com/s/qkl2nrmap3sc7yp/elon.jpg?dl=0',
      }
    })

    const user3 = new User({
      email: 'ironmanigor@email.com',
      password: '123',
      role: 'Normal',
      userId: cuid(),
      profile: {
        firstName: funkyFruitNamer.getName(),
        lastName: '(Dummy)',
        picUrl: 'https://dl.dropboxusercontent.com/s/qkl2nrmap3sc7yp/elon.jpg?dl=0',
      }
    })

    User.create([user1, user2, user3], (error) => {
      if (!error) {
        console.log('dummy users created...');
      }
    });
  });


  Project.count().exec((err, count) => {
    if (count > 2) {
      return;
    }
    
    const project1 = new Project({
      projectId: cuid(),
      admins: ['123456123413241', '1231231231231', '1234567882321'],
      info: {
        name: 'dummy'
      }
    })

    const project2 = new Project({
      projectId: cuid(),
      admins: ['1234565i91', '12312312ojn231231', '1234fal567882321'],
      info: {
        name: 'dummy2'
      }
    })

    Project.create([project1, project2], (error) => {
      if (!error) {
        console.log('dummy projects created');
      }
    });
  });

}
