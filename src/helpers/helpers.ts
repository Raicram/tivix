export const handleFigName = (text: String) => {
    const splitted = text.split(',');
    
    if(splitted.length > 1) {
        return `${splitted[0]}, ${splitted[1]}`
    }
    return splitted[0];
}
