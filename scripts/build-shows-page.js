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
    const tableBody = document.getElementById("tableBody");
    const ticketsList = document.getElementById('ticketsList');

    // Clear content
    tableBody.innerHTML = '';
    ticketsList.innerHTML = '';

    // If Tablet or Desktop screen
    if (window.screen.width >= 768) {
        for (let data of tickets) {
            // Create elements
            const tableRow = document.createElement('tr');
            tableRow.addEventListener('click', handleSelect);

            const tableDataDate = document.createElement('td');
            tableDataDate.classList.add('date');
            tableDataDate.innerText = data.date;

            const tableDataVenue = document.createElement('td');
            tableDataVenue.innerText = data.venue;

            const tableDataLocation = document.createElement('td');
            tableDataLocation.innerText = data.location;

            const tableDataButton = document.createElement('td');
            const button = document.createElement('button');
            button.innerText = 'BUY TICKETS';

            // Append  elements
            tableRow.appendChild(tableDataDate);
            tableRow.appendChild(tableDataVenue);
            tableRow.appendChild(tableDataLocation);
            tableRow.appendChild(tableDataButton);
            tableDataButton.appendChild(button);
            tableBody.appendChild(tableRow);
        }
    } else { // Mobile
        for (let data of tickets) {
            // Create elements
            const ticketContainer = document.createElement('div');
            ticketContainer.classList.add('ticket');

            const dateField = createField('DATE', data.date);
            const venueField = createField('VENUE', data.venue);
            const locationField = createField('LOCATION', data.location);

            const actionContainer = document.createElement('div');
            actionContainer.classList.add('action');

            const buyButton = document.createElement('button');
            buyButton.innerText = 'BUY TICKETS';

            // Append elements
            actionContainer.appendChild(buyButton);
            ticketContainer.appendChild(dateField);
            ticketContainer.appendChild(venueField);
            ticketContainer.appendChild(locationField);
            ticketContainer.appendChild(actionContainer);
            ticketsList.appendChild(ticketContainer);

            // Divider
            const divider = document.createElement('div');
            divider.classList.add('divider');
            ticketsList.appendChild(divider);
        }
    }
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

window.addEventListener('load', loadTickets);
window.addEventListener('resize', loadTickets);

window.addEventListener('load', handleView);
window.addEventListener('resize', handleView);
