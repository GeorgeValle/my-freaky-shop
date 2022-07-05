

// quedó como o muestra de como está conformada la base de datos.
    const products = [
        {id:'01',title:'Casco Darth Vader', category:"Helmet", description:'Casco de Darth Vader de Star Wars', price:'85000',stock:5, img:'../images/Casco-Darth-Vader-Helmet.jpg '},
        {id:'02',title:'Casco Boba Fett', category:"Helmet", description:'Casco de Boba Fett de Star Wars',price:'79000',stock:5 , img:'../images/Casco-The-Boba-Fett-Helmet.jpg'},
        {id:'03',title:'Casco The Mandalorian', category:"Helmet", description:'Casco de Mando de Star wars',price:'80000',stock:8, img:'../images/Casco-Mandalorian-Helmet.jpg'}, 
        {id:'04',title:'Figura Legolas', category:"Figura", description:'Legolas de Lord of the Rings',price:'14500',stock:3, img:'../images/Figura-LoftR-Legolas.jpg'}, 
        {id:'05',title:'Figura Gandalf', category:"Figura", description:'Gandalf de Lord of the Rings',price:'13500',stock:3, img:'../images/Figura-LoftR-Gandalf.jpg'}, 
        {id:'06',title:'Figura Gimli', category:"Figura", description:'Gimli de Lord of the Rings',price:'14500',stock:3, img:'../images/figura-LoftR-Gimli.jpg'}, 
        {id:'07',title:'Comic Injustice OMNIBUS Vol 1', category:"Comic", description:'Comic de DC serie Injustice Gods among us - VOl 1',price:'27500',stock:7, img:'../images/Comic-Injustice-Gods-Among-Us-Omnibus-Vol-1.jpg'}, 
        {id:'08',title:'Comic Caballero Luna Cuenta atrás', category:"Comic", description:'Comic Marvel Vol 1 cuenta hacía la oscuridad',price:'5720',stock:15, img:'../images/Comic-Caballero-Luna-Vol-1.jpg'}, 
        {id:'09',title:'Comic He-Man', category:"Comic", description:'Comic He-Man and Master of the Universe - colleccion mini comics completa',price:'15400',stock:6, img:'../images/Comic-Heman.jpg'}, 
        {id:'10',title:'Figura Daniel Larusso', category:"Figura", description:'Figura de acción de Daniel Larusso - Cobra Kai',price:'10900',stock:2, img:'../images/Figura-Cobra-Kai-Daniel-Larusso.jpg'}, 
        {id:'11',title:'Figura Jhonny Lawrence', category:"Figura", description:'Figura de acción de Johnny Lawrence - Cobra Kai ',price:'10900',stock:2, img:'../images/Figura-Cobra-Kai-Johnny-Lawrence.jpg'}, 
        {id:'12',title:'Funko Pop BloodHound ', category:"Funko-Pop", description:'Funko del personaje BloodHound del juego Apex Legend',price:'5500',stock:5, img:'../images/Funko-Apex-Legends-Bloodhound.jpg'}, 
        {id:'13',title:'Funko Pop Caustic', category:"Funko-Pop", description:'Funko del personaje Caustic del juego Apex Legend',price:'5500',stock:5, img:'../images/Funko-Apex-Legends-Caustic.jpg'}, 
        {id:'14',title:'Funko Pop Gibraltar', category:"Funko-Pop", description:'Funko del personaje Gibraltar del juego Apex Legend',price:'5500',stock:5, img:'../images/Funko-Apex-Legends-Gibraltar.jpg'}
    ]

    export const getData=new Promise((resolve, reject)=>{
        let verification=true;
        setTimeout(()=>{
            verification
            ?resolve(products)
            :reject(console.log("Error Inesperado, vuelva a intentar en unos minutos"));
        },3000)    
    })

    