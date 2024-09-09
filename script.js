document.getElementById("convert").addEventListener("click", async function() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (amount === "") {
        alert("Bitte einen Betrag eingeben.");
        return;
    }

    try {
        // API-Aufruf, um Wechselkurse zu erhalten
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];

        // Betrag umrechnen
        const result = (amount * rate).toFixed(2);

        // Ergebnis anzeigen
        document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
        alert("Ein Fehler ist aufgetreten. Versuche es erneut.");
    }
});
