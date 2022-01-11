let hash = document.getElementById("result");
let btn = document.getElementById("btn");
let string = document.getElementById("tbh");
const encoder = new TextEncoder();

btn.onclick = async (e) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    const digest = await window.crypto.subtle.digest('SHA-256', encoder.encode(string.value));
    const hashArray = Array.from(new Uint8Array(digest));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    hash.innerText = hashHex;
}
