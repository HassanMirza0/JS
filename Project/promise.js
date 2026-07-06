const promise = new Promise(function(resolve , reject ){
setTimeout(function(){
    console.log(("promise 1"))
    resolve()

},2000)
})
promise.then(function(){
    console.log("resolved");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise 2")
        resolve({Name :"hassan",rollNo:"42"})
    },2000)
}).then(function(user){
    console.log(user)
    return user.Name
}).then(function(Name){
   console.log(Name)
})

new Promise(function(resolve , reject ){
    setTimeout(function(){
        console.log("promise 3")
         
        let error = true;
        if(!error){
            resolve({UserName:"JavaScript",Demand:"High"})
        }
        else{
            reject("Error 404 Not found")
        }

    },2000)
}).then(function(user){
    console.log(user)
    return user.UserName
}).then(function(data){
          console.log(data)
}).catch(function(e){
    console.log("E",e)
})
const promise4 = new Promise(function (resolve , reject ){
    setTimeout(function(){
        console.log("promise 4")
        resolve({Name:"C++",college:"jims"})

    },2000)
})
async function consumePromise(){
      const response = await promise4
      console.log(response.college)
}
consumePromise()
//https://api.github.com/users/HassanMirza0

fetch("https://api.github.com/users/HassanMirza0")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log("METHOD 1 USING PROMISE THEN CATCH")
    console.log(data)})
    
    async function getdata(){
    const response = await fetch("https://api.github.com/users/HassanMirza0")
         const data = await response.json()
         console.log("METHOD 2 USING ASYNC AWAIT ")
         console.log(data)
}
getdata()