const input = document.querySelectorAll('input');
const tr = document.querySelectorAll('table tbody tr');
input.forEach((searchInput, index) => {
    searchInput.addEventListener('input', () => {
        tr.forEach(item => {
            if (index === 0) {
                if (item.innerText.toLowerCase().includes(searchInput.value)) {
                    item.classList.remove('d-none');
                } else {
                    item.classList.add('d-none');
                }
            } else {
                if (
                    item.children[index - 1].innerText
                        .toLowerCase()
                        .includes(searchInput.value)
                ) {
                    item.classList.remove('d-none');
                } else {
                    item.classList.add('d-none');
                }
            }
        });
    });
});
