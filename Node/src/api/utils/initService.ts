export function initFunc() {
    const port = process.env.PORT || 8023;

    console.clear();
    console.log(`\n- Main Endpoint: http://localhost:${port}/api/channel/id/limit\n`);
    console.log(`- ${"\x1b[33m"}Warning: Replace 'id' with the channel ID you want and 'limit' with the number of videos. ${"\x1b[0m"}\n`);
}