let Btn = document.getElementById('btn');
let Form = document.getElementById('Pid');
let IdShower = document.getElementById('Univer');






Btn.addEventListener('click', () => {
	let str = Form.value
	if (!str) {
		alert('Enter Valid Place Id');}
  else {
    if (!isNaN(str) && !isNaN(parseFloat(str))) {
		  Request(str)
}   else {
      alert('Enter Valid Place Id');

}}});

function Request(id) {
  let url = `https://apis.roblox.com/universes/v1/places/${id}/universe`
  const http = new XMLHttpRequest()

  http.open("GET", url)
  http.send()
  
  http.onload = () => showData(http.responseText)
};

function showData(data) {IdShower.innerHTML = data; navigator.clipboard.writeText(data)}