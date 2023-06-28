//储存有关sessionStorage操作方法


//1.读取单个数据
export function getone(target:string):string | null{
    return  sessionStorage.getItem(target)
}
//2.保存单个数据
export function setone(target:string,value:string){
    sessionStorage.setItem(target,value);
}