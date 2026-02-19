export default function confirmaSelect() {
    const selectOrdenar = document.querySelector('#select-filter');
    const form = document.querySelector('#form-filtro');

    if (selectOrdenar) {
        selectOrdenar.addEventListener('change', () => {
            return form.submit();
        });
    }
};
