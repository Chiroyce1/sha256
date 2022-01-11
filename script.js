let hash = document.getElementById("result");
let btn = document.getElementById("btn");
let string = document.getElementById("tbh");
const encoder = new TextEncoder();

btn.onclick = async (e) => {
	const digest = await window.crypto.subtle.digest('SHA-256', encoder.encode(string.value));
	hash.innerText = digest;
}
