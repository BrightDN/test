export default function getWebProjectsData(){
    const getData = setWebProjectData(); 
    return getData;
}

function setWebProjectData(){
    const dataSetter= [
        {
            "type":"webproject",
            "name":"Pokemon Bingo",
            "thumbnail":"null",
            "websiteLink":"https://brightdn.github.io/pokeTools/bingo.html",
            "codeLink":"https://github.com/BrightDN/pokeTools/blob/main/bingo.html",
            "usedFiles":"null",
            "relatedProjects":"null"
        },
        {
            "type":"webproject",
            "name":"Store Manager",
            "thumbnail":"null",
            "websiteLink":"null",
            "codeLink":"null",
            "usedFiles":"null",
            "relatedProjects":"null"
        }
                    ]
    
    return dataSetter;
}
