class ProblemDTO {
    constructor(title, enunciated, level, rate, tagId, userId) {
        this.title = title,
            this.enunciated = enunciated,
            this.level = parseInt(level),
            this.rate = parseInt(rate),
            this.tagId = parseInt(tagId)
            this.userId = parseInt(userId)
    }
}
module.exports = ProblemDTO