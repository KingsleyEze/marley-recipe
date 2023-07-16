This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

We need to install all the dependencies.
Ensure you have node js version 16 or newer for the project.

### Install Dependencies
```bash
yarn
or 
npm install
```

### Running Project
```bash
yarn dev
or 
npm run dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Trade Offs

- Use Contentful SDK instead of integrating directly using graphql
- Used Contentful SDK to replace react toolkit for fetching data
- Additional configuration is need to address committing error by using Husky
- Dockerfile configuration would have been nice for deployment
- Unit test coverage should help to capture bugs in the application
- E2E should have also address the integration testing also
- Also use Mui library to help with responsiveness