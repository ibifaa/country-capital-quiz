export function logNext(req, res, next){
    console.log("method",req.method)
    console.log("url", req.url)
    console.log("date", req.date)
    console.log('request', req.body)
    next();
}