const products = [
    {
        id: 1,
        title: 'Living Things',
        artist: 'Linkin Park',
        price: '20',
        year: '2012',
        description: 'Todas las canciones que contiene el álbum: 1.Lost in the Echo, 2.In my Remains, 3.Burn It down, 4.Lies Greed Misery, 5.Ill Be Gone, 6.Castle of Glass, 7.Victimized, 8.Roads Untraveled. 9.Skin to bone, 10.Until It Breaks, 11.Tinfoil, 12.Powerless',
        image: 'https://i.scdn.co/image/ab67616d0000b273987fb4c5ec8790e9f637a4a4',
    },
    {
        id:2,
        title: 'Terraja',
        artist: 'Peyote Asesino',
        price: '18',
        year: '1998',
        description: 'Todas las canciones que contiene el álbum: 1.Criminal, 2.Guacho, 3.Mal De La cabeza, 4.El Peyote Asesino, 5.Denso, 6.Cable Pelado, 7.Perkins, 8.UR Gay, 9.L Mental, 10.Cama Bionica, 11.De Pedo Y De Tos, 12.Demente',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/43/ad/a7/43ada736-f8da-adeb-b7c8-5e9db2222116/00602567992554.rgb.jpg/1200x1200bf-60.jpg',
    },
    {
        id:3,
        title: 'Grasa',
        artist: 'Naty Peluso',
        price: '25',
        year: '2024',
        description: 'Todas las canciones que contiene el álbum: 1.CORLEONE, 2.APRENDE A AMAR, 3.REAL, 4.LEGENDARIO, 5.ESCALERAS DE METAL, 6.TODO ROTO, 7.NO LES CREO NADA, 8.ENVIDIA, 9.MENINA, 10.IDEAS RADICALES, 11.MANHATAN, 12.EL DÍA QUE PERDÍ MI JUVENTUD, 13.LA PRESA, 14.LA MENTIRA, 15.REMEDIO, 16.MAMÁ',
        image: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202409/20/00105110636528____1__640x640.jpg',
    },
    {
        id:4,
        title: 'Hay que salir',
        artist: 'Chala Madre',
        price: '19',
        year: '2005',
        description: 'Todas las canciones que contiene el álbum: 1.No me dejes, 2.Ligado al pasado, 3.¿Cuánto para Ver?, 4.Solo Queda Hoy, 5.Una señal, 6.La Isla, 7.UN lugar para Reír, 8.Vos Lo Ves, 9.Capital de la Apariencia, 10.Solo Voy, 11.Ya No Le Alcanza, 12.Sale el Sol, Babylon, 13.Un Poco de Suerte, 14.Vamos por Otra',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music49/v4/74/8b/72/748b72e7-0e1a-a34f-2dda-fa64cf37057f/190374607094.jpg/600x600bf-60.jpg',
    },
    
    
]

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
