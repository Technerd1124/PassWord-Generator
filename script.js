function generatePassword(length, includeLower, includeUpper, includeNumber, includeSymbols) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbols = "!@#$%^&*()_+-={}:<>?";
    let charset = "";
    if (includeLower) charset += lower;
    if (includeUpper) charset += upper;
    if (includeNumber) charset += number;
    if (includeSymbols) charset += symbols;

    if (!charset) return null;

    return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
}

document.getElementById("generateBtn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("pass_lenth").value) || 0;
    const includeUpper = document.getElementById("include_up").checked;
    const includeLower = document.getElementById("include_low").checked;
    const includeNumber = document.getElementById("include_no").checked;
    const includeSymbols = document.getElementById("include_spc").checked;
    const errorMessage = document.getElementById("errorMessage");
    const result = document.getElementById("result");

    errorMessage.textContent = "";

    if (length < 1 || length > 20) {
        errorMessage.textContent = "Password length must be between 1 and 20.";
        result.textContent = "";
        return;
    }

    const password = generatePassword(length, includeLower, includeUpper, includeNumber, includeSymbols);

    if (!password) {
        errorMessage.textContent = " Include  at least one character type.";
        result.textContent = "";
        return;
    }

    result.textContent = password;
});

document.getElementById("copyBtn").addEventListener("click", () => {
    const resultText = document.getElementById("result").textContent;
    if (resultText) {
        navigator.clipboard.writeText(resultText)
            .then(() => alert("Password copied to clipboard!"))
            .catch(err => console.error("Error copying to clipboard:", err));
    }
});
