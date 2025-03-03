document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    let index = 0;
    
    function nextSlide() {
        index++;
        if (index >= slides.children.length) {
            index = 0;
        }
        updateSlidePosition();
    }
    
    function updateSlidePosition() {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }
    
    setInterval(nextSlide, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.innerHTML = `
        <h2>Contact Us About Your Catering Inquiry</h2>
        <label for="first-name">First Name (Required)</label>
        <input type="text" id="first-name" name="first-name" required>

        <label for="last-name">Last Name (Required)</label>
        <input type="text" id="last-name" name="last-name" required>

        <label for="email">Email (Required)</label>
        <input type="email" id="email" name="email" required>

        <label for="phone">Phone Number (Required)</label>
        <input type="tel" id="phone" name="phone" required>

        <label for="company">Company (Optional)</label>
        <input type="text" id="company" name="company">

        <label for="address1">Address 1 (Required)</label>
        <input type="text" id="address1" name="address1" required>

        <label for="address2">Address 2 (Optional)</label>
        <input type="text" id="address2" name="address2">

        <label for="city">City (Required)</label>
        <input type="text" id="city" name="city" required>

        <label for="state">State (Required)</label>
        <input type="text" id="state" name="state" required>

        <label for="zip">Zip Code (Required)</label>
        <input type="text" id="zip" name="zip" required>

        <label for="event-date">Event Date (Required)</label>
        <input type="date" id="event-date" name="event-date" required>

        <label for="start-time">Start Time (Required)</label>
        <input type="time" id="start-time" name="start-time" required>

        <label for="end-time">End Time (Required)</label>
        <input type="time" id="end-time" name="end-time" required>

        <label for="event-type">Type of Event (Required)</label>
        <select id="event-type" name="event-type" required>
            <option value="">Select an event type</option>
            <option>Alumni</option>
            <option>Bachelor / Bachelorette</option>
            <option>Birthday</option>
            <option>Cocktail Reception</option>
            <option>Corporate Lunch</option>
            <option>Engagement</option>
            <option>Fundraiser</option>
            <option>Graduation</option>
            <option>Holiday</option>
            <option>Meeting / Presentation</option>
            <option>Photo / Film Shoot</option>
            <option>Private Dinner</option>
            <option>Rehearsal Dinner</option>
            <option>Shower</option>
            <option>Sporting Event</option>
            <option>Wedding</option>
            <option>Other</option>
        </select>

        <label for="num-people">Number of People (Required)</label>
        <input type="number" id="num-people" name="num-people" required>

        <label for="additional-info">Additional Information (Optional)</label>
        <textarea id="additional-info" name="additional-info"></textarea>

        <button type="submit">Submit</button>
    `;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const mailtoLink = `mailto:hapidsushi@gmail.com?subject=Catering Inquiry&body=${encodeURIComponent([...formData].map(([key, val]) => `${key}: ${val}`).join("\n"))}`;
        window.location.href = mailtoLink;
    });
});