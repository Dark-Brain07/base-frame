import Head from 'next/head';

const FRAME_URL = process.env.NEXT_PUBLIC_URL || 'https://base-frame-poll.vercel.app';

export default function Home() {
    return (
        <>
            <Head>
                <title>Base Builder Poll - Farcaster Frame</title>
                <meta name="description" content="Vote for your favorite Base development category!" />

                {/* Frame Meta Tags */}
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content={`${FRAME_URL}/api/image`} />
                <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
                <meta property="fc:frame:button:1" content="🔵 DeFi" />
                <meta property="fc:frame:button:2" content="🎨 NFTs" />
                <meta property="fc:frame:button:3" content="🎮 Gaming" />
                <meta property="fc:frame:button:4" content="🤖 AI" />
                <meta property="fc:frame:post_url" content={`${FRAME_URL}/api/vote`} />

                {/* Open Graph */}
                <meta property="og:title" content="What are you building on Base?" />
                <meta property="og:description" content="Vote for your favorite Base development category!" />
                <meta property="og:image" content={`${FRAME_URL}/api/image`} />
            </Head>

            <main style={styles.main}>
                <div style={styles.container}>
                    <div style={styles.logo}>🔵</div>
                    <h1 style={styles.title}>Base Builder Poll</h1>
                    <p style={styles.subtitle}>What are you building on Base?</p>

                    <div style={styles.buttons}>
                        <button style={styles.btn}>🔵 DeFi</button>
                        <button style={styles.btn}>🎨 NFTs</button>
                        <button style={styles.btn}>🎮 Gaming</button>
                        <button style={styles.btn}>🤖 AI</button>
                    </div>

                    <div style={styles.card}>
                        <h3 style={styles.cardTitle}>📊 How to Use</h3>
                        <ol style={styles.list}>
                            <li>Share this frame on Warpcast</li>
                            <li>Tap one of the 4 buttons to vote</li>
                            <li>See live results and share!</li>
                        </ol>
                    </div>

                    <div style={styles.shareSection}>
                        <h3 style={styles.shareTitle}>Share on Warpcast</h3>
                        <a
                            href={`https://warpcast.com/~/compose?text=${encodeURIComponent('What are you building on Base? 🔵\n\nVote in this poll!')}&embeds[]=${encodeURIComponent(FRAME_URL)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.shareBtn}
                        >
                            🚀 Cast this Frame
                        </a>
                    </div>

                    <div style={styles.footer}>
                        <p>Built with 💙 on Base</p>
                        <p style={styles.credits}>For Talent Protocol Builder Rewards</p>
                    </div>
                </div>
            </main>
        </>
    );
}

const styles = {
    main: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0052FF 0%, #0033A0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    container: {
        textAlign: 'center',
        color: 'white',
        maxWidth: '500px',
    },
    logo: {
        fontSize: '64px',
        marginBottom: '16px',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '8px',
    },
    subtitle: {
        fontSize: '1.2rem',
        opacity: '0.9',
        marginBottom: '32px',
    },
    buttons: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        marginBottom: '32px',
    },
    btn: {
        padding: '16px',
        fontSize: '1.1rem',
        border: '2px solid white',
        background: 'rgba(255,255,255,0.1)',
        color: 'white',
        borderRadius: '12px',
        cursor: 'pointer',
    },
    card: {
        background: 'rgba(255,255,255,0.15)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
    },
    cardTitle: {
        marginBottom: '16px',
        fontSize: '1.2rem',
    },
    list: {
        textAlign: 'left',
        paddingLeft: '20px',
        lineHeight: '1.8',
    },
    shareSection: {
        marginBottom: '32px',
    },
    shareTitle: {
        marginBottom: '12px',
        fontSize: '1rem',
    },
    shareBtn: {
        display: 'inline-block',
        padding: '14px 32px',
        background: 'white',
        color: '#0052FF',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '1.1rem',
    },
    footer: {
        opacity: '0.7',
        fontSize: '0.9rem',
    },
    credits: {
        fontSize: '0.8rem',
        marginTop: '4px',
    },
};
