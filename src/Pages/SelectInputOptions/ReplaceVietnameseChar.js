
const replaceWith = (charactersToReplace, charactersReplacement, word) => {
    let newWord = word
    for (let i=0;i<charactersToReplace.length;i++){
        newWord = newWord.replace(charactersToReplace[i],charactersReplacement)
    }
    return newWord
}

const replaceVietnameseChar = (word) => {

    let currentWord = word

    const a = "aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬ"
    currentWord = replaceWith(a,"a",currentWord)

    const d = "dDđĐ"
    currentWord = replaceWith(d,"d",currentWord)

    const e = "eEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆ"
    currentWord = replaceWith(e,"e",currentWord)

    const i = "iIìÌỉỈĩĨíÍịỊ"
    currentWord = replaceWith(i,"i",currentWord)

    const o = "oOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢ"
    currentWord = replaceWith(o,"o",currentWord)

    const u = "uUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰ"
    currentWord = replaceWith(u,"u",currentWord)

    const y = "yYỳỲỷỶỹỸýÝỵỴ"
    currentWord = replaceWith(y,"y",currentWord)


    return currentWord
}
export default replaceVietnameseChar;
