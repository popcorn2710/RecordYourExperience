import styles from "./card.module.css"
import { useEffect, useState } from "react";

function Body(){
    const [activeTab, setActiveTab] = useState("movies");
    const [i, setI] = useState(0);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=15ad0628753904c8b0a6814470d14667&page=1")
            .then(response => response.json())
            .then(data => {
                const poster1 = data.results[i].poster_path;
                const poster2 = data.results[i+1].poster_path;
                const poster3 = data.results[i+2].poster_path;

                document.getElementById("Poster1").style.backgroundImage =`url("https://image.tmdb.org/t/p/w500${poster1}")`;
                document.getElementById("Poster2").style.backgroundImage =`url("https://image.tmdb.org/t/p/w500${poster2}")`;
                document.getElementById("Poster3").style.backgroundImage =`url("https://image.tmdb.org/t/p/w500${poster3}")`;

            });
    });
    return(
        <div className="hero">
            <div className="hero1">
                <div className="titlediv">
                    <h1 className="title1">RECORD YOUR EXPERIENCE</h1>
                    <h1 className="title2">RECORD YOUR EXPERIENCE</h1>
                    <h1 className="title3">RECORD YOUR EXPERIENCE</h1>
                </div>
                <div className="details">
                    <p className="details_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odit id labore at illum quibusdam harum quaerat est voluptate soluta aut earum, ducimus eius corporis beatae doloremque. Nisi, iure id.</p>
                </div>
                <button className="arrow_button"></button>
                <div ></div>
                <div className="parentbar">
                        <div className="firstbar1">
                            <div className={styles.card101}></div>
                            <div className={styles.card102}></div>
                            <div className={styles.card103}></div>
                            <div className={styles.card104}></div>
                            <div className={styles.card105}></div>
                            <div className={styles.card106}></div>
                            <div className={styles.card107}></div>
                            <div className={styles.card108}></div>
                            <div className={styles.card101}></div>
                            <div className={styles.card102}></div>
                            <div className={styles.card103}></div>
                            <div className={styles.card104}></div>
                            <div className={styles.card105}></div>
                            <div className={styles.card106}></div>
                            <div className={styles.card107}></div>
                            <div className={styles.card108}></div>
                        </div>
                        <div className="secondbar1">
                            <div className={styles.card201}></div>
                            <div className={styles.card202}></div>
                            <div className={styles.card203}></div>
                            <div className={styles.card204}></div>
                            <div className={styles.card205}></div>
                            <div className={styles.card206}></div>
                            <div className={styles.card207}></div>
                            <div className={styles.card208}></div>
                            <div className={styles.card201}></div>
                            <div className={styles.card202}></div>
                            <div className={styles.card203}></div>
                            <div className={styles.card204}></div>
                            <div className={styles.card205}></div>
                            <div className={styles.card206}></div>
                            <div className={styles.card207}></div>
                            <div className={styles.card208}></div>

                        </div>
                        <div className="thirdbar1">
                            <div className={styles.card301}></div>
                            <div className={styles.card302}></div>
                            <div className={styles.card303}></div>
                            <div className={styles.card304}></div>
                            <div className={styles.card305}></div>
                            <div className={styles.card306}></div>
                            <div className={styles.card307}></div>
                            <div className={styles.card308}></div>
                            <div className={styles.card301}></div>
                            <div className={styles.card302}></div>
                            <div className={styles.card303}></div>
                            <div className={styles.card304}></div>
                            <div className={styles.card305}></div>
                            <div className={styles.card306}></div>
                            <div className={styles.card307}></div>
                            <div className={styles.card308}></div>
                        </div>
                        <div className="forthbar1">
                            <div className={styles.card401}></div>
                            <div className={styles.card402}></div>
                            <div className={styles.card403}></div>
                            <div className={styles.card404}></div>
                            <div className={styles.card405}></div>
                            <div className={styles.card406}></div>
                            <div className={styles.card407}></div>
                            <div className={styles.card408}></div>
                            <div className={styles.card401}></div>
                            <div className={styles.card402}></div>
                            <div className={styles.card403}></div>
                            <div className={styles.card404}></div>
                            <div className={styles.card405}></div>
                            <div className={styles.card406}></div>
                            <div className={styles.card407}></div>
                            <div className={styles.card408}></div>  
                        </div>
                </div>

            </div>
            <div className="Divbar">
                <div className="base"></div>
                <div className="cards">
                    <div className={styles.card1}></div>
                    <div className={styles.card2}></div>
                    <div className={styles.card3}></div>
                    <div className={styles.card4}></div>
                    <div className={styles.card5}></div>
                    <div className={styles.card6}></div>
                    <div className={styles.card7}></div>
                    <div className={styles.card8}></div>
                    <div className={styles.card1}></div>
                    <div className={styles.card2}></div>
                    <div className={styles.card3}></div>
                    <div className={styles.card4}></div>
                    <div className={styles.card5}></div>
                    <div className={styles.card6}></div>
                    <div className={styles.card7}></div>
                    <div className={styles.card8}></div>
                </div>
            </div>
            <div className="hero2">
                <div className="tablinks">
                    <button className={activeTab === "games" ? "games active" : "games"} onClick={() => setActiveTab("games")}>Games</button>
                    <button className={activeTab === "movies" ? "movies active" : "movies"} onClick={() => setActiveTab("movies")}>Movies</button>
                </div>

                <div className="tabcontents" id="games" style={{ display: activeTab === "games" ? "flex" : "none" }}>
                    <div className={styles.card111}></div>
                    <div className={styles.card112}></div>
                    <div className={styles.card113}></div>
                </div>
                <div className="tabcontents" id="movies" style={{ display: activeTab === "movies" ? "flex" : "none" }}>
                    <div id="Poster1" className={styles.card121}></div>
                    <div id="Poster2" className={styles.card122}></div>
                    <div id="Poster3" className={styles.card123}></div>
                </div> 
                <div className="buttongp">
                    <button id="left" className="left_button" onClick={()=>setI(i-1)}>‹</button>
                    <button id="right" className="right_button" onClick={()=>setI(i+1)}>›</button>
                </div>
            </div>
        </div>
        
    );
}

export default Body