import { RequestHandler } from "express";
import multer from "multer";
import updatedUser from "./updated-user";
import { validateToken } from "./validate-token";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/profile')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 100000)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const _uploadImage: RequestHandler = (req, res, next) => {
    const upload = multer({ storage: storage }).single('avatar');
    upload(req, res, (e: any) => {
        if (e) {
            return next(e)
        }
        next()
    })
}
const uploadImage = [validateToken, updatedUser, _uploadImage]
export default uploadImage