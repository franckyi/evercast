export default function extractImgTags(htmlString: string) {
    // Regular expression to match <img> tags
    const imgTagRegex = /<img[^>]*>/g;

    // Use match() to find all <img> tags in the string
    const imgTagsArray = htmlString.match(imgTagRegex);

    // Return the array of <img> tags or an empty array if no matches are found
    return imgTagsArray || [];
}