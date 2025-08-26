 const menstrual = document.getElementById("menstrual");
 const c_menstrual = document.getElementById("c_menstrual");

    menstrual.addEventListener("mouseover", function() {
        menstrual.style.backgroundColor = "#e63946";
        c_normal.style.display = "none";
        c_menstrual.style.display = "block";

        });
    menstrual.addEventListener("mouseout", function() {
        menstrual.style.backgroundColor = "#F5F5F5";
        c_menstrual.style.display = "none"; // Nascondi
        c_normal.style.display = "block";
        });

 const follicular = document.getElementById("follicular");
 const c_follicular = document.getElementById("c_follicular");

    follicular.addEventListener("mouseover", function() {
        follicular.style.backgroundColor = "#4CC9F0";
        c_follicular.style.display = "block";
        c_normal.style.display = "none";
    });
    follicular.addEventListener("mouseout", function() {
        follicular.style.backgroundColor = "#F5F5F5";
        c_follicular.style.display = "none";
        c_normal.style.display = "block";
    });

 const ovulation = document.getElementById("ovulation");
 const c_ovulatory = document.getElementById("c_ovulatory");

    ovulation.addEventListener("mouseover", function() {
        ovulation.style.backgroundColor = "#FFB703";
        c_ovulatory.style.display = "block";
        c_normal.style.display = "none";

    });
    ovulation.addEventListener("mouseout", function() {
        ovulation.style.backgroundColor = "#F5F5F5";
        c_ovulatory.style.display = "none";
        c_normal.style.display = "block";
    });

 const luteal = document.getElementById("luteal");
 const c_luteal = document.getElementById("c_luteal");

    luteal.addEventListener("mouseover", function() {
        luteal.style.backgroundColor = "#9D4EDD";
        c_luteal.style.display = "block";
        c_normal.style.display = "none";
    });
    luteal.addEventListener("mouseout", function() {
        luteal.style.backgroundColor = "#F5F5F5";
        c_luteal.style.display = "none";
        c_normal.style.display = "block";
    });