    // Example function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form data
        const formData = new FormData(event.target);
        
        // Process form data or perform other actions
        // ...
      }
      
      // Attach event listener to the form submission
      const form = document.querySelector('.payment-form');
      form.addEventListener('submit', handleSubmit);
    