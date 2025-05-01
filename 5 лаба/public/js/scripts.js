document.getElementById('addFlash').addEventListener('click', async () => {
    const manufacturer = document.getElementById('manufacturer').value;
    const capacity = document.getElementById('capacity').value;
    const warranty = document.getElementById('warranty').value;
    const quantity = document.getElementById('quantity').value;

    const response = await fetch('/api/flash/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ manufacturer, capacity, warranty, quantity }),
    });

    if (response.ok) {
        alert('Флешка добавлена!');
    }
});

document.getElementById('searchManufacturers').addEventListener('click', async () => {
    const warranty = document.getElementById('warrantySearch').value;
    const response = await fetch(`/api/flash/manufacturers?warranty=${warranty}`);
    const manufacturers = await response.json();
    const manufacturersList = document.getElementById('manufacturersList');
    manufacturersList.innerHTML = '';

    manufacturers.forEach(manufacturer => {
        const li = document.createElement('li');
        li.textContent = manufacturer;
        manufacturersList.appendChild(li);
    });
});

document.getElementById('deleteFlashes').addEventListener('click', async () => {
    const warranty = document.getElementById('warrantyDelete').value;
    const response = await fetch(`/api/flash/delete?warranty=${warranty}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        alert('Флешки удалены!');
    }
});