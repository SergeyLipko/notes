import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import './models/Note';
import './models/User';
import {dataBase, port, secret} from '../config/config.js';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dataBase, function(err) {
  if(err){
    console.log('Data base connection error fack', err);
  }
});

const Note = mongoose.model('Note');
const User = mongoose.model('User');

const router = express.Router();
app.set('superSecret', secret);




router.route('/users')
  .post((req, res) => {
    const user = new User(req.body);
    user.save(err => {
      if(err){
        res.json({message: error})
      } else {
        res.json({message: 'user created !'})
      }
    })
  })
  .get((req, res) => {
    User.find((err, notes) => {
      res.json(notes);
    });
  });

router.route('/users/:user_id')
  .get((req, res) => {
    User.findById(req.params.user_id, (err, user) => {
      res.json(user);
    });
  })
  .delete((req, res) => {
    User.remove({
      _id: req.params.user_id
    }, () => {
      res.json({message: 'User deleted!'});
    })
  });


/*
 * * * Token * * *
 * */
router.route('/users/authenticate')
  .post((req, res) => {
    User.findOne({
      login: req.body.login
    }, function(err, user) {
      if (err) {
        console.log('Error in initial');
      }


      try{
        if (!user) {
          res.json({
            success: false,
            errorMessage: 'Authentication failed. User not found.'
          });
          throw 'user not found';
        } else if (user) {
          if(user.password !== req.body.password){
            res.json({
              success: false,
              errorMessage: 'Authentication failed. Wrong password.'
            });
            throw 'wrong password';
          } else {
            let token = jwt.sign(user, app.get('superSecret' ), {
              expiresIn: 1440 // expires in 24 hours
            });

            res.json({
              success: true,
              isAuthentication: true,
              userId: user._id,
              userLogin: user.login,
              token: token
            });
          }
        }
      } catch(e){
        console.log('Authentication error:', e);
      }


    });
  });



/*
 * * * * * * * * Notes routes * * * * * * *
 * */
router.route('/notes')
  .post((req, res) => {
      const note = new Note(req.body);
      note.save(err => {
        if(err){
          res.json({ message: err});
        } else {
          res.json({ message: 'note created!'});
        }
      });
  })
  .get((req, res) => {
    Note.find((err, notes) => {
      res.json(notes);
    });
  });


router.route('/notes/:note_id')
  .get((req, res) => {
    Note.findById(req.params.note_id, (err, note) => {
      res.json(note);
    });
  })
  .delete((req, res) => {
    Note.remove({
      _id: req.params.note_id
    }, () => {
      res.json({message: 'note deleted!'});
    })
  })
  .patch((req, res) => {
    Note.findById(req.params.note_id, (err, note) => {
      if (err) res.send(err);
      note.title = req.body.title;
      note.text = req.body.text;
      note.color = req.body.color;
      note.priority = req.body.priority;
      note.date = req.body.date;
      note.time = req.body.time;

      note.save(err => {
        if(err){
          res.json({ message: err});
        } else {
          res.json({ message: 'note updated!'});
        }
      });
    });
  });



app.use('/api', router);
app.listen(port, () => {
  console.log('server listening on port', port);
});
