export enum SIGNATURE_USAGE {
    RESET = "reset"
}

export enum SUCCESS_MESSAGES {
    CHECK_MAIL = "Check your email to verify your account",
    VERIFIED = "Verified",
    SUCCESS = "Success",
    PROFILE_UPDATED = "Profile updated",
}

export enum ERROR_MESSAGES {
    EMAIL_REQUIRED = "Email is required",
    INVALID_VERIFICATION_LINK ="invalid verification link",
    EMAIL_AND_PWD_REQUIRED = "Email and password are required",
    LOGIN_FAILED = "Login failed",
    DEFAULT = "an error occured.",
    PAGE_NOT_FOUND = "Page Not Found"
}

export enum CODES {
    SUCCESS = "SUCCESS",
    DELETED = "DELETED",
    NOT_FOUND = "NOT_FOUND"
}

export enum ERROR_CAUSES {
    BAD_REQUEST = "BAD_REQUEST",
    UNAUTHORIZED = "UNAUTHORIZED",
    NOT_FOUND = "NOT_FOUND",
    DUPLICATE = "DUPLICATE"
}

export enum STATUS_CODES {
    SUCCESS = 200,
    DUPLICATE = 409,
    NOT_FOUND = 404,
    UNAUTHORIZED = 403,
    BAD_REQUEST = 400,
    SERVER_ERROR = 500
}

export enum ROLES {
    USER = "user",
    ADMIN = "admin",
    PREMIUM = "premium"
}
