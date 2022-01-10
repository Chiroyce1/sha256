function hash() {
	document.getElementById("result").innerText = "hashing . . . "
	stringg = document.getElementById("tbh").value
	fetch("https://sha256.chiroyce.repl.co/hash?string="+stringg)
 	 .then((res) => res.json())
  	 .then((res) => {
		document.getElementById("result").innerText = `${res.hash}`
 	 });
}
