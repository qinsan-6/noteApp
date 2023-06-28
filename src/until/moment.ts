import  moment from 'moment';

export function onwMoment(){

    return {
        year:moment().year(),
        month:moment().month()+1,
        day:moment().day(),
        hour:moment().hour(),
        minute:moment().minute(),
    }
}
