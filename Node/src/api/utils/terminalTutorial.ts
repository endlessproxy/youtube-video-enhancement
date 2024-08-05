export function initTutorial() {
    console.clear();
    console.log(`\n- Main Endpoint: http://localhost:8023/\n`);
    console.log(`- Search Endpoint: http://localhost:8023/api/channel/id/limit\n`);
    console.log(`- ${"\x1b[33m"}Warning: Replace 'id' with the channel ID you want and 'limit' with the number of videos. ${"\x1b[0m"}\n`);
}