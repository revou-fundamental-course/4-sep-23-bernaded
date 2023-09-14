
function luas() {
    var s = Number( document.getElementById("nbrSisi").value );
    var hitungluas = s * s;
    document.getElementById("spnResult").innerHTML = "Luas Persegi = " + hitungluas.toFixed(2);
    }

    function keliling() {
        var s = Number( document.getElementById("nbrSisi").value );
        var hitungluas = s * 4;
        document.getElementById("spnResult").innerHTML = "Keliling Persegi =" + hitungluas.toFixed(2);
        }

    function reset(){
        document.getElementById("nbrSisi").value = "";
        document.getElementById("spnResult").innerHTML = "";
       
    }