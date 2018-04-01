import gm =require('gm');
type callback= (err:Error)=>void;
function genCharPic(filename:string,cb:callback){
    gm(100,100,'white').write(filename,(err)=>{
        cb(err)
    })
}
export default genCharPic;