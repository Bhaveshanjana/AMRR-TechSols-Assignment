## Assigment Overview
This is my submission for the **AMRR-TechSols-Assignment**,
I have built a fully responsive E-Commerce Website using React  for the frontend and Node.js with Express for the backend. It includes product listing, adding, and detailed view functionality as per the instructions.

## Key Features

#### Frontend (React.js with Tailwind CSS)
- Fully Responsive Design: The website is designed to be fully responsive, providing an optimal viewing experience across various devices, from desktops to mobile phones.
- Home Page: An engaging home page that serves as the entry point to the e-commerce site.
- View All Products Page:
  - Displays a list of all available products.
  - Each product listing includes the Item Name and Cover Image.
  - Dynamically updates to show newly added items.
- Add Item Page:
  - A dedicated form for adding new products.
  - Input fields for:
    - Item Name
    - Item Type (e.g., Shirt, Pant, Shoes, Sports Gear)
    - Item Description
    - Item Cover Image
    - Item Additional Images (multiple images can be uploaded)
- Upon successful submission, a "Item successfully added" message is displayed.

### Product Detail View:
- Clicking on any item from the "View All Products" page opens a detailed view  modal.
- This view displays all details of the item, including:
  - Item Name
  - Item Type
  - Item Description
  - All uploaded images in a carousel.
  - Includes an "Enquire" button.

### Backend (Node.js with Express.js)
- Manages product data and serves it to the frontend.
- Handles the submission of new product details.

### Feedback
I’m open to suggestions and improvements!
Thank you for reviewing my assignment.

### To run this project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/Bhaveshanjana/AMRR-TechSols-Assignment.git

```

### 2. Install dependencies

```bash
cd client && npm i
cd server && npm i

```
### 3. Run the development server

#### In one terminal

```bash
- cd client
- npm run dev

```

#### In another terminal

```bash
- cd server
- npx nodemon

```