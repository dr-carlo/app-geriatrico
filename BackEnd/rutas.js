

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('./modelos/paciente');
const PostT = require('./modelos/tutor');

//#region metodo Get Http
router.get('/traer', (req, res, next) => {
  Post
    .find()
    .sort({ date: -1 })
    // PARA TRAER DESDE MONGO
    .select(' nombre email dni obsocial')
    .exec()
    .then(posts => {
      if (posts.length < 1) {
        return res.status(409).json({
          success: false,
          message: `ningun registro..`
        });
      } else {
        return res.status(200).json(posts);
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.get('/traer/tut', (req, res, next) => {
  PostT
    .find()
    .sort({ date: -1 })
    // PARA TRAER DESDE MONGO
    .select(' nombre telefono genero direccion fechaNac email password ')
    .exec()
    .then(posts => {
      if (posts.length < 1) {
        return res.status(409).json({
          success: false,
          message: `ningun registro..`
        });
      } else {
        return res.status(200).json(posts);
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});
//#endregion

//#region metodo Post Http
router.post('/reg/add', (req, res, next) => {
  Post
    .find({ email: req.body.email })
    .exec()
    .then(post => {
      if (post.length = 0 ) {
        return res.status(409).json({
          success: false,
          message: `Error e Email`
        });
      } else {
        Post
          .find({ username: req.body.username })
          .exec()
          .then(post => {
            if (post.length = 0) {
              return res.status(409).json({
                success: false,
                message: `Error e usuario`
              });
            } else {
              let newPost = new Post({
                _id: new mongoose.Types.ObjectId(),
                nombre: req.body.nombre,
                email: req.body.email,
                obsocial: req.body.obsocial,
                dni: req.body.dni,
              });
              return newPost
                .save()
                .then(post => {
                  return res.status(200).json({
                    success: true,
                    post: post
                  });
                })
                .catch(err => {
                  console.log('erroor')
                  return res.status(500).json(err);
                })
            }
          })
          .catch(err => {
            console.log('erroor 0')
            return res.status(500).json(err);
          })
      }
    })
    .catch(err => {
      console.log('erroor 1')
      return res.status(500).json(err);
    });
});

router.post('/reg/add/tut', (req, res, next) => {
  PostT
    .find({ email: req.body.email })
    .exec()
    .then(post => {
      if (post.length = 0 ) {
        return res.status(409).json({
          success: false,
          message: `Error e Email`
        });
      } else {
        PostT
          .find({ username: req.body.username })
          .exec()
          .then(post => {
            if (post.length = 0) {
              return res.status(409).json({
                success: false,
                message: `Error e usuario`
              });
            } else {
              let newPost = new PostT({
                _id: new mongoose.Types.ObjectId(),
                nombre: req.body.nombre,
                telefono: req.body.telefono,
                genero: req.body.genero,
                direccion: req.body.direccion,
                fechaNac: req.body.fechaNac,
                email: req.body.email,
                password: req.body.password
              });
              return newPost
                .save()
                .then(post => {
                  return res.status(200).json({
                    success: true,
                    post: post
                  });
                })
                .catch(err => {
                  console.log('erroor')
                  return res.status(500).json(err);
                })
            }
          })
          .catch(err => {
            console.log('erroor 0')
            return res.status(500).json(err);
          })
      }
    })
    .catch(err => {
      console.log('erroor 1')
      return res.status(500).json(err);
    });
});
//#endregion


//#region metodo Delete Http
router.delete('/borrar/:id', (req, res, next) => {
  let postId = req.params.id;
  Post
    .find({ _id: postId })
    .exec()
    .then(post => {
      if (post.length < 1) {
        return res.status(409).json({
          success: false,
          message: `Sin registros en base de datos`
        });
      } else {
        Post
          .deleteOne({ _id: postId })
          .exec()
          .then(post => {
            return res.status(200).json({
              success: true,
              post: post
            });
          })
          .catch(err => {
            return res.status(500).json(err);
          });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.delete('/borrar/tut/:id', (req, res, next) => {
  let postId = req.params.id;
  PostT
    .find({ _id: postId })
    .exec()
    .then(post => {
      if (post.length < 1) {
        return res.status(409).json({
          success: false,
          message: `Sin registros en base de datos`
        });
      } else {
        PostT
          .deleteOne({ _id: postId })
          .exec()
          .then(post => {
            return res.status(200).json({
              success: true,
              post: post
            });
          })
          .catch(err => {
            return res.status(500).json(err);
          });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});
//#endregion

module.exports = router;
