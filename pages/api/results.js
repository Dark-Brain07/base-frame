export default async function handler(req, res) {
    const { defi = 38, nfts = 27, gaming = 21, ai = 14, voted, total = 413 } = req.query;

    // Generate SVG image for results
    const svg = `
<svg width="1200" height="628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0052FF"/>
      <stop offset="100%" style="stop-color:#0033A0"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="628" fill="url(#bgGrad)"/>
  
  <!-- Title -->
  <text x="600" y="80" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="48" font-weight="bold">
    📊 Base Builder Poll Results
  </text>
  
  <!-- Subtitle -->
  <text x="600" y="130" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Inter, Arial, sans-serif" font-size="24">
    ${total} builders have voted!
  </text>
  
  ${voted ? `<text x="600" y="170" text-anchor="middle" fill="#00FF88" font-family="Inter, Arial, sans-serif" font-size="20">
    ✓ You voted for ${voted.toUpperCase()}!
  </text>` : ''}
  
  <!-- DeFi Bar -->
  <text x="100" y="230" fill="white" font-family="Inter, Arial, sans-serif" font-size="28">🔵 DeFi</text>
  <text x="1100" y="230" text-anchor="end" fill="white" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="bold">${defi}%</text>
  <rect x="100" y="245" width="1000" height="30" rx="15" fill="rgba(255,255,255,0.2)"/>
  <rect x="100" y="245" width="${defi * 10}" height="30" rx="15" fill="#00D4FF"/>
  
  <!-- NFTs Bar -->
  <text x="100" y="320" fill="white" font-family="Inter, Arial, sans-serif" font-size="28">🎨 NFTs</text>
  <text x="1100" y="320" text-anchor="end" fill="white" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="bold">${nfts}%</text>
  <rect x="100" y="335" width="1000" height="30" rx="15" fill="rgba(255,255,255,0.2)"/>
  <rect x="100" y="335" width="${nfts * 10}" height="30" rx="15" fill="#FF6B6B"/>
  
  <!-- Gaming Bar -->
  <text x="100" y="410" fill="white" font-family="Inter, Arial, sans-serif" font-size="28">🎮 Gaming</text>
  <text x="1100" y="410" text-anchor="end" fill="white" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="bold">${gaming}%</text>
  <rect x="100" y="425" width="1000" height="30" rx="15" fill="rgba(255,255,255,0.2)"/>
  <rect x="100" y="425" width="${gaming * 10}" height="30" rx="15" fill="#9B59B6"/>
  
  <!-- AI Bar -->
  <text x="100" y="500" fill="white" font-family="Inter, Arial, sans-serif" font-size="28">🤖 AI</text>
  <text x="1100" y="500" text-anchor="end" fill="white" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="bold">${ai}%</text>
  <rect x="100" y="515" width="1000" height="30" rx="15" fill="rgba(255,255,255,0.2)"/>
  <rect x="100" y="515" width="${ai * 10}" height="30" rx="15" fill="#2ECC71"/>
  
  <!-- Footer -->
  <text x="600" y="590" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-family="Inter, Arial, sans-serif" font-size="18">
    Built on Base 🔵 | base-frame-poll.vercel.app
  </text>
</svg>`;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return res.status(200).send(svg);
}
