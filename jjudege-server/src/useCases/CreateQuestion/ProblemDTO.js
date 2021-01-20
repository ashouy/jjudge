class ProblemDTO {
    constructor(title, enunciated, level, rate) {
        this.title = title,
            this.enunciated = enunciated,
            this.level = parseInt(level),
            this.rate = parseInt(rate)
    }
}
export default ProblemDTO