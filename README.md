# Using Create-React-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to show CRUD
opration on list of Employees in React.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Dmployee` data model
basically is collection of random data to show in the list

```javascript
employee = {
    // id: number,
    id: 1,
    // name: string,
    name: 'John',
    // age: number,
    age: 30,
    // salary: number,
    salary: '12k NIS',
    // avatar url: string,
    avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    // role:string
    role: 'cooker',
    // role: email string
    email: "p.mormon@example.com", dealMode: 'full time',
    // work status: string [ test period, full time, part time ]
    status: 'test period',
    // statusPeriod: string, [details about the status]  
    statusPeriod: '2 months'
}
```