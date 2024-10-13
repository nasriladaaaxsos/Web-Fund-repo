/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    result = true
    var str = s.replace(/[\W1_]/g, '').toLowerCase();
    console.log(str)
    n = str.length
    left = 0 ;
    right = n -1
    //console.log(right)
    while ( left <= right){
        //console.log("Nasri")
        if (str[left] == str[right]){
            //console.log("Hello")
            left++;
            right--;
        }
        else{
            //console.log("Hello111")
            result = false;
            break;
        }
    }
    return result;
};