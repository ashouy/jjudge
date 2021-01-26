
class SolutionDTO {
    constructor(code, language, problemId, userId) {
        this.code = code,
            this.language = language,
            this.problemId = parseInt(problemId),
            this.userId = parseInt(userId)

    }
}

module.exports = SolutionDTO