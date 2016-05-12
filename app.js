$(document).ready(function () {
    for (var i = 1; i <= 100; i++) {
        if ((i % 5 == 0) && (i % 3 == 0)) {
            document.write("FizzBuzz");
            document.write('<br/>');
        } else if (i % 5 == 0) {
            document.write("Buzz");
            document.write('<br/>');
        } else if (i % 3 == 0) {
            document.write("Fizz");
            document.write('<br/>');
        } else {
            document.write(i);
            document.write('<br/>');
        }
    }
});
