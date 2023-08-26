const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');
const question5 = document.getElementById('question5');
const question6 = document.getElementById('question6');
const question7 = document.getElementById('question7');
const question8 = document.getElementById('question8');
const question9 = document.getElementById('question9');
const question10 = document.getElementById('question10');
const question11 = document.getElementById('question11');
const question12 = document.getElementById('question12');
const question13 = document.getElementById('question13');
const question14 = document.getElementById('question14');
const question15 = document.getElementById('question15');
const question16 = document.getElementById('question16');
const question17 = document.getElementById('question17');
const question18 = document.getElementById('question18');
const question19 = document.getElementById('question19');
const question20 = document.getElementById('question20');
let score = 0;
let i = 1;

const questions = []
questions.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20);

const begin = (evnt) => {
    evnt.target.parentNode.hidden = true;
    question1.hidden = false;
}

const next1 = (evnt) => {
    if (document.getElementById('q1').value === '' || document.getElementById('q1p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q1').value;
        a = Number(a);
        let b = document.getElementById('q1p2').value;
        b = Number(b);
        if (a === 14 && b === 21) {
            document.getElementById('correct-feedback').hidden = false;
            question1.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question1.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const continued = () => {
    questions[i].hidden = false;
    document.getElementById('correct-feedback').hidden = true;
    document.getElementById('wrong-feedback').hidden = true;
    i = i + 1;
}

const next2 = (evnt) => {
    if (document.getElementById('q2').value === '' || document.getElementById('q2p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q2').value;
        a = Number(a);
        let b = document.getElementById('q2p2').value;
        b = Number(b);
        if (a === 42 && b === 14) {
            document.getElementById('correct-feedback').hidden = false;
            question2.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question2.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next3 = (evnt) => {
    if (document.getElementById('q3').value === '' || document.getElementById('q3p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q3').value;
        a = Number(a);
        let b = document.getElementById('q3p2').value;
        b = Number(b);
        if (a === 21 && b === 14) {
            document.getElementById('correct-feedback').hidden = false;
            question3.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question3.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next4 = (evnt) => {
    if (document.getElementById('q4').value === '' || document.getElementById('q4p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q4').value;
        a = Number(a);
        let b = document.getElementById('q4p2').value;
        b = Number(b);
        if (a === 43 && b === 217) {
            document.getElementById('correct-feedback').hidden = false;
            question4.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question4.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next5 = (evnt) => {
    if (document.getElementById('q5').value === '' || document.getElementById('q5p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q5').value;
        a = Number(a);
        let b = document.getElementById('q5p2').value;
        b = Number(b);
        if (a === 4 && b === 12) {
            document.getElementById('correct-feedback').hidden = false;
            question5.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question5.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next6 = (evnt) => {
    if (document.getElementById('q6').value === '' || document.getElementById('q6p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else if (document.getElementById('q6').value.includes('/') || document.getElementById('q6p2').value.includes('/')) {
        window.alert('Please enter your answer as a decimal.'); 
    }
    else {
        let a = document.getElementById('q6').value;
        a = Number(a);
        let b = document.getElementById('q6p2').value;
        b = Number(b);
        if (a === 17.5 && b === 17.5) {
            document.getElementById('correct-feedback').hidden = false;
            question6.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else if (document.getElementById('q6').value === '17.50' && document.getElementById('q6p2').value === '17.50') {
            document.getElementById('correct-feedback').hidden = false;
            question6.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question6.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next7 = (evnt) => {
    if (document.getElementById('q7').value === '' || document.getElementById('q7p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else if (document.getElementById('q7').value.includes('$') || document.getElementById('q7p2').value.includes('$')) {
        window.alert('Please remove the dollar sign from your answer.'); 
    }
    else {
        let a = document.getElementById('q7').value;
        a = Number(a);
        let b = document.getElementById('q7p2').value;
        b = Number(b);
        if (a === 7 && b === 10) {
            document.getElementById('correct-feedback').hidden = false;
            question7.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question7.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next8 = (evnt) => {
    if (document.getElementById('q8').value === '' || document.getElementById('q8p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else if (document.getElementById('q7').value.includes('$') || document.getElementById('q7p2').value.includes('$')) {
        window.alert('Please remove the dollar sign from your answer.'); 
    }
    else {
        let a = document.getElementById('q8').value;
        a = Number(a);
        let b = document.getElementById('q8p2').value;
        b = Number(b);
        if (a === 8 && b === 11) {
            document.getElementById('correct-feedback').hidden = false;
            question8.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question8.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next9 = (evnt) => {
    if (document.getElementById('q9').value === '' || document.getElementById('q9p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q9').value;
        a = Number(a);
        let b = document.getElementById('q9p2').value;
        b = Number(b);
        if (a === 88 && b === 44) {
            document.getElementById('correct-feedback').hidden = false;
            question9.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question9.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next10 = (evnt) => {
    if (document.getElementById('q10').value === '' || document.getElementById('q10p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q10').value;
        a = Number(a);
        let b = document.getElementById('q10p2').value;
        b = Number(b);
        if (a === 14 && b === 42) {
            document.getElementById('correct-feedback').hidden = false;
            question10.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question10.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next11 = (evnt) => {
    if (document.getElementById('q11').value === '' || document.getElementById('q11p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q11').value;
        a = Number(a);
        let b = document.getElementById('q11p2').value;
        b = Number(b);
        if (a === 10 && b === 14) {
            document.getElementById('correct-feedback').hidden = false;
            question11.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question11.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next12 = (evnt) => {
    if (document.getElementById('q12').value === '' || document.getElementById('q12p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q12').value;
        a = Number(a);
        let b = document.getElementById('q12p2').value;
        b = Number(b);
        if (a === 22 && b === 35) {
            document.getElementById('correct-feedback').hidden = false;
            question12.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question12.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next13 = (evnt) => {
    if (document.getElementById('q13').value === '' || document.getElementById('q13p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q13').value;
        a = Number(a);
        let b = document.getElementById('q13p2').value;
        b = Number(b);
        if (a === 58 && b === 13) {
            document.getElementById('correct-feedback').hidden = false;
            question13.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question13.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next14 = (evnt) => {
    if (document.getElementById('q14').value === '' || document.getElementById('q14p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else if (document.getElementById('q14').value.includes('.') || document.getElementById('q14p2').value.includes('.')) {
        window.alert('Please enter your answer as a whole number or fraction using "/" as the division symbol.'); 
    }
    else {
        if (document.getElementById('q14').value === '2/3' && document.getElementById('q14p2').value === '1/3') {
            document.getElementById('correct-feedback').hidden = false;
            question14.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question14.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next15 = (evnt) => {
    if (document.getElementById('q15').value === '' || document.getElementById('q15p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q15').value;
        a = Number(a);
        let b = document.getElementById('q15p2').value;
        b = Number(b);
        if (a === 20 && b === 15) {
            document.getElementById('correct-feedback').hidden = false;
            question15.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question15.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next16 = (evnt) => {
    if (document.getElementById('q16').value === '' || document.getElementById('q16p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q16').value;
        a = Number(a);
        let b = document.getElementById('q16p2').value;
        b = Number(b);
        if (a === 11.50 && b === 9) {
            document.getElementById('correct-feedback').hidden = false;
            question16.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question16.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next17 = (evnt) => {
    if (document.getElementById('q17').value === '' || document.getElementById('q17p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q17').value;
        a = Number(a);
        let b = document.getElementById('q17p2').value;
        b = Number(b);
        if (a === 10 && b === 15) {
            document.getElementById('correct-feedback').hidden = false;
            question17.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question17.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next18 = (evnt) => {
    if (document.getElementById('q18').value === '' || document.getElementById('q18p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q18').value;
        a = Number(a);
        let b = document.getElementById('q18p2').value;
        b = Number(b);
        if (a === 11 && b === 27) {
            document.getElementById('correct-feedback').hidden = false;
            question18.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question18.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next19 = (evnt) => {
    if (document.getElementById('q19').value === '' || document.getElementById('q19p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q19').value;
        a = Number(a);
        let b = document.getElementById('q19p2').value;
        b = Number(b);
        if (a === 3 && b === 7) {
            document.getElementById('correct-feedback').hidden = false;
            question19.hidden = true;
            score = score + 100;
            document.getElementById('total-points').innerHTML = score;
        }
        else {
            document.getElementById('wrong-feedback').hidden = false;
            question19.hidden = true;
            document.getElementById('total-point').innerHTML = score;
        }
    }
}

const next20 = (evnt) => {
    if (document.getElementById('q20').value === '' || document.getElementById('q20p2').value === '') {
        window.alert('Please input a valid answer.');
    }
    else {
        let a = document.getElementById('q20').value;
        a = Number(a);
        let b = document.getElementById('q20p2').value;
        b = Number(b);
        if (a === 21 && b === 118) {
            document.getElementById('final').hidden = false;
            question20.hidden = true;
            score = score + 100;
            document.getElementById('scoring').innerHTML = 'Correct! +100 Points';
            let fix = 'mailto:john@myedmaster.com?subject=Quiz without a point system&body=' + (score / 100) + '/20 questions correct'; // Fixed this line
            let mail = document.getElementById('mail');
            mail.setAttribute("href", fix);
            if (score >= 1500) {
                document.getElementById('final-score').innerHTML = `You got ${score} points total. Well done!`
            }
            else {
                document.getElementById('final-score').innerHTML = `You got ${score} points total. Nice!`
            }
        }
        else {
            document.getElementById('final').hidden = false;
            question20.hidden = true;
            document.getElementById('scoring').innerHTML = 'Wrong!';
            let fix = 'mailto:john@myedmaster.com?subject=Quiz with a point system&body=' + (score / 100) + '/20 questions correct'; // Fixed this line
            let mail = document.getElementById('mail');
            mail.setAttribute("href", fix);
            if (score >= 1500) {
                document.getElementById('final-score').innerHTML = `You got ${score} points total. Well done!`
            }
            else {
                document.getElementById('final-score').innerHTML = `You got ${score} points total. Nice!`
            }
        }
    }
}

let final_score = score/100;

document.querySelector('.begin-btn').onclick = begin;
document.querySelector('#btn-one').onclick = next1;
document.getElementById('cont1').onclick = continued;
document.getElementById('cont2').onclick = continued;
document.getElementById('btn-two').onclick = next2;
document.getElementById('btn-three').onclick = next3;
document.getElementById('btn-four').onclick = next4;
document.getElementById('btn-five').onclick = next5;
document.getElementById('btn-six').onclick = next6;
document.getElementById('btn-seven').onclick = next7;
document.getElementById('btn-eight').onclick = next8;
document.getElementById('btn-nine').onclick = next9;
document.getElementById('btn-ten').onclick = next10;
document.getElementById('btn-eleven').onclick = next11;
document.getElementById('btn-twelve').onclick = next12;
document.getElementById('btn-thirteen').onclick = next13;
document.getElementById('btn-fourteen').onclick = next14;
document.getElementById('btn-fifteen').onclick = next15;
document.getElementById('btn-sixteen').onclick = next16;
document.getElementById('btn-seventeen').onclick = next17;
document.getElementById('btn-eighteen').onclick = next18;
document.getElementById('btn-nineteen').onclick = next19;
document.getElementById('btn-twenty').addEventListener('click', next20);