const facts = [
    "The average menstrual cycle lasts 28 days, but it can range from 21 to 35.",
    "During menstruation, a person loses on average 30–80 ml of blood.",
    "Not all cycles are the same: length and symptoms vary greatly.",
    "Ovulation usually occurs halfway through the cycle, but it can shift by several days.",
    "Menstrual cramps are caused by prostaglandins, substances that help the uterus contract.",
    "Doing light physical activity during the cycle can reduce pain and improve mood.",
    "Nutrition also affects the cycle: iron-rich foods help compensate for the loss.",
    "Stress can delay or bring forward the onset of the cycle.",
    "The menstrual cycle influences energy, mood, and creativity throughout its phases.",
    "It is normal for cycles to be irregular in the first years after menarche."
];

const randomIndex = Math.floor (Math.random()*facts.length);
const factBox = document.getElementById("random-fact");
factBox.textContent = facts[randomIndex];

const link = document.getElementById("refresh");
link.addEventListener("click", function(event) {
  event.preventDefault();
  location.reload(); 
});