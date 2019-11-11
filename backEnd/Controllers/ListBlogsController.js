const BlogModel = require('../Models/BlogModel');


module.exports.list = () => {

    return new Promise((resolve, reject) => {
        BlogModel.find({}).select(['-blogComment']).populate({
            path: 'blogAuthor',
            select: 'first_name'
        }).exec((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
        });
    })

};
