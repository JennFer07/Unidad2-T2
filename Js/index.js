// Clase para crear los nodos
class Nodo {
    constructor(dato, next = null) {
        this.dato = dato;
        this.next = next;
    }
}
// Clase para crear la lista enlazada
class ListaEnlazada {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Inserta un nodo al principio de la lista
    insertBefore(dato) {
        this.head = new Nodo(dato, this.head);
        this.size++;
    }
    // Inserta un nodo al final de la lista
    insertAfter(dato) {
        let newNode = new Nodo(dato);

        if (!this.head) {
            this.head = newNode;
        } else {
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = newNode;
        }
        this.size++;
    }
    // Inserta un nodo en una posición específica
    insertAt(dato, index) {
        if (index < 0 || index > this.size) {
            return null;
        }

        const newNode = new Nodo(dato);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current; 
            this.head = newNode; 
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }
    // Remueve un nodo con el valor especificado
    removeData(dato) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.dato === dato) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--; 
                return current.dato; 
            }
            previous = current; 
            current = current.next;
        }
        return null; 
    }
    // Remueve un nodo en una posición específica
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null; 
        }

        let current = this.head; 
        let previous = null; 

        if (index === 0) {
            this.head = current.next; 
        } else {
            for (let i = 0; i < index; i++) {
                previous = current; 
                current = current.next; 
            }
            previous.next = current.next;
        }
        this.size--; 
        return current.dato; 
    }
    // Remueve el primer nodo de la lista
    removeFirst() {
        if (this.isEmpty()) {
            return null; 
        }
        const removedNode = this.head; 
        this.head = this.head.next; 
        this.size--; 
        return removedNode.dato; 
    }
    // Remueve el último nodo de la lista
    removeLast() {
        if (this.isEmpty()) {
            return null; 
        }

        let current = this.head; 
        let previous = null; 

        // Iterar hasta llegar al último nodo
        while (current.next !== null) {
            previous = current; 
            current = current.next; 
        }

        if (previous) {
            previous.next = null; 
        } else {
            this.head = null; 
        }

        this.size--; 
        return current.dato; 
    }
    // Remueve toda la lista
    removeList() {
        this.head = null; 
        this.size = 0; 
    }
    // Verifica si la lista está vacía
    isEmpty() {
        return this.size === 0; 
    }
    // Obtiene el tamaño de la lista
    getSize() {
        return this.size; 
    }
    // Imprime los nodos de la lista
    print() {
        let current = this.head; 
        while (current) {
            console.log(current.dato); 
            current = current.next; 
        }
    }
}
// Ejemplo de uso
const LISTA = new ListaEnlazada(); 