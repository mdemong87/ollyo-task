function toggleFaq(index) {
    const answer = document.querySelectorAll('.faq-answer')[index];
    const icon = document.getElementById(`icon-${index}`);
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>'; // Minus icon
    } else {
        answer.classList.add('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>'; // Plus icon
    }
}

