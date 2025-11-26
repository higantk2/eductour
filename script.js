function toggleDay(dayId) {
    const card = document.getElementById(dayId);
    const content = card.querySelector('.card-content');
    const headerButton = card.querySelector('.card-header button');
    
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        card.classList.remove('expanded');
        headerButton.textContent = 'View Entry';
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        content.classList.add('show');
        card.classList.add('expanded');
        headerButton.textContent = 'Close Entry';
    }
}