const products = [
    {
        id: 1,
        title: 'Living Things',
        artist: 'Linkin Park',
        price: '20',
        year: '2012',
        category: 'Rock/Metal' , 
        description: 'Todas las canciones que contiene el álbum: 1.Lost in the Echo, 2.In my Remains, 3.Burn It down, 4.Lies Greed Misery, 5.Ill Be Gone, 6.Castle of Glass, 7.Victimized, 8.Roads Untraveled. 9.Skin to bone, 10.Until It Breaks, 11.Tinfoil, 12.Powerless',
        image: 'https://i.scdn.co/image/ab67616d0000b273987fb4c5ec8790e9f637a4a4',
    },
    {
        id:2,
        title: 'Terraja',
        artist: 'Peyote Asesino',
        price: '18',
        year: '1998',
        category: 'Rock/Metal', 
        description: 'Todas las canciones que contiene el álbum: 1.Criminal, 2.Guacho, 3.Mal De La cabeza, 4.El Peyote Asesino, 5.Denso, 6.Cable Pelado, 7.Perkins, 8.UR Gay, 9.L Mental, 10.Cama Bionica, 11.De Pedo Y De Tos, 12.Demente',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/43/ad/a7/43ada736-f8da-adeb-b7c8-5e9db2222116/00602567992554.rgb.jpg/1200x1200bf-60.jpg',
    },
    {
        id:3,
        title: 'Grasa',
        artist: 'Naty Peluso',
        price: '25',
        year: '2024',
        category: 'Alternativo',
        description: 'Todas las canciones que contiene el álbum: 1.CORLEONE, 2.APRENDE A AMAR, 3.REAL, 4.LEGENDARIO, 5.ESCALERAS DE METAL, 6.TODO ROTO, 7.NO LES CREO NADA, 8.ENVIDIA, 9.MENINA, 10.IDEAS RADICALES, 11.MANHATAN, 12.EL DÍA QUE PERDÍ MI JUVENTUD, 13.LA PRESA, 14.LA MENTIRA, 15.REMEDIO, 16.MAMÁ',
        image: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202409/20/00105110636528____1__640x640.jpg',
    },
    {
        id:4,
        title: 'Hay que salir',
        artist: 'Chala Madre',
        price: '19',
        year: '2005',
        category: 'Reggae',
        description: 'Todas las canciones que contiene el álbum: 1.No me dejes, 2.Ligado al pasado, 3.¿Cuánto para Ver?, 4.Solo Queda Hoy, 5.Una señal, 6.La Isla, 7.UN lugar para Reír, 8.Vos Lo Ves, 9.Capital de la Apariencia, 10.Solo Voy, 11.Ya No Le Alcanza, 12.Sale el Sol, Babylon, 13.Un Poco de Suerte, 14.Vamos por Otra',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music49/v4/74/8b/72/748b72e7-0e1a-a34f-2dda-fa64cf37057f/190374607094.jpg/600x600bf-60.jpg',
    },
    {
        id:5,
        title: 'Amo',
        artist: 'bring Me The Horizon',
        price: '19',
        year: '2005',
        category: 'Rock/Metal',
        description: 'Todas las canciones que contiene el álbum: 1.No me dejes, 2.Ligado al pasado, 3.¿Cuánto para Ver?, 4.Solo Queda Hoy, 5.Una señal, 6.La Isla, 7.UN lugar para Reír, 8.Vos Lo Ves, 9.Capital de la Apariencia, 10.Solo Voy, 11.Ya No Le Alcanza, 12.Sale el Sol, Babylon, 13.Un Poco de Suerte, 14.Vamos por Otra',
        image: 'https://www.rocktotal.com/wp-content/uploads/2019/01/Bring-Me-The-Horizon-Amo-Album.jpg',
    },
    {
        id:6,
        title: 'Vivi En Do',
        artist: 'Dread Mar I',
        price: '19',
        year: '2005',
        category:'Reggae',
        description: 'Todas las canciones que contiene el álbum: 1.No me dejes, 2.Ligado al pasado, 3.¿Cuánto para Ver?, 4.Solo Queda Hoy, 5.Una señal, 6.La Isla, 7.UN lugar para Reír, 8.Vos Lo Ves, 9.Capital de la Apariencia, 10.Solo Voy, 11.Ya No Le Alcanza, 12.Sale el Sol, Babylon, 13.Un Poco de Suerte, 14.Vamos por Otra',
        image: 'https://i.scdn.co/image/ab67616d0000b2738dede181c935e3f5cdd246c7'
    },
    {
        id:7,
        title: 'Vessel',
        artist: 'Twenty One Pilots',
        price: '19',
        year: '2005',
        category: 'Alternativo',
        description: 'Todas las canciones que contiene el álbum: 1.No me dejes, 2.Ligado al pasado, 3.¿Cuánto para Ver?, 4.Solo Queda Hoy, 5.Una señal, 6.La Isla, 7.UN lugar para Reír, 8.Vos Lo Ves, 9.Capital de la Apariencia, 10.Solo Voy, 11.Ya No Le Alcanza, 12.Sale el Sol, Babylon, 13.Un Poco de Suerte, 14.Vamos por Otra',
        image: 'https://i.scdn.co/image/ab67616d0000b2736caad685af37c08063be928d'
    },
    {
        id:8,
        title: 'What Ill Leave Behind',
        artist: 'Void of Vision',
        price: '19',
        year: '2005',
        category: 'Rock/Metal',
        description: 'Todas las canciones que contiene el álbum: 1.No me dejes, 2.Ligado al pasado, 3.¿Cuánto para Ver?, 4.Solo Queda Hoy, 5.Una señal, 6.La Isla, 7.UN lugar para Reír, 8.Vos Lo Ves, 9.Capital de la Apariencia, 10.Solo Voy, 11.Ya No Le Alcanza, 12.Sale el Sol, Babylon, 13.Un Poco de Suerte, 14.Vamos por Otra',
        image: 'https://f4.bcbits.com/img/a2290089108_65'
    },
    {
        id:9,
        title: 'Chrysalism',
        artist: 'Milk and Bone',
        price: '19',
        year: '2005',
        category: 'Electronica/ElectroPop',
        description: 'Todas las canciones que contiene el álbum: 1.No me dejes, 2.Ligado al pasado, 3.¿Cuánto para Ver?, 4.Solo Queda Hoy, 5.Una señal, 6.La Isla, 7.UN lugar para Reír, 8.Vos Lo Ves, 9.Capital de la Apariencia, 10.Solo Voy, 11.Ya No Le Alcanza, 12.Sale el Sol, Babylon, 13.Un Poco de Suerte, 14.Vamos por Otra',
        image: 'https://f4.bcbits.com/img/a0901635197_10.jpg'
    },
    {
        id:10,
        title: 'Parvadomus',
        artist: 'Once tiros',
        price: '19',
        year: '2005',
        category: 'Rock/Metal',
        description: 'Todas las canciones que contiene el álbum: 1.No me dejes, 2.Ligado al pasado, 3.¿Cuánto para Ver?, 4.Solo Queda Hoy, 5.Una señal, 6.La Isla, 7.UN lugar para Reír, 8.Vos Lo Ves, 9.Capital de la Apariencia, 10.Solo Voy, 11.Ya No Le Alcanza, 12.Sale el Sol, Babylon, 13.Un Poco de Suerte, 14.Vamos por Otra',
        image: 'https://i.scdn.co/image/ab67616d0000b273dd52ab9e29a307f96a62e356'
    },
    {
        id:11,
        title: 'El after del after',
        artist: 'Ysy A',
        price: '19',
        year: '2005',
        category:'Electronica/ElectroPop',
        description: 'Todas las canciones que contiene el álbum: 1.No me dejes, 2.Ligado al pasado, 3.¿Cuánto para Ver?, 4.Solo Queda Hoy, 5.Una señal, 6.La Isla, 7.UN lugar para Reír, 8.Vos Lo Ves, 9.Capital de la Apariencia, 10.Solo Voy, 11.Ya No Le Alcanza, 12.Sale el Sol, Babylon, 13.Un Poco de Suerte, 14.Vamos por Otra',
        image: 'https://i.scdn.co/image/ab67616d0000b2732fca3c0524e8246fdf93cb55'
    },
    {
        id:12,
        title: 'Cut All THe Wires 2009 - 2011',
        artist: 'Wye Oak',
        price: '19',
        year: '2005',
        category:'Indie',
        description: 'Todas las canciones que contiene el álbum: 1.No me dejes, 2.Ligado al pasado, 3.¿Cuánto para Ver?, 4.Solo Queda Hoy, 5.Una señal, 6.La Isla, 7.UN lugar para Reír, 8.Vos Lo Ves, 9.Capital de la Apariencia, 10.Solo Voy, 11.Ya No Le Alcanza, 12.Sale el Sol, Babylon, 13.Un Poco de Suerte, 14.Vamos por Otra',
        image: 'https://f4.bcbits.com/img/a3174105644_10.jpg'
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
