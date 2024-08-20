
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('telefono_empresa');

    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, ''); // Solo permite dígitos
    });
});

