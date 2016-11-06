// **** FreeCodeCamp Curriculum Expansion, Automated Tests ****
// Coded by Peter WEINBERG (github: @no-stack-dub-sack) 
// and Anis NOUIRA (github: @Weezlo) 
//
// This script is intended to be included as an external dependency in other Pens for testing purpose. 
//
// ////////////////// TESTED EXAMPLE PROJECTS ///////////////////
// At the moment, this script contains automated tests for the following projects:
//
// ** Random Quote Machine ** (old version by Gabriel Nunes @hezag)
//  http://codepen.io/Weezlo/pen/qaQEYm (fork of the original http://codepen.io/hezag/pen/ZGxOLX/)
//
// ** Calculator ** (new & improved version by Peter Weinberg @no-stack-dub-sack)
//  http://codepen.io/no_stack_dub_sack/pen/amaAzq
//
// ** Pomodoro Clock ** (new & improved version by Peter Weinberg @no-stack-dub-sack)
//  http://codepen.io/no_stack_dub_sack/pen/BLbXBo
//
/////////////////////// DEPENDENCIES ////////////////////////////
// For these tests to be properly integrated, the following dependencies have to be added in the Pen settings:
//
// ** Mocha ** Testing library
//  CSS: https://cdnjs.cloudflare.com/ajax/libs/mocha/3.0.2/mocha.min.css
//  JS: https://cdnjs.cloudflare.com/ajax/libs/mocha/3.0.2/mocha.min.js
//
// ** Chai ** Assertion library
//  JS: https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.min.js
//
// ** jQuery **
//  JS: https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
//
// ** THIS PEN (most important) **
//  JS: http://codepen.io/Weezlo/pen/ALmBPw


// Setup Mocha and initialize
mocha.setup("bdd");
var assert = chai.assert;
let nbPassed = 0;
let nbFailed = 0;

const requestTimeout = 3000;

// RANDOM QUOTE MACHINE TESTS
function createRandomQuoteMachineTests(){
  describe("Random Quote Machine tests", function(){
    beforeEach(function(){
    });

    after(function(){
    });

    describe("#Content", function(){
      it("should contain an element with an id of \"text\".", function(){
        assert.isNotNull(document.getElementById("text"));
      });

      it("should initially display random text in the element with id=\"text\".", function(){
        this.timeout(requestTimeout + 1000);
        return new Promise((resolve, reject) => {
                setTimeout( _ => {
                  const text = document.getElementById("text");
                  if(text.innerText.length > 0) resolve();
                  else reject("There is no initial quote displayed");
                }, requestTimeout);
              });
      });

      it("should contain a button element with and id of \"new-quote\".", function(){
        assert.isNotNull(document.getElementById("new-quote"));
      });

      it("should fetch a new quote when the new-quote button is clicked", function(done){
        this.timeout(requestTimeout + 1000);
        const prevText = document.getElementById("text").innerText;
        document.getElementById("new-quote").click();
        setTimeout( _ => {
          const newText = document.getElementById("text").innerText;
          if (newText === prevText) {
            done("The text hasn't changed after button click");
          } else {
            done();
          }
        }, requestTimeout);
      });

      it("should contain a \"tweet\" button element with and id of \"tweet-quote\".", function(){
        assert.isNotNull(document.getElementById("tweet-quote"));
      });

      it("should tweet a quote when the tweet-quote button is clicked", function(){
        this.timeout(requestTimeout + 1000);
        const href = document.getElementById("tweet-quote").href;
        assert.isOk(href.toLowerCase().indexOf("twitter") >= 0);
      });
    })
    describe("#Layout", function(){
      it("should contain a centered wrapper element with and id of \"quote-box\".", function(){
        assert.isNotNull(document.getElementById("new-quote"));
      });

      it("should center the quote-box element horizontally", function(){
        assert.isOk(testHorizontallyCentered('quote-box'));
      });
    })
  });
}

// CALCULATOR TESTS
function createCalculatorTests(){
  
  const _1 = "one";
  const _2 = "two";
  const _3 = "three";
  const _4 = "four";
  const _5 = "five";
  const _6 = "six";
  const _7 = "seven";
  const _8 = "eight";
  const _9 = "nine";
  const _0 = "zero";
  const _x = "multiply";
  const _plus = "add";
  const _min = "subtract";
  const _div = "divide";
  const _AC = "clear";
  const _eq = "equals";
  const _dec = "decimal";
  
  function getElements(elementIds){
    return elementIds.map( elementId => document.getElementById(elementId) );
  }
  
  function clickButtonsById(buttonIds){
    const keys = getElements(buttonIds);
    keys.forEach( key => key.click());
  }
  
  function clearDisplay(){
    //document.getElementById("display").innerHTML = "0";
    clickButtonsById([_AC]);
  }
  
  describe("Calculator tests", function(){
    beforeEach(function(){
      clearDisplay();
    });

    after(function(){
      clearDisplay();
    });

    describe("#Tests", function(){
      it("1. My calculator should contain a clickable element containing an = with a corresponding id=\"equals\"", function(){
        assert.isNotNull(document.getElementById(_eq));
      });

      it("2. My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id=\"zero\", id=\"one\", id=\"two\", id=\"three\", id=\"four\", id=\"five\", id=\"six\", id=\"seven\", id=\"eight\", and id=\"nine\"", function(){
        assert.isNotNull(document.getElementById(_0));
        assert.isNotNull(document.getElementById(_1));
        assert.isNotNull(document.getElementById(_2));
        assert.isNotNull(document.getElementById(_3));
        assert.isNotNull(document.getElementById(_4));
        assert.isNotNull(document.getElementById(_5));
        assert.isNotNull(document.getElementById(_6));
        assert.isNotNull(document.getElementById(_7));
        assert.isNotNull(document.getElementById(_8));
        assert.isNotNull(document.getElementById(_9));
      });

      it("3. My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id=\"add\", id=\"subtract\", id=\"multiply\", id=\"divide\"", function(){
        assert.isNotNull(document.getElementById(_plus));
        assert.isNotNull(document.getElementById(_min));
        assert.isNotNull(document.getElementById(_x));
        assert.isNotNull(document.getElementById(_div));
      });
      
      it("4. My calculator should contain a clickable element containing a . with a corresponding id=\"decimal\"", function(){
        assert.isNotNull(document.getElementById(_dec));
      });
      
      it("5. My calculator should contain a clickable element with an id=\"clear\"", function(){
        assert.isNotNull(document.getElementById(_AC));
      });
      
      it("6. My calculator should contain an element to display values with a corresponding id=\"display\"", function(){
        assert.isNotNull(document.getElementById("display"));
      });
      
      it("7. As I input numbers, I should be able to see my input in the element with the id of \"display\"", function(){
        clickButtonsById([_1, _2, _3]);
        assert.strictEqual(document.getElementById("display").innerHTML, "123");
      });
      
      it("8. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of \"display\"", function(){
        clickButtonsById([_3, _plus, _5, _x, _6, _min, _2, _div, _4, _eq]);
        assert.strictEqual(document.getElementById("display").innerHTML, "32.5");
      });
      
      it("9. When inputting numbers, my calculator should not allow a number to begin with multiple zeros.", function(){
        clickButtonsById([_0, _0, _0]);
        assert.strictEqual(document.getElementById("display").innerHTML, "0");
      });
      
      it("10. When the decimal element is clicked, a . should append to the currently displayed value. Two .s in one number should not be accepted.", function(){
        clickButtonsById([_5, _dec, _dec, _0]);
        assert.strictEqual(document.getElementById("display").innerHTML, "5.0");
        clearDisplay();
        clickButtonsById([_5, _dec, _5, _dec, _5]);
        assert.strictEqual(document.getElementById("display").innerHTML, "5.55");
      });
      
      it("11. I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.", function(){
        clickButtonsById([_1, _0, _dec, _5, _min, _5, _dec, _5, _eq]);
        assert.strictEqual(document.getElementById("display").innerHTML, "5");
        clearDisplay();
        clickButtonsById([_5, _x, _5, _dec, _5, _eq]);
        assert.strictEqual(document.getElementById("display").innerHTML, "27.5");
        clearDisplay();
        clickButtonsById([_1, _0, _dec, _5, _plus, _5, _dec, _5, _eq]);
        assert.strictEqual(document.getElementById("display").innerHTML, "16");
        clearDisplay();
        clickButtonsById([_1, _0, _div, _2, _dec, _5, _eq]);
        assert.strictEqual(document.getElementById("display").innerHTML, "4");
      });
      
      it("12. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.", function(){
        clickButtonsById([_5, _x, _min, _plus, _5, _eq]);
        assert.strictEqual(document.getElementById("display").innerHTML, "10");
        clearDisplay();
        clickButtonsById([_5, _plus, _plus, _5, _eq]);
        assert.strictEqual(document.getElementById("display").innerHTML, "10");
      });
      
      it("13. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state. 0 should be shown in the element with the id of \"display\".", function(){
        clickButtonsById([_5, _x, _1, _plus, _5, _plus, _9, _2, _eq, _AC]);
        assert.strictEqual(document.getElementById("display").innerHTML, "0");
      });
      
      it("14. Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.", function(){
        clickButtonsById([_5, _min, _2, _eq, _div, _2, _eq]);
        assert.strictEqual(document.getElementById("display").innerHTML, "1.5");
        clearDisplay();
        clickButtonsById([_5, _plus, _5, _eq, _plus, _3, _eq]);
        assert.strictEqual(document.getElementById("display").innerHTML, "13");
      });
      
      it("15. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).", function(){
        clickButtonsById([_2, _div, _7, _eq]);
        assert.isOk(/0?\.2857\d*/.test(document.getElementById("display").innerHTML));
      });
    });
  });
}

// POMODORDO TESTS:
function createPomodoroClockTests(){
  
  const _break_min = "break-decrement";
  const _break_plus = "break-increment";
  const _sesh_min = "session-decrement";
  const _sesh_plus = "session-increment";
  const _reset = "reset";
  const _start_stop = "start_stop";
  
  function getElements(elementIds){
    return elementIds.map( elementId => document.getElementById(elementId) );
  }
  
  function clickButtonsById(buttonIds){
    const keys = getElements(buttonIds);
    keys.forEach( key => key.click());
  }
  
  function resetTimer(){
    clickButtonsById([_reset]);
  }
  
  function getMinutes(str){
    const matches = /^(\d{1,4})([\.:,\/]\d{2}.*)?$/g.exec(str);
    return matches[1];
  }
  
  function getSeconds(str){
    const matches = /^\d{1,4}:(\d{2})/g.exec(str);
    return matches[1];
  }
  
  function observeElement(elementId, callback){
    // select the target node
    var target = document.getElementById(elementId);

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        callback(mutation.type);
      });    
    });

    // configuration of the observer:
    var config = { characterData: true, subtree: true };

    // pass in the target node, as well as the observer options
    observer.observe(target, config);
    
    return observer;
  }
  
  // We "Hack" the global setTimeout and setInterval functions so time elapses faster (delay is forced to 30ms)
  // Note: we should consider putting these hacks in the beforeEach function so every timed test can be done in less time   
  // The problem is that we still don't know if it's acceptable to use this hack, because it implies forcing the campers to use setTimeout and setInterval functions to measure time in their pomodoro.
  const savedSetTimeout = window.setTimeout;
  const savedSetInterval = window.setInterval;
  function hackGlobalTimerFunctions(){
    window.setTimeout = (fun, delay) => {
      return savedSetTimeout(fun, 30);
    };
    window.setInterval = (fun, delay) => {
      return savedSetInterval(fun, 30);
    };
  }
  function restoreGlobalTimerFunctions(){
    window.setTimeout = savedSetTimeout;
    window.setInterval = savedSetInterval;
  }
  
  // Test suite
  describe("Pomodoro Clock tests", function(){
    beforeEach(function(){
      resetTimer();
      // restore global setTimeout and setInterval functions, in case they were overridden for some tests
      window.setTimeout = savedSetTimeout;
      window.setInterval = savedSetInterval;
    });

    after(function(){
      resetTimer();
    });

    describe("#Tests", function(){
      
      it("1. I can see the string \"Break Length\" in an element with id=\"break-label\".", function(){
        const break_title = document.getElementById("break-label");
        assert.strictEqual(break_title.innerText, "Break Length", 
                           "The text 'Break Length' is not intially displayed. " +
                            "Did you capitalize the first letter of each word?");
      });
      
      it("2. I can see the string \"Session Length\" in an element with id=\"session-label\".", function(){
        const session_title = document.getElementById("session-label");
        assert.strictEqual(session_title.innerText, "Session Length", 
                           "The text 'Session Length' is not intially displayed. " +
                            "Did you capitalize the first letter of each word?");
      });

      it("3. I can see two clickable elements that contain a minus symbol ( - ) with corresponding IDs: " +
         "id=\"break-decrement\" and id=\"session-decrement\".", function(){
        assert.isNotNull(document.getElementById("break-decrement"));
        assert.isNotNull(document.getElementById("session-decrement"));
      });
      
      it("4. I can see two clickable elements that contain a plus symbol ( + ) with corresponding IDs: " +
         "id=\"break-increment\" and id=\"session-increment\".", function(){
        assert.isNotNull(document.getElementById("break-increment"));
        assert.isNotNull(document.getElementById("session-increment"));
      });
      
      it("5. I can see an element, with corresponding id=\"break-length\", which by default (on load) " +
         "displays a value of 5.", function(){
        const break_length = document.getElementById("break-length");
        assert.strictEqual(break_length.innerHTML, "5", "A value of 5 is not displayed by default");
      });
      
      it("6. I can see an element, with corresponding id=\"session-length\", which by default" +
         "displays a value of 25.", function(){
        const session_length = document.getElementById("session-length");
        assert.strictEqual(session_length.innerHTML, "25", "A value of 25 is not displayed by default");
      });
      
      it('7. I can see an element that by default contains the string "Session" with corresponding ' +
         'id="current-timer".', function(){
        const current_timer = document.getElementById("current-timer");
        assert.strictEqual(current_timer.innerText, "Session", 
                           "The text 'Session' is not intially displayed. " +
                           "Did you capitalize the first letter?");
      });
      
      /*For now just confirm that element exists. Will test contents when timer is running later.
      If we force an initial value of 25:00, campers will then have to make the session length 
      buttons also update the intial value to reflect the change, which is complicated and not 
      necessarily needed. No time needs to be shown here until the timer is actually running.*/
      it("8. I can see an element with corresponding id=\"time-left\".", function(){
        assert.isNotNull(document.getElementById("time-left"));
      });
      
      it("9. I can see a clickable element with corresponding id=\"start_stop\".", function(){
        assert.isNotNull(document.getElementById("start_stop"));
      });
      
      it("10. I can see a clickable element with corresponding id=\"reset\".", function(){
        assert.isNotNull(document.getElementById("reset"));
      });
      
      it('11. When I click the element with the id of "break-decrement", the value within ' + 
         'id="break-length" decrements by a value of 1, and I can see the updated value.', function(){
        clickButtonsById([_break_min, _break_min, _break_min, _break_min]);
        assert.strictEqual(document.getElementById("break-length").innerHTML, "1");
        resetTimer();
        clickButtonsById([_break_min]);
        assert.strictEqual(document.getElementById("break-length").innerHTML, "4");
      });
      
      it('12. When I click the element with the id of "break-increment", the value within id="break-length" increments by a value of 1, and I can see the updated value.', function() {
        clickButtonsById(Array(4).fill(_break_plus));
        assert.strictEqual(document.getElementById("break-length").innerHTML, "9");
        resetTimer();
        clickButtonsById([_break_plus]);
        assert.strictEqual(document.getElementById("break-length").innerHTML, "6");
      });
      
      it('13. When I click the element with the id of "session-decrement", the value within id="session-length" decrements by a value of 1, and I can see the updated value.', function() {
        clickButtonsById(Array(4).fill(_sesh_min));
        assert.strictEqual(document.getElementById("session-length").innerHTML, "21");
        resetTimer();
        clickButtonsById([_sesh_min]);
        assert.strictEqual(document.getElementById("session-length").innerHTML, "24")
      });
      
      it('14. When I click the element with the id of "session-increment", the value within id="session-length" increments by a value of 1, and I can see the updated value.', function() {
        clickButtonsById(Array(4).fill(_sesh_plus));
        assert.strictEqual(document.getElementById("session-length").innerHTML, "29");
        resetTimer();
        clickButtonsById([_sesh_plus]);
        assert.strictEqual(document.getElementById("session-length").innerHTML, "26")
      });
      
      it('15. When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.', function() {
        clickButtonsById([_start_stop]);
        assert.strictEqual(getMinutes(document.getElementById("time-left").innerHTML), document.getElementById("session-length").innerHTML);
      });
      
      it('16. If the timer is running, the element with the id of "time-left" should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).', function(){
        this.timeout(2500);
        // start the pomodoro
        clickButtonsById([_start_stop]);
        const secondsBefore = getSeconds(document.getElementById("time-left").innerHTML);
        return new Promise((resolve, reject) => {
          // wait 1.5 seconds then see if displayed time has changed (decremented)
          setTimeout( _ => {
            const secondsAfter = getSeconds(document.getElementById("time-left").innerHTML);
            if(secondsAfter > secondsBefore) resolve();
            else reject("Pomodoro has started but time displayed is not changing");
          }, 1500);
        });
      });
      it('17. If the timer is running and I click the element with id="start_stop", the countdown should pause.', function(){
        this.timeout(4000);
        // start the pomodoro
        clickButtonsById([_start_stop]);
        const secondsBefore = getSeconds(document.getElementById("time-left").innerHTML);
        return new Promise((resolve, reject) => {
          // wait 1.5 seconds then see if displayed time has changed
          setTimeout( _ => {
            const secondsAfter = getSeconds(document.getElementById("time-left").innerHTML);
            if(secondsAfter === secondsBefore){
              reject("Pomodoro has started but time displayed is not changing");
              return;
            }
            // Pause the pomodoro
            clickButtonsById([_start_stop]);
            // wait another 1.5 seconds to be sure value has not changed
            setTimeout( _ => {
              const secondsAfterPause = getSeconds(document.getElementById("time-left").innerHTML);
              if(secondsAfter === secondsAfterPause) resolve();
              else reject("Pomodoro has paused but time continued elapsing");
            }, 1500);
          }, 1500);
        });
      });
      it('18. If the timer is not running and I click the element with id="start_stop", the countdown should resume.', function(){
        this.timeout(5000);
        // start the pomodoro
        clickButtonsById([_start_stop]);
        const secondsBefore = getSeconds(document.getElementById("time-left").innerHTML);
        return new Promise((resolve, reject) => {
          // wait 1.5 seconds then see if displayed time has changed
          setTimeout( _ => {
            const secondsAfter = getSeconds(document.getElementById("time-left").innerHTML);
            if(secondsAfter === secondsBefore){
              reject("Pomodoro has started but time displayed is not changing");
              return;
            }
            // Pause the pomodoro
            clickButtonsById([_start_stop]);
            // wait another 1.5 seconds to be sure value has not changed
            setTimeout( _ => {
              const secondsAfterPause = getSeconds(document.getElementById("time-left").innerHTML);
              if(secondsAfter !== secondsAfterPause) {
                reject("Pomodoro has paused but time continued elapsing");
                return;
              } 
              // Resume the pomodoro
              clickButtonsById([_start_stop]);
              // wait another 1.5 seconds to be sure time is decrementing again
              setTimeout( _ => {
                const secondsAfterResume = getSeconds(document.getElementById("time-left").innerHTML);
                if(secondsAfterPause > secondsAfterResume) resolve();
                else reject("Pomodoro has resumed but displayed time is not changing");
              }, 1500);
            }, 1500);
          }, 1500);
        });   
      });
      it('19. When a session countdown reaches zero, and a new countdown begins, the element with the id of "current-timer" should display the string "Break", indicating a break has begun.', function(){
        this.timeout(5000);
        // We "Hack" the global setTimeout and setInterval functions so time elapses faster (delay is forced to 30ms)
        // Note: we should consider putting these hacks in the beforeEach function so every timed test can be done in less time   
        // The problem is that we still don't know if it's acceptable to use this hack, because it implies forcing the campers to use setTimeout and setInterval functions to measure time in their pomodoro.
        hackGlobalTimerFunctions();
        // we decrement session time to the minimum (1 minute)
        clickButtonsById(Array(60).fill(_sesh_min));
        // start the pomodoro
        clickButtonsById([_start_stop]);
        return new Promise((resolve, reject) => {
          // 2 approaches here, we can either
          // - watch for modifications on the time label and wait till it reaches zero, then we wait some more and then check the "Break" label. 
          const timeLeft = document.getElementById("time-left");
          let shouldBeInBreak = false;
          const observer = observeElement("time-left", modType => {
            if (timeLeft.innerHTML === "00:00") {
              console.log("Timer reaches Zero !!!");
              shouldBeInBreak = true;
            } else {
              if (shouldBeInBreak) {
                if (document.getElementById("current-timer").innerHTML === "Break"){
                  resolve();
                } else {
                  reject("Timer has reached zero but didn't switch to Break time");
                }
                observer.disconnect();
              }
            }
          });
          // - Or we can wait approximately the time it will take to reach zero (60*30ms + security margin) and then check the "Break" label.
          /*savedSetTimeout( _ => {
            if(document.getElementById("current-timer").innerHTML === "Break"){
              resolve();
            } else {
              reject("Timer has reached zero but didn't switch to Break time");
            }
          }, 3000);*/
        });
      });
      it('20. When a session countdown reaches zero, a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.', function(){
        this.timeout(5000);
        hackGlobalTimerFunctions();
        // we decrement session time to the minimum (1 minute)
        clickButtonsById(Array(60).fill(_sesh_min));
        // start the pomodoro
        clickButtonsById([_start_stop]);
        return new Promise((resolve, reject) => {
          const timeLeft = document.getElementById("time-left");
          let shouldBeInBreak = false;
          const observer = observeElement("time-left", modType => {
            if (timeLeft.innerHTML === "00:00") {
              console.log("Timer reaches Zero !!!");
              shouldBeInBreak = true;
            } else {
              if (shouldBeInBreak) {
                const currentTimer = document.getElementById("current-timer");
                const breakLength = document.getElementById("break-length");
                if (currentTimer.innerHTML === "Break"){
                  if(+getMinutes(timeLeft.innerHTML) === +breakLength.innerHTML) 
                    resolve();
                  else {
                    reject("Timer has switched to Break time, but it didn't start with the correct value: " + getMinutes(timeLeft.innerHTML) + " instead of " + breakLength.innerHTML);  
                  }
                } else {
                  reject("Timer has reached zero but didn't switch to Break time");
                }
                observer.disconnect();
              }
            }
          });
        });
      });
      it('21. When a countdown reaches zero, a sound indicating that time is up should play.', function(){
        this.timeout(5000);
        hackGlobalTimerFunctions();
        // we decrement session time to the minimum (1 minute)
        clickButtonsById(Array(60).fill(_sesh_min));
        // start the pomodoro
        clickButtonsById([_start_stop]);
        return new Promise((resolve, reject) => {
          const timeLeft = document.getElementById("time-left");
          const observer = observeElement("time-left", modType => {
            if (timeLeft.innerHTML === "00:00") {
              console.log("Timer reaches Zero !!!");
              // we wait 200ms and then check if sound is playing
              // note: sound has to be longer than 200 ms, or the test will fail if the sound stops before the test actually happens
              savedSetTimeout( _ => {
                // note: we have to have an audio tag with id "beep" on the page
                if(document.getElementById("beep") && !document.getElementById("beep").paused){
                  resolve();
                } else {
                  reject("Timer has reached zero but, either there is not audio tag with ID 'beep' on the page, or it's not playing while it should.");
                }
              }, 200); 
            } 
          });
        });
      });
      it('22. When a break countdown reaches zero, and a new countdown begins, the element with the id of "current-timer" should display the string "Session", indicating a session has begun.', function(){
        this.timeout(5000);
        hackGlobalTimerFunctions();
        // we decrement session length and break length to the minimum (1 minute)
        clickButtonsById(Array(60).fill(_sesh_min));
        clickButtonsById(Array(60).fill(_break_min));
        // start the pomodoro
        clickButtonsById([_start_stop]);
        return new Promise((resolve, reject) => {
          const timeLeft = document.getElementById("time-left");
          let shouldBeInBreak = false;
          let shouldBeInSessionAgain = false;
          const observer = observeElement("time-left", modType => {
            if (timeLeft.innerHTML === "00:00") {
              console.log("Timer reaches Zero !!!");
              if(!shouldBeInBreak && !shouldBeInSessionAgain) {
                shouldBeInBreak = true;
              }
              else {
                shouldBeInSessionAgain = true;
                shouldBeInBreak = false;
              } 
            } else {
              if (shouldBeInSessionAgain) {
                if (document.getElementById("current-timer").innerHTML === "Session"){
                  resolve();
                } else {
                  reject("Timer has reached zero but didn't switch back to Session time");
                }
                observer.disconnect();
              }
            }
          });
        });
      });
      it('23. When a break countdown reaches zero, a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.', function(){
        this.timeout(5000);
        hackGlobalTimerFunctions();
        // we decrement session length and break length to the minimum (1 minute)
        clickButtonsById(Array(60).fill(_sesh_min));
        clickButtonsById(Array(60).fill(_break_min));
        // start the pomodoro
        clickButtonsById([_start_stop]);
        return new Promise((resolve, reject) => {
          const timeLeft = document.getElementById("time-left");
          let shouldBeInBreak = false;
          let shouldBeInSessionAgain = false;
          const observer = observeElement("time-left", modType => {
            if (timeLeft.innerHTML === "00:00") {
              console.log("Timer reaches Zero !!!");
              if(!shouldBeInBreak && !shouldBeInSessionAgain) {
                shouldBeInBreak = true;
              }
              else {
                shouldBeInSessionAgain = true;
                shouldBeInBreak = false;
              } 
            } else {
              if (shouldBeInSessionAgain) {
                const currentTimer = document.getElementById("current-timer");
                const sessionLength = document.getElementById("session-length");
                if (currentTimer.innerHTML === "Session"){
                  if(+getMinutes(timeLeft.innerHTML) === +sessionLength.innerHTML) 
                    resolve();
                  else {
                    reject("Timer has switched back to Session time, but it didn't start with the correct value: " + getMinutes(timeLeft.innerHTML) + " instead of " + sessionLength.innerHTML);  
                  }
                } else {
                  reject("Timer has reached zero but didn't switch back to Session time");
                }
                observer.disconnect();
              }
            }
          });
        });
      });
      it('24. While the timer is running, the increment and decrement buttons should be locked. Even though this may seem like overkill, I actually think it’s doing campers a favor, because as I discovered when I first tackled this project a few months ago, modifying the session or break length while a countdown is running can lead to problematic behaviors and unexpected results.', function(){
        // start the pomodoro
        clickButtonsById([_start_stop]);
        // get length values before clicking the buttons
        const breakLenBefore = document.getElementById("break-length").innerHTML;
        const sessionLenBefore = document.getElementById("session-length").innerHTML;
        // click each button 4 times
        clickButtonsById(Array(4).fill(_break_plus));
        clickButtonsById(Array(4).fill(_break_min));
        clickButtonsById(Array(4).fill(_sesh_plus));
        clickButtonsById(Array(4).fill(_sesh_min));
        // get new values
        const breakLenAfter = document.getElementById("break-length").innerHTML;
        const sessionLenAfter = document.getElementById("session-length").innerHTML;
        // test values haven't changed
        assert.strictEqual(breakLenAfter, breakLenBefore);
        assert.strictEqual(sessionLenAfter, sessionLenBefore);
      });
      
      it('25. I should not be able to set a session or break length to <= 0.', function() {
        clickButtonsById(Array(10).fill(_break_min));
        assert.strictEqual(document.getElementById("break-length").innerHTML, "1", "Value in elment with " +
                           "id of 'break-length' is less than 1");
        resetTimer();
        clickButtonsById(Array(30).fill(_sesh_min));
        assert.strictEqual(document.getElementById("session-length").innerHTML, "1", "Value in elment with " +
                           "id of 'session-length' is less than 1");
      });
      
      it('26. I should not be able to set a session or break length to > 60.', function() {
        clickButtonsById(Array(60).fill(_break_plus));
        assert.strictEqual(document.getElementById("break-length").innerHTML, "60", "Value in elment with " +
                           "id of 'break-length' is greater than 60");
        resetTimer();
        clickButtonsById(Array(40).fill(_sesh_plus));
        assert.strictEqual(document.getElementById("session-length").innerHTML, "60", "Value in elment with " +
                           "id of 'session-length' is greater than 60");
      });
    });
  });
}

// Utility Functions
function testHorizontallyCentered(elName){
  const centeredElement = document.getElementsByClassName(elName)[0];
  const actualSideGap = centeredElement.offsetLeft;
  const centeredElementWidth = centeredElement.clientWidth;
  const gapExpectedWidth = (window.innerWidth-centeredElementWidth)/2;
  const delta = gapExpectedWidth - actualSideGap; 
  console.log(gapExpectedWidth, actualSideGap, delta);
  return delta < 3 && delta > -3; 
}

// Updates the button color and text on the target project, to show how many tests passed and how many failed. 
function FCCUpdateTestResult(){
  const button = document.getElementById('fcc_test_button');
  button.innerHTML = `Tests ${nbPassed}/${nbPassed+nbFailed}`;
  if(nbFailed){
    button.classList.add("fcc_test_btn-error");
  } else {
    button.classList.add("fcc_test_btn-success");
  }
}

function FCCOpenTestModal(){
  const modal = document.getElementById('fcc_test_message-box');
  modal.classList.remove("fcc_test_message-box-hidden");
  modal.classList.add("fcc_test_message-box-shown");
}

function FCCCloseTestModal(){
  const modal = document.getElementById('fcc_test_message-box');
  modal.classList.remove("fcc_test_message-box-shown");
  modal.classList.add("fcc_test_message-box-hidden");
}

// When the document is fully loaded,
// create the "Tests" button and the corresponding modal window (bootstrap(js/css) and jquery required)
$(document).ready(function() {
  const testDiv = document.createElement("div");
  testDiv.style.position = "inherit";
  testDiv.innerHTML = (
  `<style>
    #fcc_test_button {
      color: white;
      font-size: 20px;
      font-family: Arial, sans-serif;
      position: fixed; 
      top: 10px; 
      left: 10px; 
      z-index: 100000;
      height: initial;
      width: initial;
      padding: 15px;
      border: none;
      outline: none;
      border-radius: 4px;
    }
    .fcc_test_btn-default {
      background-color: grey;
    }
    .fcc_test_btn-error {
      background-color: red;
    }
    .fcc_test_btn-success {
      background-color: #51d351;
    }

    #fcc_test_message-box {
      font-size: 20px;
      font-family: Arial, sans-serif;
      position: fixed;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.8);
      transition: all .5s;
      z-index: 100001;
      overflow: auto;
    }
    
    .fcc_test_message-box-hidden {
      visibility: hidden;
      opacity: 0;
      top: -300px;
    }
    
    .fcc_test_message-box-shown {
      visibility: visible;
      opacity: 1;
      top: 0;
    }

    .fcc_test_message-box-content {
      position: relative;
      color: black;
      background-color: white;
      top: 10vh;
      width: 80%;
      margin: 0 auto;
      text-align: initial;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
    }
    .fcc_test_message-box-header,
    .fcc_test_message-box-footer{
      position: relative;
      height: 60px;
      flex: none;
      box-sizing: border-box;
      padding: 10px;
    }
    .fcc_test_message-box-header {
      border-bottom: 1px solid rgb(229,229,229);
    }
    
    .fcc_test_message-box-header .title {
      float: left;
      font-size: 30px;
      line-height: 40px;
      margin-left: 10px;
    }

    .fcc_test_message-box-body {
      flex: 1;
    }

    .fcc_test_message-box-footer {
      border-top: 1px solid rgb(229,229,229);
    }
    
    .fcc_test_message-box-close-btn {
      float: right;
      color: black;
      background-color: white;
      border: 1px solid rgb(229,229,229);
      border-radius: 4px;
      padding: 10px 20px;
      transition: all .3s;
    }
    .fcc_test_message-box-close-btn:hover {
      color: white;
      background-color: black;
    }

    #mocha {
      margin: 10px;
    }
    #mocha .test pre {
      background-color: rgb(245, 245, 245);
    }
    #mocha-stats {
      position: absolute;
    }

    div {
      position: static;
    }

    .fcc_test_message-box-close-fixed {
      position: fixed;
      top: 10px;
      right: 10px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      border: 3px solid grey;
      text-align: center;
      transition: all .4s;
    }
    .fcc_test_message-box-close-fixed:after {
      color: grey;
      font-family: Arial, sans-serif;
      font-size: 30px;
      font weight: bold;
      content: "X";
      line-height: 30px;
    }
  </style>
  <button id="fcc_test_button" type="button" class="fcc_test_btn-default"
          onclick="FCCOpenTestModal()">
    Testing...
  </button>
  <div id="fcc_test_message-box" class="fcc_test_message-box-hidden">
    <div class="fcc_test_message-box-content">
      <div class="fcc_test_message-box-header">
        <div class="title">Unit tests</div>
      </div>
      <div class="fcc_test_message-box-body">
        <div id="mocha"></div>
      </div>
      <div class="fcc_test_message-box-footer">
        <div class="fcc_test_message-box-close-btn" onclick="FCCCloseTestModal()">Close</div>
      </div>
    </div>
    <div class="fcc_test_message-box-close-fixed" onclick="FCCCloseTestModal()"></div>
  </div>`);
  
  document.body.appendChild(testDiv);
  
  // createTests
  switch (project_name) {
    case "random-quote-machine":
      createRandomQuoteMachineTests();
      break;
    case "javascript-calculator":
      createCalculatorTests();
      break;
    case "pomodoro-clock":
      createPomodoroClockTests();
      break;
  }
  
  // Run the test suite
  const runner = mocha.run();
  runner.on("pass", _ => nbPassed++);
  runner.on("fail", _ => nbFailed++);
  runner.on("end", _ => FCCUpdateTestResult && FCCUpdateTestResult()); // update the "tests" button caption at the end of the overhall execution.
});
