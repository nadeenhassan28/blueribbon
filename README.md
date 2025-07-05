# Blue Ribbon Backend Internship Task

This project is a backend API built with NestJS for the Blue Ribbon internship task.

---

##  How to Run

### 1. Clone the repository

```bash
git clone https://github.com/nadeenhassan28/blueribbon.git
cd blue-ribbon-backend

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create a `.env` file in the root folder

Add the following to your `.env` file:

```
DB_HOST=jyyfpibvozhhepjccbbj.supabase.co
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=Nadotest@28
DB_NAME=postgres
```

If you prefer to keep your password private for public GitHub repositories, you can replace `Nadotest@28` with your own Supabase database password.

---

### 4. Start the server

Run in development mode:

```bash
npm run start:dev
```

Your API will be available at:

```
http://localhost:3000
```

---

## ✅ API Endpoints

### ✅ Sports

- **POST** `/sports`  
  Create a new sport.  
  Example JSON body:
  ```json
{
    "name": "Tennis",
    "subscriptionPrice": 100,
    "allowedGender": "mix"
}
  ```

- **GET** `/sports`  
  Get all sports.

- **GET** `/sports/:id`  
  Get a specific sport by ID.

- **PUT** `/sports/:id`  
  Update a sport.

- **DELETE** `/sports/:id`  
  Delete a sport.

---

### ✅ Members

- **POST** `/members`  
  Create a new member.  
  Example JSON body:
  ```json
{
    "name": "Nadeen Hassan",
    "email": "nadeen@example.com",
    "gender": "female",
    "phoneNumber": "01003909955"
}
  ```

- **GET** `/members`  
  Get all members.

- **GET** `/members/:id`  
  Get details of a specific member by ID.

- **PUT** `/members/:id`  
  Update a member.

- **DELETE** `/members/:id`  
  Delete a member.

---

### ✅ Subscriptions

- **POST** `/subscriptions/:memberId/:sportId`  
  Subscribe a member to a sport.

- **GET** `/subscriptions/:memberId`  
  Get all sports that a member is subscribed to.

- **DELETE** `/subscriptions/:memberId/:sportId`  
  Unsubscribe a member from a sport.

---

## ✅ Tech Stack

- NestJS
- TypeORM
- PostgreSQL (Supabase)

---

## ✅ Notes

- A `.env` file is required for the database connection.
- All endpoints use DTO validation to ensure safe input data.

---

## Author

- Nadeen Hassan

---

## License

This project is licensed under the MIT License.
