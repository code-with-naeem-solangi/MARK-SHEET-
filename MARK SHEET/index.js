
var batchNumbr = Number(prompt('enter your batch number'))


if (batchNumbr === 3) {
    var english = Number(prompt('enter your english marks'));
    var urdu = Number(prompt('enter your urdu marks'));
    var math = Number(prompt('enter your math marks'));
    var aadMarks = english + urdu + math
    var obtaind = 300;
    var percentage = (aadMarks / obtaind) * 100;

    if (percentage >= 80) {
        document.write('your english marks is ' + english + "<br>" + 'your urdu marks is ' + urdu +
            '<br>' + 'your math marks is ' + math + "<br>" + 'total marks is  ' + aadMarks + '<br>' + 'obtaind marks is ' +
            obtaind + "<br>" + "your percentage is " + percentage);
    }
    else if (percentage >= 70) {
        document.write('your english marks is ' + english + "<br>" + 'your urdu marks is ' + urdu +
            '<br>' + 'your math marks is ' + math + "<br>" + 'total marks is ' + aadMarks + '<br>' + 'obtaind marks is ' +
            obtaind + "<br>" + "your percentage is " + percentage);
    }
    else if (percentage >= 60) {
        document.write('your english marks is ' + english + "<br>" + 'your urdu marks is ' + urdu +
            '<br>' + 'your math marks is ' + math + "<br>" + 'total marks is ' + aadMarks + '<br>' + 'obtaind marks is ' +
            obtaind + "<br>" + "your percentage is " + percentage);
    }
    else if (percentage >= 50) {
        document.write('your english marks is ' + english + "<br>" + 'your urdu marks is ' + urdu +
            '<br>' + 'your math marks is ' + math + "<br>" + 'total marks is ' + aadMarks + '<br>' + 'obtaind marks is ' +
            obtaind + "<br>" + "your percentage is " + percentage);
    }
    else if (percentage >= 40) {
        document.write('your english marks is ' + english + "<br>" + 'your urdu marks is ' + urdu +
            '<br>' + 'your math marks is ' + math + "<br>" + 'total marks is ' + aadMarks + '<br>' + 'obtaind marks is ' +
            obtaind + "<br>" + "your percentage is " + percentage);
    }
    else (document.write('your english marks is ' + english + "<br>" + 'your urdu marks is ' + urdu +
        '<br>' + 'your math marks is ' + math + "<br>" + 'total marks is ' + aadMarks + '<br>' + 'obtaind marks is ' +
        obtaind + "<br>" + "your percentage is " + percentage + "<br>" + 'you are faild'));
}
else {
    alert('enter curect batch number');
}


