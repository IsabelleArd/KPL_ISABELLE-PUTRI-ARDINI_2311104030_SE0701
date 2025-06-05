document.getElementById('hitung').addEventListener('click', async () => {
  const a = document.getElementById('inputA').value;
  const b = document.getElementById('inputB').value;

  const response = await fetch('http://localhost:3000/hitung-pangkat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a, b })
  });

  const { hasil } = await response.json();
  document.getElementById('hasil').innerText = `Hasil: ${hasil}`;
});