window.onload = function() {
    const semesterInputs = document.querySelectorAll('input[type="number"]');
    const totalGPAInput = document.getElementById('totalGPA');

    semesterInputs.forEach(input => {
        input.addEventListener('input', calculateGPA);
    });

    function calculateGPA() {
        let totalPoints = 0;
        let totalCredits = 0;

        // Calculate total points and credits
        semesterInputs.forEach(input => {
            if (input.value !== '' && !isNaN(input.value)) {
                totalPoints += parseFloat(input.value);
                totalCredits += 1; // Assuming each semester is 1 credit
            }
        });

        // Calculate and display total GPA
        const GPA = totalPoints / totalCredits;
        totalGPAInput.value = GPA.toFixed(2); // Displaying GPA with 2 decimal places
    }
};
