// Vote counts stored in memory (use KV store in production)
let votes = {
    defi: 156,
    nfts: 112,
    gaming: 87,
    ai: 58
};

export default function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        try {
            const { untrustedData } = req.body || {};
            const buttonIndex = untrustedData?.buttonIndex || 1;

            // Record vote based on button pressed
            const categories = ['defi', 'nfts', 'gaming', 'ai'];
            const votedCategory = categories[buttonIndex - 1] || 'defi';
            votes[votedCategory]++;

            // Calculate percentages
            const total = Object.values(votes).reduce((a, b) => a + b, 0);
            const percentages = {};
            for (const [key, value] of Object.entries(votes)) {
                percentages[key] = Math.round((value / total) * 100);
            }

            // Get voter FID
            const fid = untrustedData?.fid || 'anonymous';

            // Return results frame
            const resultsHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://base-frame-poll.vercel.app/api/results?defi=${percentages.defi}&nfts=${percentages.nfts}&gaming=${percentages.gaming}&ai=${percentages.ai}&voted=${votedCategory}&total=${total}" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
  <meta property="fc:frame:button:1" content="🔄 Vote Again" />
  <meta property="fc:frame:button:2" content="📊 Share Results" />
  <meta property="fc:frame:button:2:action" content="link" />
  <meta property="fc:frame:button:2:target" content="https://warpcast.com/~/compose?text=I%20just%20voted%20on%20the%20Base%20Builder%20Poll!%20What%20are%20you%20building?%20🔵" />
  <meta property="fc:frame:post_url" content="https://base-frame-poll.vercel.app/api/vote" />
</head>
<body>
  <h1>Thanks for voting!</h1>
  <p>You voted for: ${votedCategory.toUpperCase()}</p>
  <p>Total votes: ${total}</p>
</body>
</html>`;

            res.setHeader('Content-Type', 'text/html');
            return res.status(200).send(resultsHtml);

        } catch (error) {
            console.error('Vote error:', error);
            return res.status(500).json({ error: 'Failed to process vote' });
        }
    }

    // GET request - return current stats
    const total = Object.values(votes).reduce((a, b) => a + b, 0);
    return res.status(200).json({
        votes,
        total,
        percentages: {
            defi: Math.round((votes.defi / total) * 100),
            nfts: Math.round((votes.nfts / total) * 100),
            gaming: Math.round((votes.gaming / total) * 100),
            ai: Math.round((votes.ai / total) * 100)
        }
    });
}
