export default async function handler(req, res) {
    // Generate the initial frame image
    const svg = `
<svg width="1200" height="628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0052FF"/>
      <stop offset="100%" style="stop-color:#0033A0"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="628" fill="url(#bgGrad)"/>
  
  <!-- Decorative circles -->
  <circle cx="150" cy="150" r="200" fill="rgba(255,255,255,0.05)"/>
  <circle cx="1050" cy="500" r="250" fill="rgba(255,255,255,0.05)"/>
  
  <!-- Base Logo Circle -->
  <circle cx="600" cy="180" r="80" fill="white" filter="url(#glow)"/>
  <text x="600" y="200" text-anchor="middle" font-size="60">🔵</text>
  
  <!-- Title -->
  <text x="600" y="320" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="bold">
    What are you building
  </text>
  <text x="600" y="390" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="bold">
    on Base?
  </text>
  
  <!-- Subtitle -->
  <text x="600" y="460" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Inter, Arial, sans-serif" font-size="28">
    Vote for your favorite development category!
  </text>
  
  <!-- Button hints -->
  <rect x="120" y="500" width="220" height="50" rx="25" fill="rgba(255,255,255,0.2)"/>
  <text x="230" y="535" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="24">🔵 DeFi</text>
  
  <rect x="360" y="500" width="220" height="50" rx="25" fill="rgba(255,255,255,0.2)"/>
  <text x="470" y="535" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="24">🎨 NFTs</text>
  
  <rect x="600" y="500" width="220" height="50" rx="25" fill="rgba(255,255,255,0.2)"/>
  <text x="710" y="535" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="24">🎮 Gaming</text>
  
  <rect x="840" y="500" width="220" height="50" rx="25" fill="rgba(255,255,255,0.2)"/>
  <text x="950" y="535" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="24">🤖 AI</text>
  
  <!-- Footer -->
  <text x="600" y="600" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-family="Inter, Arial, sans-serif" font-size="18">
    Tap a button below to vote! • Built on Base
  </text>
</svg>`;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=60');
    return res.status(200).send(svg);
}
