document.getElementById('search-btn').addEventListener('click', function() {
    const name = document.getElementById('search-name').value.trim();
    const id = document.getElementById('search-id').value.trim();
    const idType = document.getElementById('search-id-type').value;

    // Validar los campos requeridos
    if (!id || (name && !/^[A-Za-z\s]+$/.test(name))) {
        alert('Por favor, ingrese un ID válido y un nombre que contenga solo letras.');
        return;
    }

    // Construir la consulta
    let queryParams = new URLSearchParams();
    if (name) queryParams.append('name', name);
    if (id) queryParams.append('id', id);
    if (idType) queryParams.append('idType', idType);

    const queryString = queryParams.toString();

    // Redirigir a la página de resultados
    window.location.href = `resultados.html?${queryString}`;
});
