const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	
    let ans = false;
    // write your code here
    for (const x in sampleObject) {
        if (key == x) {
            ans = true;
            return ans;
        }
    }
    return ans;
	//return sampleObject != null && hasOwnProperty.call(sampleObject, key);
}


// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
