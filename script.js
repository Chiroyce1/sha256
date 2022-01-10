/*
function hash() {
	document.getElementById("result").innerText = "hashing . . . "
	stringg = document.getElementById("tbh").value
	fetch("https://sha256.chiroyce.repl.co/hash?string="+stringg)
 	 .then((res) => res.json())
  	 .then((res) => {
		document.getElementById("result").innerText = `${res.hash}`
 	 });
}
*/

// haha more readable code go brr..

const btn = document.getElementById("btn");
const hash = document.getElementById("result");
const string = document.getElementById("tbh");

btn.onclick = async (e) => {
	let res = await fetch(`https://sha256.chiroyce.repl.co/hash?string=${string.value}`);
	res = await res.json();
	hash.innerText = res.hash;
	
}
