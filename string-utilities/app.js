const stringUtils = require('./stringUtils');


function testRunner(testCase){

   try{
        testCase();
    }catch(err){
        console.log(err.message);
    }finally{
        console.log(`Test Case completed.`);
    }
}

testRunner(() => console.log(stringUtils.capitalizeStr("hello")));

testRunner(() => console.log(stringUtils.reverseStr("hello")));

testRunner(() => console.log(stringUtils.containsStr("hello", "hi")));
