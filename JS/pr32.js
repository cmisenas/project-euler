function pandigital(){
  var twoD=[],
      threeD=[],
      fourD=[],
      d=[1,2,3,4,5,6,7,8,9],
      results=[],
      strResults=[],
      product;

  // the multiplicand and multiplier can be
  // 2 and 3 digit or 1 and 4 digit to produce a 5 digit product
  // xx * xxx = yyyyy or x * xxxx = yyyyy
  // form all 1, 2, 3 and 4 digits
  // that will not have a repeating digit then multiply those
  // with each other to see if products are pandigital
  // in other words, PROFIT!$!$!$

  d.forEach(function(i){
    d.forEach(function(j){
      if(isUnique(i, j)){
        twoD.push(parseInt((i+''+j),10));
        d.forEach(function(k){
          if(isUnique(i, k, j)){
            threeD.push(parseInt((i+''+j+''+k),10));
            d.forEach(function(l){
              if(isUnique(i, k, j, l)){
                fourD.push(parseInt((i+''+j+''+k+''+l),10));
              }
            });
          }
        });
      }
    });
  });

  d.forEach(function(x){
    fourD.forEach(function(y){
      product=x*y;
      if((product+'').length === 4 && isPandigital(x+''+y+''+product)){
        strResults.push(x+'*'+y+'='+product);
        results.push(product);
      }
    });
  });

  twoD.forEach(function(x){
    threeD.forEach(function(y){
      product=x*y;
      if((product+'').length === 4 && isPandigital(x+''+y+''+product)){
        strResults.push(x+'*'+y+'='+product);
        results.push(product);
      }
    });
  });

  return sumArr(results.filter(function(e,f,g){return f===g.indexOf(e);}));
}

function isPandigital(str){
  var digits=[1,2,3,4,5,6,7,8,9],
      result=true;
  digits.forEach(function(d){
    if(str.indexOf(d)===-1){result=false;}
  });
  return result;
}

function isUnique(){
  var args = Array.prototype.slice.call(arguments);
  return args.filter(function(e,f,g){return f===g.indexOf(e);}).length === args.length;
}

function sumArr(arr){
  var sum=0;
  arr.forEach(function(d){
    sum+=d;
  });
  return sum;
}

//use for problem
var result = pandigital();
console.log(result);
