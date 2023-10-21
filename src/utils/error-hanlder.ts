
import constants from "./constants"


class ErrorHandler extends Error {

    constructor(message: string, statusCode: Number) {
        super(message)
        // @ts-ignore
        this.statusCode = statusCode
        ErrorHandler.captureStackTrace(this, this.constructor)
    }

    static notFound = (message: string = constants.ServerMessage.NOT_FOUND) => new ErrorHandler(message, constants.StatusCode.NOT_FOUND)

    static badRequest = (message: string = constants.ServerMessage.BAD_REQUEST) => new ErrorHandler(message, constants.StatusCode.BAD_REQUEST)

    static serverError = (message: string = constants.ServerMessage.SERVER_ERROR) => new ErrorHandler(message, constants.StatusCode.SERVER_ERROR)


}

export default ErrorHandler