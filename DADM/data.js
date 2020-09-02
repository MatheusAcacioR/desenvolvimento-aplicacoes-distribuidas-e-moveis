var data = new Date();

exports.returnDay = function() {
    return data.getDate();
}

exports.returnMonth = function() {
    return data.getMonth() + 1;
}

exports.returnYear = function() {
    return data.getYear();
}

exports.returnHours = function() {
    return data.getHours();
}

exports.returnMinutes = function() {
    return data.getMinutes();
}