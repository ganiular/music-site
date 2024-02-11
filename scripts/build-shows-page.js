// const tickets = [
//     {
//         date: "Mon Sept 09 2024",
//         venue: "Ronald Lane ",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Tue Sept 17 2024",
//         venue: "Pier 3 East",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Sat Oct 12 2024 ",
//         venue: "View Lounge ",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Sat Nov 16 2024 ",
//         venue: "Hyatt Agency ",
//         location: "San Francisco, CA "
//     },
//     {
//         date: "Fri Nov 29 2024",
//         venue: "Moscow Center",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Wed Dec 18 2024",
//         venue: "Press Club",
//         location: "San Francisco, CA"
//     },
// ];


// const loadTickets = (event) => {
//     const ticketsTable = document.getElementById("ticketsTable");
//     const tableBody = document.getElementById("tableBody");
//     const ticketsList = document.getElementById('ticketsList');

//     // If Tablet or Desktop screen
//     if (window.screen.width >= 768) {
//         ticketsList.classList.add('hide');
//         ticketsTable.classList.remove('hide')

//         let html = '';
//         for (let data of tickets) {
//             html += `
//             <tr>
//                 <td class="date">${data.date}</td>
//                 <td>${data.venue}</td>
//                 <td>${data.location}</td>
//                 <td><button>BUY TICKETS</button></td>
//             </tr>`;
//         }

//         tableBody.innerHTML = html;
//         navigator.clipboard.writeText(html);
//         console.log(html)
//     } else { // Mobile
//         ticketsTable.classList.add('hide');
//         ticketsList.classList.remove('hide');

//         let html = '';
//         for (let data of tickets) {
//             html += `
//             <div class="ticket">
//                 <div class="field">
//                     <div class="label">DATE</div>
//                     <div class="date">${data.date}</div>
//                 </div>
//                 <div class="field">
//                     <div class="label">VENUE</div>
//                     <div class="">${data.venue}</div>
//                 </div>
//                 <div class="field">
//                     <div class="label">LOCATION</div>
//                     <div class="">${data.location}</div>
//                 </div>
//                 <div class="action">
//                     <button>BUY TICKETS</button>
//                 </div>
//             </div>

//             <div class="divider"></div>`;
//         }

//         ticketsList.innerHTML = html;
//         navigator.clipboard.writeText(html);
//         console.log(html)
//     }
// }


// window.addEventListener('load', loadTickets);
// window.addEventListener('resize', loadTickets);

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
