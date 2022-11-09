class Model {
    constructor() {
        // The state of the model, an array of todo objects, prepopulated with some data
        this.tickets = [
            { id: 1, text: 'Run a marathon', complete: false },
            { id: 2, text: 'Plant a garden', complete: false },
        ]
    }

    addTicket(addText) {
        const ticket = {
            id: this.tickets.length > 0 ? this.tickets[this.tickets.length - 1].id + 1 : 1,
            text: addText,
            complete: false,
        }

        this.tickets.push(ticket)
    }

    // Map through all tickets, and replace the text of the ticket with the specified id
    editTicket(id, updatedText) {
        this.tickets = this.tickets.map((ticket) =>
            ticket.id === id ? { id: ticket.id, text: updatedText, complete: ticket.complete } : todo,
        )
    }

    // Filter a ticket out of the array by id
    deleteTicket(id) {
        this.tickets = this.tickets.filter((ticket) => ticket.id !== id)
    }

    // Flip the complete boolean on the specified ticket
    /*
    toggleTicket(id) {
        this.tickets = this.tickets.map((ticket) =>
            ticket.id === id ? { id: ticket.id, text: ticket.text, complete: !ticket.complete } : ticket,
        )
    }*/
}

class View {
    constructor() { }
    // Here we need to alter based on what we will be showing
}

class Controller {
    // This will also depend on what we will be displaying in the view basically toggeling
    constructor(model, view) {
        this.model = model
        this.view = view
    }
}

const app = new Controller(new Model(), new View())