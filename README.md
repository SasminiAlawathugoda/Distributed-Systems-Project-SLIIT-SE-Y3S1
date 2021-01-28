# SLIIT Software Engineering ( Year 3, Semester 1)

Project Name - Online Train Ticket Reservation Application

Module Name - Distributed Systems (DS)

Used Technologies - ReactJS, NodeJS, ExpressJS, MongoDB

## Instructions on how to deploy..

1. Create the database

You need MongoDB as the database of this application.
Database name - TrainReservation
Collection names - itemsTrain, trainUser, reservation, paycreditcard, paydialog, verifyEmployee

You can use json files in DatabaseScripts_TrainReservation folder and import those files to each collection.

2. Deploy the back end services in REST_API -> backend

3. Deploy WSO2 Enterprise Integration Project

Go inside the WSO2_EI_Project. 
Copy the file -> SampleTrainTicketReservationServicesCompositeApplication_1.0.0.car
Copy the above to the wso2 server and deploy the project.

4. Deploy the front end(client) in REST_API -> client
Go inside the client folder and go to the command prompt and run "npm install" command.
After that run "npm start" command.

5. Go to localhost:3000 in your browser and log in to the system by creating a user account.

When you log in to the Train Tickets Booking Online, you can see a welcome message above the logout button.
You can search train details by giving train name and you can book train tickets by giving quantity of tickets,date you needed.
If you are a government employee you can get a special discount when reserving your train tickets.
You can verify whether you are a government employee by giving NIC number.
After you book train tickets, your reservation details will be displayed in Train Ticket Reservation section.
You can select the payment method in Train Ticket Reservation via Sampath Bank Credit Card Payment Method or Dialog Mobile Payment Method.
After your payment, customer will receive a payment confirmation email or sms.



