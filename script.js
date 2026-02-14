document.addEventListener('DOMContentLoaded', () => {
    const localImagePool = [
        { id: "13.66", name: "View of the Domaine Saint-Joseph" },
{ id: "13.130", name: "A Ship in a Stormy Sea" },
{ id: "1972.118.281", name: "Nursery on Schenkweg" },
{ id: "1974.356.32", name: "A Road in Louveciennes" },
{ id: "1975.1.160", name: "Trees and Houses Near the Jas de Bouffan" },
{ id: "1975.1.163", name: "Valley with Fir " },
{ id: "1975.1.164", name: "Pines Along the Shore" },
{ id: "1975.1.167", name: "View of Saint-Valéry-sur-Somme" },
{ id: "1975.1.168", name: "The Palace of Westminster" },
{ id: "1975.1.180", name: "Railroad Bridge over the Marne at Joinville" },
{ id: "1975.1.182", name: "The Rocky Path in the Morvan" },
{ id: "1975.1.194", name: "Olive Trees at Collioure" },
{ id: "1975.1.202", name: "Versailles" },
{ id: "1975.1.208", name: "The Town Beach" },
{ id: "1975.1.209", name: "Evening Calm" },
{ id: "1975.1.642", name: "Landscape with a Distant Town" },
{ id: "1975.1.644", name: "A View of Moulins" },
{ id: "1975.1.691", name: "Landscape" },
{ id: "1975.280.2", name: "Ship by Moonlight" },
{ id: "1975.280.4", name: "Shepherd with a Flock of Sheep" },
{ id: "1977.258.2", name: "New York Harbor with Brooklyn Bridge" },
{ id: "1978.493", name: "The Outer Harbor of Brest" },
{ id: "1979.272", name: "Mountain Lake Scene" },
{ id: "1979.490.4", name: "Sea Cove" },
{ id: "1980.342", name: "Landscape at Saint-Ouen" },
{ id: "1985.117", name: "Newburyport Meadows" },
{ id: "1988.221", name: "Porte de la Reine at Aigues-Mortes" },
{ id: "1990.196", name: "A Forest at Dawn with a Deer Hunt" },
{ id: "1991.130", name: "Arques-la-Bataille" },
{ id: "1992.103.4", name: "The Seine at Bougival" },
{ id: "1993.132", name: "Wheat Field with Cypresses" },
{ id: "1994.420", name: "Mont Sainte-Victoire" },
{ id: "1996.382", name: "Surf, Isles of Shoals" },
{ id: "1997.149.2", name: "View of Cagnes" },
{ id: "1998.325.1", name: "Olive Trees" },
{ id: "1998.325.2", name: "Water Lilies" },
{ id: "1999.442", name: "The Kearsarge at Boulogne" },



{ id: "2001.202.5", name: "Poppy Fields near Argenteuil" },
{ id: "2001.39", name: "Lago Avernus" },
{ id: "2001.45", name: "View near Rouen" },
{ id: "2002.62.3", name: "Gray Weather, Grande Jatte" },
{ id: "2003.42.1", name: "Edge of a Wood" },
{ id: "2003.42.3", name: "Classical Landscape with Figures" },
{ id: "2003.42.4", name: "Lake Fucino and the Abruzzi Mountains" },
{ id: "2003.42.12", name: "View of Beirut" },
{ id: "2003.42.13", name: "Waterfall at Terni" },
{ id: "2003.42.40", name: "A Shepherd and a Rider on a Country Lane" },
{ id: "2003.42.44", name: "View in the Gardens of the Villa d'Este" },
{ id: "2003.42.45", name: "View of Porta Pinciana from the Gardens of the Villa Ludovisi" },
{ id: "2003.42.48", name: "View of the Colosseum and the Arch of Constantine from the Palatine" },
{ id: "2003.42.54", name: "The Banks of the Rance, Brittany" },
{ id: "2003.435", name: "The Brook in the Woods" },
{ id: "2009.400.109", name: "Landscape with the Pyramid of Gaius Cestius, Rome" },
{ id: "2009.400.110", name: "View of the Colosseum, Rome" },
{ id: "29.100.64", name: "Mont Sainte-Victoire and the Viaduct of the Arc River Valley" },
{ id: "29.100.67", name: "The Gulf of Marseille Seen from L'Estaque" },
{ id: "29.100.112", name: "La Grenouillère" },
{ id: "29.100.113", name: "Bridge over a Pond of Water Lilies" },
{ id: "29.100.194", name: "Rocks at Fontainebleau" },








{ id: "49.30", name: "Cypresses" },



{ id: "54.143.2", name: "A Farm in Brittany" },
{ id: "56.13", name: "The Flowering Orchard" },
{ id: "56.135.1", name: "View of Vétheuil" },
{ id: "56.135.4", name: "Morning on the Seine near Giverny" },
{ id: "56.135.5", name: "Ile aux Fleurs near Vétheuil" },
{ id: "56.135.7", name: "View of the Seacoast near Wargemont in Normandy" },
{ id: "56.135.9", name: "Hills around the Bay of Moulin Huet, Guernsey" },
{ id: "57.181", name: "Gardanne" },
{ id: "59.16.5", name: "View of the Seine" },



{ id: "61.190", name: "The Farm at Les Collettes, Cagnes" },
{ id: "61.101.5", name: "The Pool at Jas de Bouffan" },
{ id: "64.210", name: "The Bodmer Oak, Fontainebleau Forest" },



{ id: "71.60", name: "The Farrier" }
    ];
    const canvasTopList = [
        { rank: 5, title: "12 Angry Men", director: "Sidney Lumet", score: 92.32, year: 1957, poster: "images4/xxx/12angryman.webp" },
        { rank: 5, title: "100 metros", director: "Sidney Lumet", score: 75.13, year: 2016, poster: "images4/xxx/100m.webp" },
       { rank: 5, title: "12 Years a Slave", director: "Steve McQueen", score: 85.08, year: 2013, poster: "images4/xxx/12year.webp" },
       { rank: 5, title: "2001: A Space Odyssey", director: "Stanley Kubrick", score: 92.22, year: 1968, poster: "images4/xxx/2001aspace.webp" },
{ rank: 5, title: "127 Hours", director: "Danny Boyle", score: 79.84, year: 2010, poster: "images4/xxx/127.webp" },
{ rank: 5, title: "1917", director: "Sam Mendes", score: 84.45, year: 2019, poster: "images4/xxx/1917.webp" },
{ rank: 5, title: "20,000 Leagues Under the Sea", director: "Richard Fleischer", score: 80.51, year: 1954, poster: "images4/xxx/20000.webp" },
{ rank: 5, title: "2046", director: "Wong Kar-Wai", score: 84.36, year: 2004, poster: "images4/xxx/2046.webp" },
{ rank: 5, title: "21", director: "Robert Luketic", score: 69.61, year: 2008, poster: "images4/xxx/21.webp" },
{ rank: 5, title: "25th Hour", director: "Spike Lee", score: 87.08, year: 2002, poster: "images4/xxx/25saat.webp" },
{ rank: 5, title: "28 Days", director: "Betty Thomas", score: 64.21, year: 2000, poster: "images4/xxx/28days.webp" },
{ rank: 5, title: "3 Idiots", director: "Rajkumar Hirani", score: 87.06, year: 2009, poster: "images4/xxx/3idiots.webp" },
{ rank: 5, title: "9,75", director: "Uluç Bayraktar", score: 73.06, year: 2020, poster: "images4/xxx/975.webp" },


 { rank: 4, title: "A.I. Artificial Intelligence", director: "Steven Spielberg", score: 87.11, year: 2001, poster: "images4/a/ai.webp" },
{ rank: 5, title: "A Clockwork Orange", director: "Stanley Kubrick", score: 91.45, year: 1971, poster: "images4/a/aclock.webp" },
{ rank: 5, title: "American History X", director: "Tony Kaye", score: 88.32, year: 1998, poster: "images4/a/americanhistoryx.webp" },
 { rank: 5, title: "Ahlat Ağacı", director: "Nuri Bilge Ceylan", score: 86.02, year: 2018, poster: "images4/a/ahlatagaci.webp" },
{ rank: 5, title: "Adaptation", director: "Spike Jonze", score: 82.02, year: 2002, poster: "images4/a/adaptation.webp" },
{ rank: 5, title: "Amelie", director: "Jean-Pierre Jeunet", score: 80.71, year: 2001, poster: "images4/a/amelie.webp" },
{ rank: 5, title: "Ali'nin Sekiz Günü", director: "Cemal Şan", score: 70.39, year: 2009, poster: "images4/a/alinin.webp" },
{ rank: 5, title: "American Beauty", director: " Sam Mendes", score: 80.91, year: 1999, poster: "images4/a/americanbeauty.webp" },
{ rank: 5, title: "American Fiction", director: " Cord Jefferson", score: 74.32, year: 2023, poster: "images4/a/americanfiction.webp" },
{ rank: 5, title: "American Psycho", director: "Mary Harron", score: 84.71, year: 2000, poster: "images4/a/americanpsycho.webp" },
{ rank: 5, title: "Anatomy of a Murder", director: "Otto Preminger", score: 88.71, year: 1959, poster: "images4/a/anatomyofamurder.webp" },
{ rank: 5, title: "Another Round", director: "Thomas Vinterberg", score: 75.46, year: 2020, poster: "images4/a/anotherround.webp" },
{ rank: 5, title: "Apocalypse Now", director: "Francis Ford Coppola", score: 89.71, year: 1979, poster: "images4/a/apocalypsenow.webp" },
{ rank: 5, title: "Apocalypto", director: "Mel Gibson", score: 78.45, year: 2006, poster: "images4/a/apocalypto.webp" },
{ rank: 5, title: "Arabesk", director: "Ertem Eğilmez", score: 80.44, year: 1989, poster: "images4/a/arabesk.webp" },
{ rank: 5, title: "Arrival", director: "Denis Villeneuve", score: 77.62, year: 2016, poster: "images4/a/arrival.webp" },
{ rank: 5, title: "As Far as I Can Walk", director: "Stefan Arsenijević", score: 76.21, year: 2021, poster: "images4/a/canwalk.webp" },
{ rank: 5, title: "Asteroid City", director: "Wes Anderson", score: 73.83, year: 2023, poster: "images4/a/asteroidcity.webp" },

{ rank: 5, title: "Babylon", director: "Damien Chazelle", score: 88.4, year: 2022, poster: "images4/b/babylon.webp" },
{ rank: 5, title: "Banyo", director: "Mustafa Altıoklar", score: 60, year: 2005, poster: "images4/b/banyo.webp" },
{ rank: 5, title: "Barda", director: "Serdar Akar", score: 70.4, year: 2007, poster: "images4/b/barda.webp" },
{ rank: 5, title: "Bekleme Odası", director: "Zeki Demirkubuz", score: 79.88, year: 2004, poster: "images4/b/bekleme.webp" },
{ rank: 5, title: "Bir Zamanlar Anadolu'da", director: "Nuri Bilge Ceylan", score: 91.28, year: 2011, poster: "images4/b/birzamanlaranadoluda.webp" },
{ rank: 5, title: "Braveheart", director: "Mel Gibson", score: 87.34, year: 1995, poster: "images4/b/braveheart.webp" },
{ rank: 5, title: "Burn After Reading", director: " Ethan Coen, Joel Coen", score: 77.34, year: 2008, poster: "images4/b/burnafter.webp" },
{ rank: 5, title: "Brothers ", director: "Jim Sheridan", score: 80.34, year: 2009, poster: "images4/b/brothers.webp" },


{ rank: 5, title: "City of God", director: "Fernando Meirelles", score: 91.39, year: 2002, poster: "images4/c/cityofgod.webp" },
{ rank: 5, title: "C Blok", director: "Zeki Demirkubuz", score: 86.09, year: 1994, poster: "images4/c/cblok.webp" },
 { rank: 5, title: "Come and See", director: "Elem Klimov", score: 91.47, year: 1985, poster: "images4/c/comeandsee.webp" },
 { rank: 5, title: "Cinema Paradiso", director: "Giuseppe Tornatore", score: 84.21, year: 1988, poster: "images4/c/cinemaparadiso.webp" },
        { rank: 5, title: "Casablanca", director: "Michael Curtiz", score: 85.02, year: 1943, poster: "images4/c/casablanca.webp" },
{ rank: 5, title: "Captain Phillips", director: "Paul Greengrass", score: 75.02, year: 2013, poster: "images4/c/captainphil.webp" },
{ rank: 5, title: "Caché", director: "Michael Haneke", score: 89.02, year: 2005, poster: "images4/c/cache.webp" },
{ rank: 5, title: "Cherry", director: "Joe Russo, Anthony Russo", score: 63.42, year: 2021, poster: "images4/c/cherry.webp" },
{ rank: 5, title: "Chimes at Midnight", director: "Orson Welles", score: 87.72, year: 1965, poster: "images4/c/chimes.webp" },
{ rank: 5, title: "Cinderella Man", director: "Ron Howard", score: 80.27, year: 2005, poster: "images4/c/cindirellaman.webp" },
{ rank: 5, title: "Citizen Kane", director: "Orson Welles", score: 92.30, year: 1948, poster: "images4/c/citizenkane.webp" },



 { rank: 5, title: "Das Boot", director: "Wolfgang Petersen", score: 88.35, year: 1981, poster: "images4/d/dasboot.webp" },       
 { rank: 5, title: "Dokuz", director: "Ümit Ünal", score: 72.13, year: 2002, poster: "images4/d/dokuz.webp" },
 { rank: 5, title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", director: "Stanley Kubrick", score: 88.34, year: 1964, poster: "images4/d/drstrangelove.webp" },
 { rank: 5, title: "Dances with Wolves", director: "Kevin Costner", score: 82.15, year: 1990, poster: "images4/d/danceswith.webp" },  
 { rank: 5, title: "Davaro", director: "Kartal Tibet", score: 81.35, year: 1981, poster: "images4/d/davaro.webp" },  
{ rank: 5, title: "Day of the Wacko", director: "Marek Koterski", score: 79.16, year: 2002, poster: "images4/d/dayofwacko.webp" },   
{ rank: 5, title: "Dog Day Afternoon", director: "Sidney Lumet", score: 89.46, year: 1975, poster: "images4/d/dogday.webp" },   
{ rank: 5, title: "Django Unchained", director: "Quentin Tarantino", score: 78.21, year: 2012, poster: "images4/d/django.webp" },   
{ rank: 5, title: "Dilber’in Sekiz Günü", director: "Cemal Şan", score: 70.45, year: 2009, poster: "images4/d/dilber.webp" },   
{ rank: 5, title: "Dead Poets Society", director: "Peter Weir", score: 86.61, year: 1989, poster: "images4/d/deadpoets.webp" },   
{ rank: 5, title: "Decalogue I", director: "Krzysztof Kieślowski", score: 90.08, year: 1989, poster: "images4/d/dekalog1.webp" },   
{ rank: 5, title: "Decalogue II", director: "Krzysztof Kieślowski", score: 85.59, year: 1989, poster: "images4/d/dekalog2.webp" },  
{ rank: 5, title: "Decalogue III", director: "Krzysztof Kieślowski", score: 85.87, year: 1989, poster: "images4/d/dekalog3.webp" },  
{ rank: 5, title: "Decalogue VI", director: "Krzysztof Kieślowski", score: 81.37, year: 1989, poster: "images4/d/dekalog4.webp" },  
{ rank: 5, title: "Decalogue V", director: "Krzysztof Kieślowski", score: 89.96, year: 1989, poster: "images4/d/dekalog5.webp" },  
{ rank: 5, title: "Decalogue VI", director: "Krzysztof Kieślowski", score: 88.92, year: 1989, poster: "images4/d/dekalog6.webp" },  
{ rank: 5, title: "Decalogue VII", director: "Krzysztof Kieślowski", score: 88.78, year: 1989, poster: "images4/d/dekalog7.webp" },  
{ rank: 5, title: "Decalogue VIII", director: "Krzysztof Kieślowski", score: 80.67, year: 1989, poster: "images4/d/dekalog8.webp" },  
{ rank: 5, title: "Decalogue XI", director: "Krzysztof Kieślowski", score: 81.23, year: 1989, poster: "images4/d/dekalog9.webp" },  
{ rank: 5, title: "Decalogue X", director: "Krzysztof Kieślowski", score: 82.76, year: 1989, poster: "images4/d/dekalog10.webp" },  
{ rank: 5, title: "Don’t Look Up", director: "Adam McKay", score: 73.48, year: 2021, poster: "images4/d/dontlookup.webp" },   
{ rank: 5, title: "Donnie Brasco", director: "Mike Newell", score: 76.61, year: 1997, poster: "images4/d/donniebrasco.webp" },   
 { rank: 5, title: "Donnie Darko", director: "Richard Kelly", score: 81.61, year: 2001, poster: "images4/d/donniedarko.webp" },   
{ rank: 5, title: "Dream Scenario", director: "Kristoffer Borgli", score: 72.61, year:  2023, poster: "images4/d/dreamscenario.webp" },   
{ rank: 5, title: "Dumb Money", director: "Craig Gillespie", score: 69.88, year: 2023, poster: "images4/d/dumbmoney.webp" },   
{ rank: 5, title: "Dunkirk", director: "Christopher Nolan", score: 78.61, year: 1989, poster: "images4/d/dunkirk.webp" },   



{ rank: 5, title: "Eyes Wide Shut", director: "Stanley Kubrick", score: 92.16, year: 1999, poster: "images4/e/eyeswide.webp" },
         { rank: 5, title: "Eşkıya", director: "Yavuz Turgul", score: 80.61, year: 1996, poster: "images4/e/eskiya.webp" },
     { rank: 5, title: "Edward Scissorhands", director: "Tim Burton", score: 72.16, year: 1990, poster: "images4/e/edwardscissor.webp" },   
{ rank: 5, title: "El Camino: A Breaking Bad Movie", director: "Vince Gilligan", score: 62.16, year: 2019, poster: "images4/e/elcamino.webp" },
{ rank: 5, title: "Enemy", director: "Denis Villeneuve", score: 69.87, year: 2013, poster: "images4/e/enemy.webp" },


       

 { rank: 5, title: "Faraway, So Close!", director: "Wim Wenders", score: 90.19, year: 1993, poster: "images4/f/faraway.webp" },
{ rank: 5, title: "Fight Club", director: "David Fincher", score: 87.34, year: 1999, poster: "images4/f/fightclub.webp" },
{ rank: 5, title: "Forrest Gump", director: "Robert Zemeckis", score: 87.21, year: 1994, poster: "images4/f/forrestgump.webp" },
{ rank: 5, title: "Full Metal Jacket", director: "Stanley Kubrick", score: 87.32, year: 1987, poster: "images4/f/fullmetaljacket.webp" },
{ rank: 5, title: "Final Destination", director: "James Wong", score: 65.71, year: 2000, poster: "images4/f/finaldestination.webp" },
{ rank: 5, title: "Final Destination 2", director: "David R. Ellis", score: 60.21, year: 2003, poster: "images4/f/finaldes2.webp" },
{ rank: 5, title: "Final Destination 3", director: "James Wong", score: 63.37, year: 2006, poster: "images4/f/finaldes3.webp" },
{ rank: 5, title: "Final Destination 4", director: "David R. Ellis", score: 60.01, year: 2009, poster: "images4/f/finaldes4.webp" },
{ rank: 5, title: "Final Destination 5", director: "Steven Quale", score: 64.89, year: 2011, poster: "images4/f/finaldes5.webp" },



 { rank: 5, title: "Goodfellas", director: "Martin Scorsese", score: 87.2, year: 1990, poster: "images4/g/goodfellas.webp" },
{ rank: 5, title: "Good Bye, Lenin!", director: "Wolfgang Becker", score: 87.16, year: 2003, poster: "images4/g/goodbyelenin.webp" },
 { rank: 5, title: "Get Out", director: "Jordan Peele", score: 81.36, year: 2017, poster: "images4/g/getout.webp" },
 { rank: 5, title: "Gone Girl", director: "David Fincher", score: 80.64, year: 2014, poster: "images4/g/gonegirl.webp" },
{ rank: 5, title: "Gangs of Wasseypur Part 1", director: "Anurag Kashyap", score: 81.27, year: 2012, poster: "images4/g/gwayseypur1.webp" },
{ rank: 5, title: "Gangs of Wasseypur Part 2", director: "Anurag Kashyap", score: 82.11, year: 2012, poster: "images4/g/gwasseypur2.webp" },



 { rank: 5, title: "Hachi: A Dog’s Tale", director: "Lasse Hallström", score: 73.46, year: 2009, poster: "images4/h/hachi.webp" },
 { rank: 5, title: "Hannibal", director: "Ridley Scott", score: 73.46, year: 2001, poster: "images4/h/hannibal.webp" },
 { rank: 5, title: "High and Low", director: "Akira Kurosawa", score: 91.34, year: 1963, poster: "images4/h/highandlow.webp" },
 { rank: 5, title: "Harry Potter and the Philosopher’s Stone", director: "Chris Columbus", score: 81.06, year: 2001, poster: "images4/h/harrypotter1.webp" },
{ rank: 5, title: "Harry Potter and the Chamber of Secrets", director: "Chris Columbus", score: 80.16, year: 2002, poster: "images4/h/harrypotter2.webp" },
{ rank: 5, title: "Harry Potter and the Prisoner of Azkaban", director: "Alfonso Cuarón", score: 87.30, year: 2004, poster: "images4/h/harrypotter3.webp" },
{ rank: 5, title: "Harry Potter and the Goblet of Fire", director: "Mike Newell", score: 86.96, year: 2005, poster: "images4/h/harrypotter4.webp" },
{ rank: 5, title: "Harry Potter and the Order of the Phoenix", director: "David Yates", score: 85.16, year: 2007, poster: "images4/h/harrypotter5.webp" },
{ rank: 5, title: "Harry Potter and the Half-Blood Prince", director: "David Yates", score: 77.26, year: 2009, poster: "images4/h/harrypotter6.webp" },
{ rank: 5, title: "Harry Potter and the Deathly Hallows: Part 1", director: "David Yates", score: 85.27, year: 2010, poster: "images4/h/harrypotter7.webp" },
{ rank: 5, title: "Harry Potter and the Deathly Hallows: Part 2", director: "David Yates", score: 85.94, year: 2011, poster: "images4/h/harrypotter8.webp" },
{ rank: 5, title: "Her", director: "Spike Jonze", score: 69.46, year: 2013, poster: "images4/h/her.webp" },
{ rank: 5, title: "Holy Spider", director: "Ali Abbasi", score: 84.46, year: 2022, poster: "images4/h/holyspider.webp" },
{ rank: 5, title: "Horrible Bosses", director: "Seth Gordon", score: 64.46, year: 2011, poster: "images4/h/hbosses1.webp" },
{ rank: 5, title: "Horrible Bosses 2", director: "Sean Anders", score: 61.21, year: 2014, poster: "images4/h/hbosses2.webp" },


 

{ rank: 5, title: "I Am Cuba", director: "Mikheil Kalatozishvili", score: 89.43, year:  1964 , poster: "images4/i/iamkuba.webp" },
{ rank: 5, title: "I Am Legend", director: "Francis Lawrence", score: 66.43, year:  2007 , poster: "images4/i/iamlegend.webp" },
{ rank: 5, title: "I, Daniel Blake", director: "Ken Loach", score: 82.13, year:  2016 , poster: "images4/i/idanielblake.webp" },
{ rank: 5, title: "Identity", director: "James Mangold", score: 77.23, year:  2003 , poster: "images4/i/identity.webp" },
{ rank: 5, title: "Ikiru", director: "Akira Kurosawa", score: 90.04, year:  1952 , poster: "images4/i/ikuru.webp" },
{ rank: 5, title: "Inception", director: "Christopher Nolan", score: 87.24, year: 2010, poster: "images4/i/inception.webp" },
{ rank: 5, title: "Inglourious Basterds", director: "Quentin Tarantino", score: 87.54, year: 2009, poster: "images4/i/ingbas.webp" },
 { rank: 5, title: "Interstellar", director: "Christopher Nolan", score: 92.28, year: 2014, poster: "images4/i/interstellar.webp" },
 { rank: 5, title: "In the Name of the Father", director: "Jim Sheridan", score: 88.96, year: 1993, poster: "images4/i/inthename.webp" },
 { rank: 5, title: "In Time", director: "Andrew Niccol", score: 62.96, year: 2011, poster: "images4/i/intime.webp" },
 { rank: 5, title: "Io Capitano", director: "Matteo Garrone", score: 83.96, year: 2023, poster: "images4/i/iocaptanio.webp" },
{ rank: 5, title: "It's a Wonderful Life", director: "Frank Capra", score: 87.29, year: 1946, poster: "images4/i/itswonderfullife.webp" },
{ rank: 5, title: "Ip Man", director: "Wilson Yip", score: 77.29, year: 2008, poster: "images4/i/ipman.webp" },
{ rank: 5, title: "Ip Man 2", director: "Wilson Yip", score: 72.01, year: 2010, poster: "images4/i/ipman2.webp" },
{ rank: 5, title: "Ip Man 3", director: "Wilson Yip", score: 67.08, year: 2015, poster: "images4/i/ipman3.webp" },
{ rank: 5, title: "Ip Man 4", director: "Wilson Yip", score: 64.12, year: 2019, poster: "images4/i/ipman4.webp" },
 { rank: 5, title: "İklimler", director: "Nuri Bilge Ceylan", score: 87.12, year: 2006, poster: "images4/i/iklimler.webp" },
     
 
{ rank: 5, title: "John Wick", director: "Chad Stahelski", score: 78.41, year: 2014, poster: "images4/j/johnwick.webp" },
{ rank: 5, title: "John Wick 2", director: "Chad Stahelski", score: 76.21, year: 2017, poster: "images4/j/johnwick2.webp" },
{ rank: 5, title: "John Wick 3", director: "Chad Stahelski", score: 75.87, year: 2019, poster: "images4/j/johnwick3.webp" },
{ rank: 5, title: "John Wick 4", director: "Chad Stahelski", score: 79.27, year: 2023, poster: "images4/j/johnwick4.webp" },
{ rank: 5, title: "Jojo Rabbit", director: "Taika Waititi", score: 79.97, year: 2019, poster: "images4/j/jojorabbit.webp" },
{ rank: 5, title: "Joker", director: "Todd Phillips", score: 78.97, year: 2019, poster: "images4/j/jojorabbit.webp" },

{ rank: 5, title: "Kader", director: "Zeki Demirkubuz", score: 89.41, year: 2006, poster: "images4/kader.webp" },
{ rank: 5, title: "Kış Uykusu", director: "Nuri Bilge Ceylan", score: 88.12, year: 2014, poster: "images4/kisuykusu.webp" },
 { rank: 5, title: "Kuru Otlar Üstüne", director: "Nuri Bilge Ceylan", score: 87.18, year: 2023, poster: "images4/kuruotlar.webp" },

 { rank: 5, title: "La Haine", director: "Mathieu Kassovitz", score: 88.04, year: 1995, poster: "images4/lahaine.webp" },
 { rank: 5, title: "Léon: The Professional", director: "Luc Besson", score: 87.23, year: 1994, poster: "images4/leon.webp" },


 
{ rank: 5, title: "Masumiyet", director: "Zeki Demirkubuz", score: 88.26, year: 1997, poster: "images4/masumiyet.webp" },






{ rank: 1, title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", score: 93.79, year: 2003, poster: "images4/lotr3.webp" },
        { rank:2, title: "The Godfather", director: "Francis Ford Coppola", score: 93.49, year: 1972, poster: "images4/thegodfather.webp" }, // Poster linkini güncelleyin
        { rank: 3, title: "The Shining", director: "Stanley Kubrick", score: 89.21, year: 1980, poster: "images4/theshining.webp" },
        { rank: 4, title: "Parasite", director: "Bong Joon-ho", score: 87.99, year: 2019, poster: "images4/parasite.webp" },
       
        
        { rank: 5, title: "One Flew Over the Cuckoo's Nest", director: "Miloš Forman", score: 91.38, year: 1975, poster: "images4/oneflew.webp" },
        { rank: 5, title: "Seven Samurai", director: "Akira Kurosawa", score: 93.37, year: 1954, poster: "images4/sevensamurai.webp" },
        { rank: 5, title: "The Silence of the Lambs", director: "Jonathan Demme", score: 89.33, year: 1991, poster: "images4/silenceofthelamb.webp" },
        { rank: 5, title: "The Shawshank Redemption", director: "Frank Darabont", score: 88.21, year: 1994, poster: "images4/theshawshank.webp" },
        { rank: 11, title: "The Dark Knight", director: "Christopher Nolan", score: 89.4, year: 2008, poster: "images4/thedarkknight.webp" },
        { rank: 5, title: "The Godfather Part II", director: "Francis Ford Coppola", score: 93.18, year: 1974, poster: "images4/thegodfather2.webp" },
        { rank: 5, title: "Schindler's List", director: "Steven Spielberg", score: 88.2, year: 1994, poster: "images4/schindlerslist.webp" },
        { rank: 5, title: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", score: 92.59, year: 2001, poster: "images4/lotr1.webp" },
        { rank: 5, title: "Pulp Fiction", director: "Quentin Tarantino", score: 88.4, year: 1994, poster: "images4/pulpfiction.webp" },
        { rank: 5, title: "The Good, the Bad and the Ugly", director: "Sergio Leone", score: 90.7, year: 1966, poster: "images4/goodbadugly.webp" },
        { rank: 5, title: "The Lord of the Rings: The Two Towers", director: "Peter Jackson", score: 91.29, year: 2002, poster: "images4/lotr2.webp" },
        
        
        { rank: 21, title: "Star Wars: Episode V - The Empire Strikes Back", director: "Irvin Kershner", score: 87.14, year: 1980, poster: "images4/starwars5.webp" },
        { rank: 5, title: "The Matrix", director: "Wachowski Brothers", score: 87.94, year: 1999, poster: "images4/matrix.webp" },
       
        { rank: 5, title: "Se7en", director: "David Fincher", score: 86.11, year: 1995, poster: "images4/se7en.webp" },
        
       
        
       
       
        { rank: 31, title: "Paths of Glory", director: " Stanley Kubrick", score: 88.39, year:  1957 , poster: "images4/pathsofglory.webp" },
       
       
        { rank: 5, title: "Underground", director: "Emir Kusturica", score: 88.38, year: 1995, poster: "images4/underground.webp" },
        { rank: 5, title: "Paris, Texas", director: "Wim Wenders", score: 90.25, year: 1984, poster: "images4/paristexas.webp" },
        { rank: 5, title: "Three Colours: Red", director: "Krzysztof Kieślowski", score: 90.26, year: 1994, poster: "images4/red.webp" },
        { rank: 5, title: "Three Colours: Blue", director: "Krzysztof Kieślowski", score: 90.45, year: 1993, poster: "images4/blue.webp" },
        { rank: 5, title: "Three Colours: White", director: "Krzysztof Kieślowski", score: 86.01, year: 1994, poster: "images4/white.webp" },
        { rank: 5, title: "Wings of Desire", director: "Wim Wenders", score: 91.49, year: 1987, poster: "images4/wingofdesire.webp" },
        { rank: 5, title: "Perfect Days", director: "Wim Wenders", score: 92.13, year: 2023, poster: "images4/perfectdays.webp" },
        { rank: 41, title: "Oldboy", director: "Park Chan-wook", score: 91.26, year: 2003, poster: "images4/oldboy.webp" },
       { rank: 5, title: "The Banshees of Inisherin", director: "Martin McDonagh", score: 84.17, year: 2022, poster: "images4/thebanshees.webp" },
        
       
        
       
       
        { rank: 5, title: "Uzak", director: "Nuri Bilge Ceylan", score: 89.37, year: 2002, poster: "images4/uzak.webp" },
        { rank: 51, title: "Üç Maymun", director: "Nuri Bilge Ceylan", score: 87.26, year: 2008, poster: "images4/ücmaymun.webp" },
       
       
       
       
        
        
   
    { rank: 61, title: "Yeraltı", director: "Zeki Demirkubuz", score: 83.1, year: 2012, poster: "images4/yeralti.webp" },
    { rank: 5, title: "The Age of Adaline", director: "Lee Toland Krieger", score: 71.14, year: 2015, poster: "images4/adaline.webp" },
{ rank: 5, title: "The Ballad of Buster Scruggs", director: "Ethan Coen-Joel Coen", score: 76.41, year: 20018, poster: "images4/theballadbusters.webp" },
    ];


    // Fallback Listesi (TMDB Çökerse Buradan Çekecek - images3)
    const privateSpecialList = [
        {
            title: "Oldboy",
            poster_path: "images4/oldboy.jpg", 
            overview: "15 yıl hapis kalan bir adamın intikam hikayesi.",
            director_name: "Park Chan-wook",
            isLocal: true
        },
        {
            title: "American History X",
            poster_path: "images/a/americanhistoryx.jpg",
            overview: "Irkçılık ve kefaret üzerine çarpıcı bir dram.",
            director_name: "Tony Kaye",
            isLocal: true
        }
        
    ];

    // Dil Çevirileri
    const texts = {
        tr: {
            questions: ["Ruh halini hangi atmosfer yansıtıyor?", "Hangi detay seni içine çekiyor?", "Hangi manzarada kaybolmak istersin?", "Sessizliği hangisi daha iyi anlatıyor?"],
            moodTitle: "RUH HALİ SEÇKİSİ",
            listTitle: "CANVAS LİSTESİ",
            share: "Hikaye Olarak Paylaş",
            recLabel: "ÖNERİLEN FİLM",
            moodLabel: "RUH HALİNİ YANSITAN SEÇİMLER"
        },
        en: {
            questions: ["Which atmosphere reflects your mood?", "Which detail draws you in?", "Which landscape would you get lost in?", "Which one speaks silence better?"],
            moodTitle: "MOOD SELECTION",
            listTitle: "CANVAS LIST",
            share: "Share as Story",
            recLabel: "RECOMMENDED MOVIE",
            moodLabel: "CHOICES REFLECTING YOUR MOOD"
        }
    };

    let currentLang = 'tr';
    let questionIndex = 0;
    let userSelections = [];
    let currentMovie = {};

    // --- FONKSİYONLAR ---

    // 1. Ana Sayfa Görseli Ayarla (Rastgele f1-f29)
    function setLandingImages() {
        const randomNum = Math.floor(Math.random() * 29) + 1; // 1 ile 29 arası
        const imgPath = `images2/f${randomNum}.jpg`;
        
        const moodImg = document.getElementById('mood-card-img');
        if(moodImg) moodImg.src = imgPath;
    }

    // 2. Dil Değiştirme
    window.toggleLang = function() {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        updateUI();
    };

    function updateUI() {
        const t = texts[currentLang];
        document.getElementById('txt-mood-select').textContent = t.moodTitle;
        document.getElementById('txt-canvas-list').textContent = t.listTitle;
        document.getElementById('share-story-btn').textContent = t.share;
        document.getElementById('story-label-rec').textContent = t.recLabel;
        document.getElementById('story-label-mood').textContent = t.moodLabel;
        document.getElementById('selection-question').textContent = t.questions[questionIndex];
    }

    // 3. Tema Değiştirme
    window.toggleTheme = function() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    };

    // 4. Canvas Listesi Sıralama ve Gösterme
    window.showCanvasList = function() {
        document.getElementById('landing-screen').classList.add('hidden');
        document.getElementById('top-list-screen').classList.remove('hidden');
        
        const listContainer = document.getElementById('top-list-content');
        listContainer.innerHTML = '';

        // PUANA GÖRE SIRALA (Büyükten Küçüğe)
        const sortedList = [...canvasTopList].sort((a, b) => b.score - a.score);

        sortedList.forEach((movie, index) => {
            const rank = index + 1; // Sıralama numarası otomatik
            const itemHTML = `
                <div class="top-list-item">
                    <div class="rank">#${rank}</div>
                    <img src="${movie.poster}" class="mini-poster" onerror="this.src='images2/fff.jpg'">
                    <div class="info">
                        <h3 style="margin:0; color:var(--text-main)">${movie.title}</h3>
                        <p style="margin:0; font-size:0.8rem; color:var(--text-dim)">${movie.director}</p>
                    </div>
                    <div class="score-box">${movie.score}</div>
                </div>
            `;
            listContainer.innerHTML += itemHTML;
        });
    };

    // 5. Seçim Ekranı ve Rastgele Header
    window.startRecommender = function() {
        document.getElementById('landing-screen').classList.add('hidden');
        document.getElementById('selection-screen').classList.remove('hidden');
        
        // Header için rastgele görsel
        const randomNum = Math.floor(Math.random() * 29) + 1;
        document.getElementById('random-header-img').src = `images2/f${randomNum}.jpg`;
        
        initializePage();
    };

    function initializePage() {
        questionIndex = 0;
        userSelections = [];
        updateUI();
        populateImageGrid();
    }

    // Görsel Grid'i Doldur (Örnek Data - images klasöründen)
   async function populateImageGrid() {
    const grid = document.getElementById('image-selection-grid');
    
    // Yükleniyor animasyonu
    grid.innerHTML = '<div class="spinner"></div>';
    
    // Gecikme simülasyonu (daha yumuşak geçiş için)
    await new Promise(r => setTimeout(r, 300));

    // 1. localImagePool boş mu kontrol et
    if (!localImagePool || localImagePool.length === 0) {
        grid.innerHTML = '<p style="color:red">Görsel havuzu boş! Lütfen script.js dosyasındaki localImagePool listesini kontrol et.</p>';
        return;
    }

    // 2. Havuzdan rastgele 4 görsel seç
    const shuffled = [...localImagePool].sort(() => 0.5 - Math.random()).slice(0, 4);
    
    // 3. HTML'i oluştur
    grid.innerHTML = shuffled.map(item => {
        // Eğer listede sadece isim varsa ({id:...} değilse) düzelt
        const imgId = typeof item === 'object' ? item.id : item;
        const imgName = typeof item === 'object' ? item.name : "Seçim";

        return `
        <div class="image-item" onclick="handleChoice('images/${imgId}.jpg')">
            <img src="images/${imgId}.jpg" 
                 alt="${imgName}" 
                 onerror="this.src='images2/fff.jpg'; this.alt='Görsel Yüklenemedi'"> 
        </div>
        `;
    }).join('');
}
    window.handleChoice = function(src) {
        userSelections.push(src);
        questionIndex++;
        if(questionIndex < 4) {
            document.getElementById('selection-question').textContent = texts[currentLang].questions[questionIndex];
            populateImageGrid();
        } else {
            showRecommendation();
        }
    };

// GELİŞMİŞ ÖNERİ ALGORİTMASI (Gerçek API Bağlantılı)
    async function showRecommendation() {
        const screen = document.getElementById('recommendation-screen');
        const content = document.getElementById('recommendation-content');
        const loader = document.getElementById('loading');
        
        // Ekran geçişleri
        document.getElementById('selection-screen').classList.add('hidden');
        screen.classList.remove('hidden');
        loader.classList.remove('hidden');
        content.innerHTML = ''; // İçeriği temizle

        try {
            // 1. GERÇEK API İSTEĞİ (Simülasyon Değil!)
            const resp = await fetch(`/api/get-movie?lang=${currentLang}`);
            
            if (!resp.ok) throw new Error("API Bağlantı Hatası");
            
            const data = await resp.json();
            
            // 2. Etiket Belirleme
            let label = "Özel Seçki";
            if (data.isLocal) {
                label = "Canvas Güvenli Mod";
            } else if (data.director_name) {
                label = data.director_name === "Özel Seçki" ? "Kült Seçki" : "Yönetmen: " + data.director_name;
            }

            // 3. Ekrana Bas
            renderMovieResult(data, label);

        } catch (e) {
            console.warn("Sistem Hatası, Yerel Listeye Geçiliyor:", e);
            
            // HER ŞEY ÇÖKERSE SON ÇARE (Frontend Fallback)
            // Bu liste images3 klasöründeki dosyalarınla eşleşmeli
            const emergencyList = [
                 { title: "Bir Zamanlar Anadolu'da", poster_path: "images3/birzamanlar.jpg", isLocal: true, overview: "Bozkırın ortasında bir cinayet..." },
                 { title: "Sevmek Zamanı", poster_path: "images3/sevmekzamani.jpg", isLocal: true, overview: "Surete aşık olan adam..." },
                 { title: "Kış Uykusu", poster_path: "images3/kisuykusu.jpg", isLocal: true, overview: "Aydın'ın kış uykusu..." }
            ];
            
            const fallbackMovie = emergencyList[Math.floor(Math.random() * emergencyList.length)];
            renderMovieResult(fallbackMovie, "Canvas Güvenli Mod");
            
        } finally {
            loader.classList.add('hidden');
        }
    }

    function renderMovieResult(data, label) {
        const content = document.getElementById('recommendation-content');
        
        // Resim Yolu Kontrolü:
        // Eğer yerelse (isLocal: true) -> olduğu gibi kullan (images3/...)
        // Eğer API'den geliyorsa -> Başına TMDB linki ekle
        let posterSrc = data.poster_path;
        if (!data.isLocal && posterSrc) {
            posterSrc = `https://image.tmdb.org/t/p/w780${data.poster_path}`;
        }
        
        // Eğer resim yoksa placeholder koy
        if (!posterSrc) posterSrc = "images2/fff.jpg";

        // Global değişkene ata (Story paylaşımı için)
        currentMovie = { 
            title: data.title, 
            poster: posterSrc,
            overview: data.overview || "Açıklama bulunamadı.",
            director: label
        };

        content.innerHTML = `
            <div class="recommendation-item fade-in">
                <img src="${posterSrc}" style="width:280px; border-radius:12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <h2 style="margin: 1.5rem 0 0.5rem 0; font-size: 1.8rem;">${data.title}</h2>
                <p style="color:var(--primary-red); font-weight:bold; letter-spacing:1px; margin-bottom:1rem;">${label}</p>
                <p style="max-width:600px; margin:0 auto; opacity:0.8; line-height:1.6;">
                    ${data.overview ? data.overview.substring(0, 300) + "..." : ""}
                </p>
            </div>`;
    }

    window.goHome = function() {
        document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
        document.getElementById('landing-screen').classList.remove('hidden');
        setLandingImages(); // Ana sayfaya dönünce görseli yenile
    };

    // Başlangıçta ana sayfa görselini ayarla
    setLandingImages();
});