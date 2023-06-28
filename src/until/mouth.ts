
export class MouthMove{
    move:number;//移动总距离
    sensitivity:number ; //过滤阈值
    pointx:number ; //鼠标位置
    threshold:number;//过滤初始值
    constructor(sensitivity:number,pointx:number,threshold:number,move:number){
        this.sensitivity = sensitivity
        this.pointx = pointx
        this.threshold = threshold
        this.move = move
    }
}


//鼠标移动到指定元素时,改变元素种类
export function HoverChangeElmentType(el:Element|undefined,type:string) :void {
    if(el)
    el.id=type;
}

//元素随鼠标移动
export function HoverChangePosition(el:any,e:any,mouth:MouthMove){
    let sensitivity = 3

    if (mouth.threshold++ > sensitivity) { //降低灵敏度防止抖动
        mouth.threshold = 0
        //获取鼠标进入位置
        let newPointx = e.pageX

        //第一次进入时,记录鼠标位置
        if (mouth.pointx == 0) {
            mouth.pointx = newPointx
            return
        }
        //获取移动位置比例
        const movex = (newPointx - mouth.pointx) / window.innerWidth
        mouth.move = movex
        el.value.style.transform = `translate(${-10+ movex*10}px,0px)`

    } 
    return
}