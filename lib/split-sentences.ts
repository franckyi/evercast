export default function splitSentences(inputString: string, separator = ' | ') {
    return inputString.split(separator);
}