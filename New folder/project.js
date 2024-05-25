function handleSearch() {
  search(); // Call the search function
}

function handleKeyPress(event) {
    if (event.keyCode === 13) { // Check if the key pressed was Enter
      event.preventDefault(); // Prevent the default action of the Enter key
      search(); // Call the search function
    }
  }
  
  function search() {
    // Get the value of the search bar
    let searchValue = document.getElementById("searchBar").value.toLowerCase();
    
    // Define the links and keywords
    const links = {
      "affogato": "affogato.html",
      "cappucino": "cappuccino.html",
      "americano": "americano.html",
      "espresso": "espresso.html",
      "frappuccino":"frappuccino.html",
      "irish":"irish.html",
      "mocha":"mocha.html",
      "ristretto":"ristretto.html",
      "recipe mocha":"recipe_mocha.html",
      "recipe americano":"recipe_affogato.html",
      "recipe affogato":"recipe_affogato.html",
      "recipe irish":"recipe_irish.html",
      "recipe frappuccino":"recipe_cappucino.html",
      "recipe cappucino":"recipe_espresso.html",
      "recipe ristretto":"recipe_ristretto.html",
      "recipe affogato":"recipe_affogato.html",
      "mocha recipe":"recipe_mocha.html",
      "americano recipe":"recipe_affogato.html",
      "affogato recipe":"recipe_affogato.html",
      "irish recipe":"recipe_irish.html",
      "frappuccino recipe":"recipe_cappucino.html",
      "cappucino recipe":"recipe_espresso.html",
      "ristretto recipe":"recipe_ristretto.html",
      "affogato recipe":"recipe_affogato.html"
    };
    
    // Check if the search value matches any of the keywords
    if (links[searchValue]) {
      // Open the corresponding link
      window.open(links[searchValue], "_self");
    } else {
      // Display an error message if the search value doesn't match any of the keywords
      alert("No matching result found.");
    }
  }

  const inputs = document.querySelectorAll('input, textarea');

  // Add event listener to each input field
  inputs.forEach(input => {
    input.addEventListener('keydown', (event) => {
      // If the user presses the Enter key
      if (event.keyCode === 13) {
        // Get the index of the current input
        const currentIndex = Array.from(inputs).indexOf(event.target);

        // If this is not the last input, move focus to the next input
        if (currentIndex < inputs.length - 1) {
          inputs[currentIndex + 1].focus();
        }
      }
    }
    )
  }
  );

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    alert("Thanks for submitting the form!"); // Show an alert message
    event.target.submit(); // Submit the form
  }