export function validate(valid) {
    let isValid = true;
    if (valid.required) {
        isValid = isValid && valid.value.toString().trim().length !== 0;
    }
    if (valid.minLength != null && typeof valid.value === 'string') {
        isValid = isValid && valid.value.length >= valid.minLength;
    }
    if (valid.maxLength != null && typeof valid.value === 'string') {
        isValid = isValid && valid.value.length <= valid.maxLength;
    }
    if (valid.min != null && typeof valid.value === 'number') {
        isValid = isValid && valid.value >= valid.min;
    }
    if (valid.max != null && typeof valid.value === 'number') {
        isValid = isValid && valid.value <= valid.max;
    }
    return isValid;
}
//# sourceMappingURL=validation.js.map