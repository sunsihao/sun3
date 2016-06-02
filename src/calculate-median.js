function calculate_median(arr) {
        var ouArr = [];
        for(var i=0; i<arr.length; i++){
            if(i%2 == 0){
                continue;
            }
            ouArr.push(arr[i]);
        }
        ouArr.sort(function(a, b){
            return a - b;
        });
        if(ouArr.length%2 == 0){
            var maxNum = ouArr[ouArr.length/2];
            var minNum = ouArr[ouArr.length/2 - 1];
            return (maxNum+minNum)/2;
        }else{
            return ouArr[Math.floor(ouArr.length/2)];
        }
}

module.exports = calculate_median;
