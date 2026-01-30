# Base Builder Poll - Farcaster Frame

A simple voting frame for the Base ecosystem, built for Farcaster.

## 🔵 What is this?

This is a Farcaster Frame that lets Base builders vote on their favorite development category:
- 🔵 DeFi
- 🎨 NFTs  
- 🎮 Gaming
- 🤖 AI

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/base-frame)

1. Click the button above
2. Connect your GitHub account
3. Deploy!
4. Update `NEXT_PUBLIC_URL` environment variable to your deployed URL

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
base-frame/
├── pages/
│   ├── api/
│   │   ├── image.js     # Initial frame image
│   │   ├── vote.js      # Vote handler
│   │   └── results.js   # Results image
│   └── index.js         # Main page
├── public/
│   └── index.html       # Static fallback
└── package.json
```

## 🔗 Frame Endpoints

| Endpoint | Description |
|----------|-------------|
| `/` | Main page with share button |
| `/api/image` | Initial voting frame image |
| `/api/vote` | POST endpoint for votes |
| `/api/results` | Dynamic results image |

## 🧪 Testing Your Frame

1. Deploy to Vercel
2. Go to [Warpcast Frame Validator](https://warpcast.com/~/developers/frames)
3. Paste your URL
4. Test the buttons!

## 📊 Share on Warpcast

After deploying, share your frame by casting:

```
What are you building on Base? 🔵

Vote now!
[YOUR_VERCEL_URL]
```

## 🏆 Built for Talent Protocol

This frame was built as part of the Base Developer Quest for Talent Protocol Builder Rewards.

## 📝 License

MIT
