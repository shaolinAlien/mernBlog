import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
   const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')


   if (token) {
      try {
         //расшифровка токена
         const decoded = jwt.verify(token, process.env.JWT_SECRET)
         //добавление дополнительного поля юзерайди в реквест боди
         req.userId = decoded.id
         
         next()
      } catch (error) {
         return res.json({
            message: 'Нет доступа'
         })
      }
   } else {
      return res.json({
         message: 'Нет доступа'
      })
   }
}