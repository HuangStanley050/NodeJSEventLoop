//nodeJS start
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new timer, new taks and new operations are recorded from myFile running
myFile.runContent();

function shouldContinue() {
  //check one: any pending settimeout, setinterval, setimmediate
  //check two: any pending OS tasks like server listening to ports
  //chekc three: any pending long operations lik fs module
  return pendingTimers.length || pendingOSTasks.length || pendingOperations;
}
//entire body runs in one 'tick'
while (shouldContinue()) {
  //check pending timers call callbacks
  //check pending os tasks and pending operations, call callbacks
}

//nodeJs ends
