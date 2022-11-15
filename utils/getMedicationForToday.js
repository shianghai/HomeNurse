async function GetMedicationForToday({medsObjectArray}){
    var minIndex

//get medications for today
    const nextMedObject = {}
    const todayMedsArray = []
    const nowTimesArray = []
    const dateTodayMillis = new Date().getMilliseconds()
    medsObjectArray.map((medObject, index)=>{
        if(medObject.startDate <= dateTodayMillis && medObject.endDate >= dateTodayMillis){
            todayMedsArray.push(medObject)
        }
        else{
            return("No med for today")
        }
    })

// check for which medication is due now
    const nowHours =  new Date().getHours()
    const nowMinutes = new Date().getMinutes()
    todayMedsArray.map((todayMedObject, todayMedIndex)=>{
       todayMedObject.times.map((time, timeIndex)=>{
            const medDate = new Date(time)
            if(nowHours <=  medDate.getHours()){
                nowTimesArray.push({minutes: medDate.getMinutes(), medObjectIndex: todayMedIndex})
            }
       })
    })


   const minMinute = nowTimesArray[0].minutes
    for(const i = 1; i< nowTimesArray.length; i++){
        
        if(nowTimesArray[i].minutes <= minMinute){
            minIndex = nowTimesArray[i].medObjectIndex
            minMinute = nowTimesArray[i].minutes
        }
        
    }

    nextMedObject = {nextTime: minMinute, medName:todayMedsArray[minIndex].medName, } 
    console.log(nextMedObject)
    return(nextMedObject)
}

export default GetMedicationForToday