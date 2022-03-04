# Basic CRUD Datatables.js using MEN Stack
> author: [alviansm](http://github.com/alviansm)
> Demo: [Demo Link Heroku](https://express-crud-datatables-alvian.herokuapp.com/)
<br>

## How to Install?
- `npm install` to install dependency
- configure mongodb database
- `.env` contain 2 variable:
```
MONGO_URI='mongodb://localhost:27017/customer-datatables'
SECRET_KEY='customerdatatablestest'
```
`MONGO_URI` is the mongodb uri connection and `SECRET_KEY` is web application secret key, set to random variable for more secure secret_key.
- `npm run start` or other custom script available at `package.json` to run the app (use nodemon to continuesly run node app for development server)
- Enjoy

## Having issue or suggestion?
> Contact the author in the github or instagram social media
- [Instagram](http://instagram.com/alviansmaulana)

### ToDo
- [X] Datatables view setup
- [X] Customer model
- [X] CRUD
- [ ] Testing
- [ ] Documentation