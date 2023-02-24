const firstBit = 'https://apis.roblox.com/universes/v1/places/'
const lastBit = '/universe'

function get(id) {
  let url = firstBit.concat(id, lastBit);
  fetch(url, {
        method: "GET",
}).then(response => {
  if (!response.ok) {
    alert(`Error ${response.statusText}`);
  } else {return response.text()};
})
    }

    
document.getElementById('btn').addEventListener('click', () => {
  let str = document.getElementById('Pid').value
    if (!str) {alert('Enter Valid Place Id');}
    else {
      if (!isNaN(str) && !isNaN(parseFloat(str))) {
        let obj = get(str)
        document.getElementById("Univer").innerHTML = obj;
        navigator.clipboard.writeText(obj);
  
        alert(`Your Universal Id Is ${obj}`);
      }else {
        alert('Enter Valid Place Id');
}}});