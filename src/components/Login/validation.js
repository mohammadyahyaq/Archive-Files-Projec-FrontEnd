export function validateName(name){
    const re = /^[\u0621-\u064A]+\s[\u0621-\u064A]+$/;
    return re.test(name);
}

export function validateEmail(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

export function validatePassword(password) {
    // varify that the password is at least 8 characters, there is at least one uppercase, lowercase letter, and number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
}