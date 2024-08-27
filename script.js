function tweetMessage() {
    const message = "MIRAI TO WA NEEN\n#MiraitowaTH #NeenBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 
