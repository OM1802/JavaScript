//Promise chaining to get out of Callback hell
const asyncFunction1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("FETCHED DATA1 SUCCESSFULY!!");
            resolve("FETCHING SUCCESSFULL");
        },4000);
        
    });
};

const asyncFunction2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("FETCHED DATA2 SUCCESSFULY!!");
            resolve("FETCHING SUCCESSFULL");
        },4000);
        
    });
};


asyncFunction1().then((res)=>{
    asyncFunction2().then();

});


/*const getPromise=()=>{
  return new Promise((resolve, reject)=>{
      console.log("WORK BEING DONE, WORK DONE!");
      work=true;
      if(work){
          resolve("WORK COMPLETED SUCCESSFULLY");
      }
      else{
          reject("WORK NOT COMPLETED");
      }
      
  });
};

let pr=getPromise();

pr.then((res)=>{
    console.log("WORK DONE ",res);
});

pr.catch((err)=>{
    console.log("ERROR OCCURED!");
});







function getData(dataid,nextGetData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("DATA",dataid);
        resolve("SUCCESS!");
        if(nextGetData){
            nextGetData();
        }
    },5000);
    });
};

//CALLBACK HELL
/*
getData(101,()=>{
    console.log("FETCHING DATA...");
    getData(102,()=>{
        console.log("FETCHING DATA...");
        getData(103,()=>{
            console.log("FETCHING DATA...");
            getData(104);
        });
    });
});
*/
