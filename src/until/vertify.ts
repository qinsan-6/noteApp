interface Rule{
    // 数据的检测规则
    length: number;
}
interface Data{
    data:string;
}
// 代理传入的数据，并返回代理对象，每次修改数据时都会触发verti来检测数据是否正确，
// 问题：set函数不能直接返回false否则会报错
// 解决方案1：传入回调函数，当数据不符合规则时会执行回调函数这样可以增加扩展
export function vertify(data:Data,rule:Rule,callback:Function){
    function verti(newValue:string):boolean{
        if(newValue.length!=rule.length)return false;
        return true;
    }
    let pdata =new Proxy(data,{
        get(){
            return data.data
        },
        set(target, p, newValue, receiver) {
            data.data = newValue;
            if(!verti(newValue)){
                callback();
            }
            return true;
        },
    })
    return pdata; 
}

export function test(){
    let datar ={
        data:""
    }
    let message={
        msg:''
    }
    const proxy = vertify(datar,{length:10},()=>{
        // 当数据不符合规则时修改消息
        message.msg="请输入正确数据"
        console.log(message.msg)
    })
    return proxy
}