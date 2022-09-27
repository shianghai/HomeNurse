import moment from 'moment';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };



export default function DateFormater(dateString){
    const dateSplit = dateString.split("T");
    const newDateString = dateSplit[0];
    const date = moment(newDateString);

    return date;
}