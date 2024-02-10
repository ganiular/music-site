const tickets = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane ",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 17 2024 ",
        venue: "Pier 3 East ",
        location: "San Francisco, CA "
    },
    {
        date: "Sat Oct 12 2024 ",
        venue: "View Lounge ",
        location: "San Francisco, CA "
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
    const ticketsElm = document.querySelector('.tickets');
    let html = '';
    for (let data of tickets) {
        html += `
        <div class="ticket">
            <div class="field">
                <div class="label">DATE</div>
                <div class="date">${data.date}</div>
            </div>
            <div class="field">
                <div class="label">VENUE</div>
                <div class="date">${data.venue}</div>
            </div>
            <div class="field">
                <div class="label">LOCATION</div>
                <div class="date">${data.location}</div>
            </div>
            <div class="action">
                <button>BUY TICKETS</button>
            </div>
        </div>
        
        <div class="divider"></div>
    `;
    }

    ticketsElm.innerHTML = html;
}


window.addEventListener('load', loadTickets);