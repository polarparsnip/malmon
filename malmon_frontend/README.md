# Malmon - Frontend

## Setup

To run site in development you need a .env.local file with the following information:
NEXT_PUBLIC_API_URL=http://localhost:3000 **# If server is run on port 3000**

Otherwise:
NEXT_PUBLIC_API_URL=**url path to web server**

Then run the following commands:

```bash
npm run install # if node modules havent been installed already
npm run dev # runs development mode
```

Open [http://localhost:3000](http://localhost:3000) in a browser to view the site. Or open [http://localhost:3001](http://localhost:3001) if server is being hosted on port 3000.

This is a [Next.js](https://nextjs.org/) site bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
