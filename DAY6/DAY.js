//1
function is_array(a)
{
    if(typeof(a)===Object)
    return true;
    return false;
}
//2
function clone_array(a)
{
    let b=a;
    return b;
}
//3
function first(arr,n)
{
    if(n===null)
    {
        return arr[0];
    }
    else
    {
        return arr.slice(0,n);
    }
}
//4
function con(arr)
{
    let a=arr[0];
    for(let i=1;i<arr.length;i++)
    a+=arr[i];
    return a;
}
//5
function feq(arr1)
{
    var mf = 1;
let m = 0;
let item;

for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }

  m = 0;
}
return item;
}
