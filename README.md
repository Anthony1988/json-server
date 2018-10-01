# installing
- install node@latest
- create folder in which you want to clone the folder and change to folder
- open command line:
  1. copy paste the following: git clone https://github.com/Anthony1988/json-server.git
  2. in installed folder => type in this command: npm install
  3. type in the command: npm install json-server -g save

# running
- open a second command line in the same folder:
  1. In the first command line window type in the command: json-server --watch ./src/fakeDB.json
  2. In the second command line window type in the command: npm run dev
  3. Open an internet browser and go to http://localhost:3000