document.getElementById('cek').addEventListener('click', async () => {
  const angka = document.getElementById('inputAngka').value;
  
  const response = await fetch('http://localhost:3000/cari-tanda', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ a: angka })
  });

  const { hasil } = await response.json();
  document.getElementById('hasil').innerText = `Hasil: ${hasil}`;
});