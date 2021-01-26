class AvaliationDTO{
    constructor(problemTitle, userId){
        this.problemTitle = problemTitle,
        this.userId = parseInt(userId),
        this.status = 0, //enqueue
        this.status = 1 //incorrect
    }
}

module.exports = AvaliationDTO