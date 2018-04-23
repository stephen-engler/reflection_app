
A full stack web app where users can input, save, and bookmark reflections about their past.  Tech used: React, Redux, Saga, Material-ui, Node.js, Express, Postgresql, and Axios. 

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```



## ToDo
- Dialog to confirm delete
- Deploy the project to Heroku
- Add the ability to update an existing reflection
- Move reflection topics into a separate table and use SQL JOINs
- Allow users to include an image with the reflection using [Filestack](https://www.filestack.com/)
- Ability to filter reflections based on topic
