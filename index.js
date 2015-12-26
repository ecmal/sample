require('./out/runtime/index');
System.import('sample/Main').catch(function(e){
    console.error(e.stack);
});