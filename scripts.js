        async sendViaNetlify(formData) {
            try {
                const form = new FormData();
                form.append('name', formData.name);
                form.append('email', formData.email);
                form.append('message', formData.message);

                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(form).toString()
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                return { success: true, response };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    

    function showFormStatus(isSuccess, message) {
        
        const existingStatus = document.querySelector('.form-status');
        if (existingStatus) {
            existingStatus.remove();
        }

    
        const statusDiv = document.createElement('div');
        statusDiv.className = `form-status ${isSuccess ? 'success' : 'error'}`;
        statusDiv.textContent = message;
        
      
        Object.assign(statusDiv.style, {
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            color: 'white',
            backgroundColor: isSuccess ? '#28a745' : '#dc3545',
            textAlign: 'center'
        });

     
        const form = document.getElementById('contact-form');
        form.parentNode.insertBefore(statusDiv, form.nextSibling);

        
        setTimeout(() => {
            if (statusDiv.parentNode) {
                statusDiv.remove();
            }
        }, 5000);
    }