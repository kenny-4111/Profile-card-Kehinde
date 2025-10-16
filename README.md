# Profile Card Project

A responsive and accessible **Profile Card** built using **HTML**, **CSS**, and **Vanilla JavaScript**.  
This project displays a user’s profile information, including their name, bio, avatar, hobbies, dislikes, and social links along with a live timestamp in milliseconds using `Date.now()`.

## Live Demo

- **Live URL:** [https://kenny-4111.github.io/Profile-card-Kehinde/](https://kenny-4111.github.io/Profile-card-Kehinde/)  
- **Repository:** [https://github.com/kenny-4111/Profile-card-Kehinde](https://github.com/kenny-4111/Profile-card-Kehinde)

## Features

- Clean, responsive layout built with Flexbox and media queries  
- Semantic HTML and accessible structure with `alt` text and keyboard-focusable elements  
- Live current time displayed in milliseconds via `Date.now()` (auto-updates every second)  
- Organized sections for user info, hobbies, dislikes, and social links  
- Every visible element includes a `data-testid` attribute for automated testing  

**Test IDs Included**

## Element | Test ID
 Profile card container - `test-profile-card` 
 User name | `test-user-name` 
 User bio | `test-user-bio` 
 User avatar | `test-user-avatar` 
 Social links container | `test-user-social-links` 
 Individual social link (optional) | `test-user-social-<network>` 
 User hobbies list | `test-user-hobbies` 
 User dislikes list | `test-user-dislikes` 
 Current time (milliseconds) | `test-user-time` 

---

## Technologies Used

- **HTML5** – semantic and accessible markup  
- **CSS3** – responsive styling with Flexbox and media queries  
- **Vanilla JavaScript** – DOM manipulation and real-time timestamp (`Date.now()`)

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/kenny-4111/Profile-card-Kehinde.git
2. Navigate into the project directory:
cd Profile-card-Kehinde

3. Open the project:
Either double-click index.html Or open it in VS Code and start a Live Server
