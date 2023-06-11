## Instructions to run this App Locally

1. Clone the repository (git clone https://github.com/ramkiran2521/Assignment_Kiran_Kumar_R.git)
2. In the project directory, you can run:
### npm install

Creates node_modules folder

### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## App Contains 3 Routes - ALL, YOUR, BLOCKED

#### 1. All route 

        - Lists all the cards
        - Search is implemented to search card by name
        - filter is implemented to filter out cards based on card type(Burner, Subscription)

#### 2. Your route

        - Lists the cards according to owner_id (http://localhost:3000/your/<owner_id>). Owner_id = 1,2,3,4,5,6

#### 2. Blocked route

        - Lists the cards which has a status as blocked
