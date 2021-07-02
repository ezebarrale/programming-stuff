import React from 'react';
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.js";

function Home({match}) {
    return (
        <div>
            <ItemListContainer mtch={match}/>
        </div>
    )
}

export default Home;
