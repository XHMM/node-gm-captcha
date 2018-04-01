type picType='num'|'char'|'mix';
interface genParam{
    type:picType
    filename:string //应为相对路径,如果写成"/1.jpg"则会生成在盘符目录下
    fontSize?:number
    length?:number
    w?:number
    h?:number
}
interface metaItem{
    value:string
    offsetX:number
    offsetY:number
    rotate:number
}
interface metaData{
    type:picType
    filename:string
    w:number
    h:number
    value:string
    items:metaItem[]
    time:string
}

type genCallback= (err:Error,meta:metaData)=>void;
