

const getMessage = (obj) => {
    var msn = '';

    for (var ele in obj) {
        msn += ele.toUpperCase() + ': ' + obj[ele] + "\n";
    }

    return msn;
}

module.exports = getMessage;