function fibonacciGenerator (n) {
 var array = [0,1];

   

for(var i=0; i < n; i++) {

        var x = array[i];

        var y = array[i + 1];

        var result = x + y;

        array.push(result);

    }

    var newArray = array.slice(0,n);

    return newArray;
}
