export function auth(req, res, next){
    const password = "love"
    if(req.body.password == "love"){
        next()
    }

}