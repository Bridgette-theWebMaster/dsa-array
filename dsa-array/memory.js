class Memory{
    constructor() {
        this.memory = new Float64Array(1024)
        this.head = 0
    }

    allocate(size) {
         if (this.head + size > this.memory.length) {
             return null
         }

         let start = this.head
         this.head += size
         return start
    }

    free(ptr) {}

    copt(toIdx, fromIdx, size) {
        if (fromIdx === toIdx) {
            return
        }

        if(fromIdx > toIdx) {
            for (let i = 0; i < size; i++) {
                this.set(toIdx + i, this.get(fromIdx + i))
            }
        } else {
            for (let i = size; i >= 0; i--) {
                this.set(toIdx + i, this.get(fromIdx + i))
            }
        }
    }

    get (ptr) {
        return this.memory[ptr]
    }

    set (ptr, value) {
        this.memory[ptr] = value
    }
}

module.exports = Memorys