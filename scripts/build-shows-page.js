const tickets = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane ",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Oct 12 2024 ",
        venue: "View Lounge ",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 16 2024 ",
        venue: "Hyatt Agency ",
        location: "San Francisco, CA "
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA"
    },
];


const loadTickets = (event) => {
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
    tickets.forEach(addTicket);
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
    tableDataDate.innerText = ticket.date;

    const tableDataVenue = document.createElement('div');
    tableDataVenue.innerText = ticket.venue;

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

    const dateField = createField('DATE', ticket.date);
    const venueField = createField('VENUE', ticket.venue);
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
