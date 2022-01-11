let hash = document.getElementById("result");
let btn = document.getElementById("btn");
let string = document.getElementById("tbh");

btn.onclick = async (e) => {
	const digest = await window.crypto.subtle.digest('SHA-256', string.value);
	hash.innerText = digest;
}
