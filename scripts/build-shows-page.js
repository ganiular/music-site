const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' });
}

const loadTickets = async (event) => {
    // Create ticket table header and body
    const tableHead = document.createElement('div');
    tableHead.classList.add('tickets-table__head');

    const tableBody = document.createElement('div');
    tableBody.classList.add('tickets-table__body');

    // Add header titles
    const headTitles = ['DATE', 'VENUE', "LOCATION", ''];
    headTitles.forEach((title) => {
        const th = document.createElement('div');
        th.innerText = title;
        tableHead.appendChild(th);
    })

    // include table head and body
    const ticketTable = document.querySelector('.tickets-table');
    ticketTable.appendChild(tableHead);
    ticketTable.appendChild(tableBody);

    // Populate tickets
    try {
        const tickets = await siteApi.getShows();
        tickets.forEach(addTicket);
    } catch (error) {
        console.error(error);
    }
}

const addTicket = (ticket) => {
    addTicketToTable(ticket);
    addTicketToList(ticket);
}

const addTicketToTable = (ticket) => {
    // Create elements
    const tableRow = document.createElement('div');
    tableRow.classList.add('table-row');
    tableRow.addEventListener('click', handleSelect);

    const tableDataDate = document.createElement('div');
    tableDataDate.classList.add('table-row__date');
    tableDataDate.innerText = formatDate(ticket.date);

    const tableDataVenue = document.createElement('div');
    tableDataVenue.innerText = ticket.place;

    const tableDataLocation = document.createElement('div');
    tableDataLocation.innerText = ticket.location;

    const tableDataAction = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = 'BUY TICKETS';

    // Append  elements
    tableRow.appendChild(tableDataDate);
    tableRow.appendChild(tableDataVenue);
    tableRow.appendChild(tableDataLocation);
    tableRow.appendChild(tableDataAction);
    tableDataAction.appendChild(button)

    const tableBody = document.querySelector('.tickets-table__body');
    tableBody.appendChild(tableRow);
}

const addTicketToList = (ticket) => {
    // Create elements
    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket');

    const dateField = createField('DATE', formatDate(ticket.date));
    const venueField = createField('VENUE', ticket.place);
    const locationField = createField('LOCATION', ticket.location);

    const actionContainer = document.createElement('div');
    actionContainer.classList.add('action');

    const buyButton = document.createElement('button');
    buyButton.innerText = 'BUY TICKETS';

    // Append elements
    ticketContainer.appendChild(dateField);
    ticketContainer.appendChild(venueField);
    ticketContainer.appendChild(locationField);
    ticketContainer.appendChild(actionContainer);
    actionContainer.appendChild(buyButton);

    const ticketsList = document.querySelector('.tickets-list');
    ticketsList.appendChild(ticketContainer);

    // Divider
    const divider = document.createElement('div');
    divider.classList.add('divider');
    ticketsList.appendChild(divider);
}

const createField = (label, value) => {
    const fieldContainer = document.createElement('div');
    fieldContainer.classList.add('field');

    const labelDiv = document.createElement('div');
    labelDiv.classList.add('label');
    labelDiv.innerText = label;

    const valueDiv = document.createElement('div');
    valueDiv.innerText = value;

    fieldContainer.appendChild(labelDiv);
    fieldContainer.appendChild(valueDiv);

    return fieldContainer;
}

function handleSelect(ev) {
    this.classList.toggle('select');
}


window.addEventListener('load', loadTickets);
