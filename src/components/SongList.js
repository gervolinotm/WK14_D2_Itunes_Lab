import React from 'react'

const SongList = ({songs}) => {

    console.log(songs)

   const songComponents = songs.map(song  => {
       return (
           <h3>
               {song['im:name'].label}
           </h3>
       )
   })

   return <div className="song-list">Hello World</div>

}

export default SongList;