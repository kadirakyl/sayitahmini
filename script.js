var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("1-100 arası bir sayı girin.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.textContent = "Tahminin tuttuğum sayıdan düşük.";
            msg2.textContent = "Tahmin sayın: " + no_of_guesses;
            msg3.textContent = "Önceki tahminlerin: " +
            guessed_nums;
        }
        else if(user_guess > answer){
            msg1.textContent = "Tahminin tuttuğum sayıdan yüksek.";
            msg2.textContent = "Tahmin sayın: " + no_of_guesses;
            msg3.textContent = "Önceki tahminlerin: " +
            guessed_nums;
        }
        else if(user_guess == answer){
            msg1.textContent = "Tebrikler bildin!!";
            msg2.textContent = "Doğru cevap: " + answer;
            msg3.textContent = "Toplam "+ no_of_guesses + " denemede buldun.  "+" ";
            document.getElementById("my_btn").disabled = true;
        }
    }
}