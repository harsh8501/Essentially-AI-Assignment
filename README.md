# Essentially-AI-Assignment

For Implementing a page for displaying the daily statistical data of a particular stock for a particular day by using polygon.ai
 for solving this i have implemented it using by :
1) I have used <Table/> Component for rendering table which will show stocks types with the updated stats till yesterday,
     and button for every stock row for knowing all the information further with this button.
2) I have provided a calender for selecting the date with the easiest way for getting the specified stat for specified stock 
    , by default is Yesterday because todays data wont be precise and complete for today's date.
3) After clicking for button in a table of top 50 stock stats the whole information div of perferred stock will appear with all information like
    Company Name ,Address ,Location,Currency,Market capital,Employees.
4) Along with that i have used <DailyStatsIcon/> for showing a visualized data for Lowest Price,Highest Price,Open Price,Close Price,Transactions,Volume.

For Implementing a way for further UI and user freindly experience I have added some features Like:
1) Show digital clock for NY time Market .
2) Shown the status of market for stock whether closed/Open currently.
3) Added Market exchanges Knowledge latest for the user knowledge.

For handling load and easiness for not making multiple api calls for imformation i have done:
1) Used stats of (Open Price,Close Price,Lowest Price,Highest Price, Volume and Transactions) 
    used the Top 50 stats data because it the latest and precise data with wholesome.
2) Verified data before making api call for further security.



# Install dependencies with this command:
```bash
npm install
```

# Run the application with this command:
```bash
npm start
```

## Tech Stack
* Node JS
* React.js
* Express.js
* HTML,CSS,JS
* Polygon API
* Material UI
