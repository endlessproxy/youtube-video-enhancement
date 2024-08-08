export function initTutorial() {
    console.clear();
    console.log(`\n- Main Endpoint: http://localhost:8023/\n`);
    console.log(`- Search Endpoint: http://localhost:8023/search/:channel/:limit \n`);
    console.log(`- Result Endpoint: http://localhost:8023/results \n`);
    console.log(`- ${"\x1b[33m"}Warning: Replace 'id' with the channel ID you want and 'limit' with the number of videos. ${"\x1b[0m"}\n`);
}