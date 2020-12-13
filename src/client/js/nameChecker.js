function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    const regExpressions = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    return regExpressions.test(inputText)
}

export { checkForName };