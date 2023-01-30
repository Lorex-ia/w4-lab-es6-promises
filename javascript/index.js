// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks = > callback hell 
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          console.log("Mashed potatoes are ready!");
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => { console.log(error) });
      }, (error) => { console.log(error) });
    }, (error) => { console.log(error) });
  }, (error) => { console.log(error) });
}, (error) => { console.log(error) });


// Iteration 2 - using promises
obtainInstruction('steak',0)
      .then( (step0) => {
        document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
        return obtainInstruction('steak',0)
      })
      .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak',1)
       })
        .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak',2)
       })
        .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak',3)
       })
       .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak',4)
       })
        .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak',5)
       })
       .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    console.log("Steak is ready")
    document.querySelector("#steakImg").removeAttribute("hidden")
    
       })
       .catch((error)=>{
        console.error(error);
       }
       );


// Iteration 3 using async/await

async function makeBroccoli() {
  const step1 = await obtainInstruction("broccoli", 0)
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
  const step2 = await obtainInstruction("broccoli", 1)
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
  const step3 = await obtainInstruction("broccoli", 2)
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
  const step4 = await obtainInstruction("broccoli", 3)
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
  const step5= await obtainInstruction("broccoli", 4)
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
  const step6= await obtainInstruction("broccoli", 5)
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
  const step7= await obtainInstruction("broccoli", 6)
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>${("Broccoli are ready!")}</li>`
  document.querySelector("#broccoliImg").removeAttribute("hidden")
}
makeBroccoli();



// Bonus 2 - Promise all

const step1 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 0));
});
const step2 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 1));
});

const step3 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 2));
});

const step4 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 3));
});

const step5 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 4));
});

const step6 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 5));
});

const step7 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 6));
});

const step8 = new Promise((resolve, reject) => {
  resolve(obtainInstruction("brusselsSprouts", 7));
});



async function handlePromiseAll() {
  try {
    const values = await Promise.all([step1, step2, step3, step4, step5, step6, step7, step8]);
    values.forEach((step) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    });
            document.querySelector("#brusselsSprouts").innerHTML += `<li>${("BSs are ready!")}</li>`;
  } catch (error) {
    console.error(error);
  }
}

handlePromiseAll();





// const step1 = obtainInstruction("brusselsSprouts", 0) ;
// const step2 = obtainInstruction("brusselsSprouts", 1) ;
// const step3 = obtainInstruction("brusselsSprouts", 2) ;
// const step4 = obtainInstruction("brusselsSprouts", 3) ;
// const step5 = obtainInstruction("brusselsSprouts", 4) ;
// const step6 = obtainInstruction("brusselsSprouts", 5) ;
// const step7 = obtainInstruction("brusselsSprouts", 6) ;
// const step8 = obtainInstruction("brusselsSprouts", 7) ;

// const promisesArray = [step1, step2, step3, step4, step5, step6, step7, step8] ;

// Promise.all(promisesArray)
//   .then( (result) => {
//     result.forEach( (step) => {
//       document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
//     });
//     document.querySelector("#brusselsSprouts").innerHTML += <li>Brussels sprouts are ready!</li>
//     document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//   })
//   .catch( (error)  => console.log(error)  );