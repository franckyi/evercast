export default function extractSrcUrls(htmlString: string) {
    const regex = /src="https[^"]*"/g;
    const matches = htmlString.match(regex);
    return matches?.map(match => match.replace('src="', '').replace('"', ''));
}