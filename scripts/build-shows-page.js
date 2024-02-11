const handleView = () => {
    const ticketsTable = document.getElementById("ticketsTable");
    const ticketsList = document.getElementById('ticketsList');

    // Toggle between list or table
    if (window.screen.width >= 768) {
        ticketsList.classList.add('hide');
        ticketsTable.classList.remove('hide');
    } else {
        ticketsList.classList.remove('hide');
        ticketsTable.classList.add('hide');
    }
}

window.addEventListener('load', handleView);
window.addEventListener('resize', handleView);
