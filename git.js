function blog(){
    obj={job:"lecture", subject:"comptuer", period:"second"}
    return obj.period
    console.log(obj.job)
    console.log(obj.subject)
    
}
console.log(blog())


function Talent(){
    for(let key in obj){
        console.log(key,obj[key])
    }
}
Talent()

function great(){
    let A ={boy:'M',girl:'F',age:'int'}
    let {boy, ...rest} = A
    console.log(rest)
    console.log(A.boy)
}
great()

function duty(){
   let obj={school:'CRI', church:'st michael', place:'portharcourt', hobby:'playing games', job:'computer git',}
    let{school,church, ...lent} = obj
    console.log(lent)
}
duty()


















