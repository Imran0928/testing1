function addRecommendation() {
    const newRecommendation = document.getElementById('new-recommendation').value;
    if (newRecommendation) {
        const recommendationsSection = document.getElementById('recommendations');
        const newDiv = document.createElement('div');
        newDiv.classList.add('recommendation');
        newDiv.innerHTML = `<p>"${newRecommendation}"</p>`;
        recommendationsSection.appendChild(newDiv);
        document.getElementById('new-recommendation').value = ''; // clear the input
    }
}
