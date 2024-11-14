const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.BEARERTOKEN}`
    }
};

export default async function getEditorCredits(movieid: number) {

    let editorlist: string[] = [];

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/credits?language=en-US`, options);
        const data1 = await response.json();
        if (!response.ok) {
            console.log(`credits api for ${movieid} response was not 200`);
            return editorlist;
        } else {
            if (data1.crew.length) {
                for (const crewResponse of data1.crew) {
                    if (crewResponse['known_for_department'] === "Editing") {
                        editorlist = [...editorlist, crewResponse.name];
                    }
                }
                return editorlist;
            }
        }
    } catch(err){
        return editorlist;
    }    
}