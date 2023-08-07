import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//Register user
export const register = async (req, res) => {
   try {
      //получаем данные которые присылыает фронтенд
      const { username, password } = req.body
      //ищем такого пользователя в бд
      const isUsed = await User.findOne({ username })
      // если такой пользователь уже есть отправляем ответ что имя занято
      if (isUsed) {
         return res.json({
            message: 'Данное имя пользователя уже занято'
         })
      }
      // если имя свободно генерируем хэш пароль
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)
      //записываем в бд юзернэйм и хэшированный пароль
      const newUser = new User({
         username,
         password: hash,
      })

      const token = jwt.sign({
         id: newUser._id,
      }, process.env.JWT_SECRET,
         { expiresIn: '30d' })


      //сохраняем
      await newUser.save()
      //отправляем ответ на фронтенд с именем пользователя и сообщением
      res.json({
         newUser,
         token,
         message: 'Регистрация прошла успешно'
      })
   } catch (error) {
      res.json({ message: 'Ошибка при создании пользователя' })
   }
}

//Login user

export const login = async (req, res) => {
   try {
      //достаем юзернейм и пассворд из req.body
      const { username, password } = req.body
      const user = await User.findOne({ username })

      if (!user) {
         return res.json({
            message: 'Такого пользователя не существует'
         })
      }
      //сравниваем пароль пришедший с фронтенда с захэшированным паролем в бд
      const isPasswordCorrect = await bcrypt.compare(password, user.password)

      if (!isPasswordCorrect) {
         return res.json({
            message: 'Неверный пароль'
         })
      }

      const token = jwt.sign({
         id: user._id
      }, process.env.JWT_SECRET,
         { expiresIn: '30d' })

      res.json({
         token, user, message: 'Вы вошли в систему'
      })
   } catch (error) {
      res.json({ message: 'Ошибка при авторизации' })
   }
}

//Get me

export const getMe = async (req, res) => {
   try {
      const user = await User.findById(req.userId)

      if (!user) {
         return res.json({
            message: 'Такого пользователя не существует'
         })
      }

      const token = jwt.sign(
         {
            id: user._id
         },
         process.env.JWT_SECRET,
         { expiresIn: '30d' }
      )
      res.json({
         user, token
      })


   } catch (error) {
      res.json({
         message: 'Нет доступа'
      })
   }
}