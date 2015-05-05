function digitCancellingFractions() {
  var results = [],
      sameDigit = undefined,
      product;

  for(var i=12;i<100;i++){
    for(var j=10;j<i;j++){
      sameDigit = getSameDigit(i,j);
      if(sameDigit && (removeDigit(j,sameDigit)/removeDigit(i,sameDigit)===(j/i)){
        results.push(j+"/"+i);
      }
    }
  }

  for(var k=1,product=results[0];k<results.length;k++){
    product=multiplyFraction(product,results[k]);
  }

  return reduceFraction(product).split('/')[1];
}

function getSameDigit(a,b){
  var strA=a+'',
      strB=b+'';

  for(var i=0;i<strA.length;i++){
    if(strB.indexOf(strA[i])>-1){return parseInt(strA[i], 10);}
  }

  return null;
}

function reduceFraction(fraction){
  var gcd,
      fraction=fraction.split('/'),
      num=parseInt(fraction[0],10),
      den=parseInt(fraction[1],10);
  for(var i = 2; i <= num; i++){
    if((num%i===0) && (den%i===0)){gcd=i}
  }
  return gcd? (num/gcd)+'/'+(den/gcd): num+"/"+den;
}

function multiplyFraction(a,b){
  var a=a.split('/'),
      b=b.split('/');
  return (parseInt(a[0],10)*parseInt(b[0],10))+'/'+(parseInt(a[1],10)*parseInt(b[1],10));
}

function removeDigit(n,d){
  return parseInt((n+'').replace(d, ''), 10);
}

//use for problem
var result = digitCancellingFractions();
console.log(result);
