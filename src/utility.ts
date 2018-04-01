export function getRanNum(length:number):string{
    let res='';
    for(let i=0;i<length;i++){
        res+=Math.floor(Math.random()*10);
    }
    return res;
}
export function getFromRange(from:number,to:number):number{
    return Math.floor(Math.random()*(to-from))+from;
}