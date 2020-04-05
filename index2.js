function cl(age){

    let vateable=(age<18)? 'to young':'Old ';
    document.getElementById('demo').innerHTML=vateable;
    
}

for(let i=0;i<100;i++){
    document.getElementById('demo2').innerHTML+=i;
}
try {
    adddlert("Welcome guest!");
  }
  catch(err) {
    document.getElementById('demo2').innerHTML=err;
  }