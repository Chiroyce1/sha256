let hash = document.getElementById("result");
let btn = document.getElementById("btn");
let string = document.getElementById("tbh");

btn.onclick = async (e) => {
	let res = await fetch(`https://sha256.chiroyce.repl.co/hash?string=${string.value}`);
	res = await res.json();
	hash.innerText = res.hash;
}
