import { movieObject } from './interface'
import getEditorCredits from './creditseditor';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.BEARERTOKEN}`
    }
};

async function discovermovie(year: string) {

    let movieList: movieObject[] = [];
    const url = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&primary_release_year=${year}&sort_by=popularity.desc`;

    try {

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Network response was not ok for movie discovery API: ${response.status}`);
        }

        const data = await response.json();

        if (data.results.length) {
            for (const movie of data.results) {

                let movieListtemp: any = {
                    title: `${movie.title}`,
                    release_date: `${movie.release_date}`,
                    vote_average: parseFloat(`${movie.vote_average}`)
                };

                try {
                    const editorlist = await getEditorCredits(movie.id);
                    if (editorlist && editorlist.length) {
                        movieListtemp.editors = editorlist;
                    }

                } catch (error) {
                    //"is optional in your reponse.""
                    console.log(error);
                }

                movieList.push(movieListtemp);
            }
        }
        const movieListSorted = movieList.slice().sort((a: any, b: any) => b.vote_average - a.vote_average);

        return movieListSorted;
    } catch (error) {
        console.log(error);
        throw new Error(`discover movie API failure`);
    }
}

export = {
    discovermovie
};
