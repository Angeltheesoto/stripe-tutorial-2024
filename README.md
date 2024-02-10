# stripe-tutorial-2024

## How to clone:

1. Fork the repository by clicking the fork button in the top right.

2. Once you have the repository forked, you want to click on the green dropdown button that says "Code" and copy the HTTPS url.

3. Next you want to go to your terminal and in the directory you wish to clone the code type the following:

```
git clone [your forked repo url]
```

4. After you have the project up and running you want to have two terminals open, one that is within the directory of the server, and one that is within the directory of client.

```
./client
./server
```

5. Within the client folder, add these two lines in a .env file:

```
REACT_APP_CLIENT_URL = http://localhost:3000/
REACT_APP_SERVER_URL = http://localhost:5000/
```

6. Also within the client terminal and then within the server terminal run:

```
npm install
```

7. Finally to start the project, within the server terminal run:

```
npm start
```

You can then do the same within the client terminal and react should open the project within your browser at:

"http://localhost:3000"

To view the server, you can go to http://localhost:5000.
