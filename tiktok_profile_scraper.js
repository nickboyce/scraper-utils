// Select all the div elements with the 'data-e2e="user-post-item"' attribute
const postItems = document.querySelectorAll('div[data-e2e="user-post-item"]');

// Initialize an array to hold your CSV lines
let csvLines = ['Video URL,Image Source,Views'];

// Iterate over each post item to extract the necessary information
postItems.forEach(item => {
// Find the <a> element and get its 'href' attribute
const videoUrl = item.querySelector('a')?.getAttribute('href');

// Find the <source> element and get its 'srcset' attribute
// Note: We split the srcset to get the first URL (assuming it's the one you want)
const imageSource = item.querySelector('source')?.getAttribute('srcset')?.split(',')[0].split(' ')[0];

const caption = item.querySelector('img')?.getAttribute('alt');

// Find the <strong> element with 'data-e2e="video-views"' and get its text content
const views = item.querySelector('strong[data-e2e="video-views"]')?.textContent;

// Construct a CSV line and add it to the array
if (videoUrl && imageSource && views) {
csvLines.push(`${videoUrl}, ${imageSource}, ${views}, ${caption}`);
}
});

// Join the lines into a single CSV string
const csvContent = csvLines.join('\n');

// Here you would typically download the CSV file or print the content.
// For simplicity, let's just log the CSV content to the console.
console.log(csvContent);
