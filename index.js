function Leer() {
    const music = document.getElementById('input').value;
    Spotify(music);
    
   
  }
  
  const Spotify=async(music)=>{

    const url =  `https://spotify23.p.rapidapi.com/search/?q=${music}&type=albums&offset=0&limit=10&numberOfTopResults=10`;
    const options = {
        method: 'GET',
        headers: {
                'X-RapidAPI-Key': '78eb27c39emshbf4bdd363bed885p151c2bjsn4499ab3463e3',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const resultado = await result.albums.items;
        //console.log(resultado);

        resultado.map((p)=>{
                      
            document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
            <img width='100%' src=${p.data.coverArt.sources[0].url} alt="No hay poster"></img>
            </div>`;

       })


    } catch (error) {
        console.error(error);
    }
  };
 
  
  
  
  
 