const AwaitFunction=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("DATA",id);
        resolve("DATA FETCHED SUCCESSFULLY!!");
    },3000);
    });
    
};

async function CallerFunction(){
    await AwaitFunction(101);
    await AwaitFunction(102);
    await AwaitFunction(103);
    await AwaitFunction(104);
    await AwaitFunction(105);
}
