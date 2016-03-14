import * as POSITIONS from './positions';
import messiImg from '../../assets/leo-messi.jpg';
import ronaldoImg from '../../assets/ronaldo.jpg';
import kaneImg from '../../assets/harry-kane.jpg';
import cahillImg from '../../assets/gary-cahill.jpg';
import courtoisImg from '../../assets/courtois.jpg';
import marceloImg from '../../assets/marcelo.jpg';
import mikelImg from '../../assets/obi-mikel.jpg';
import silvaImg from '../../assets/thiago-silva.jpg';
import dSilvaImg from '../../assets/david-silva.jpg';
import baleImg from '../../assets/gareth-bale.jpg';
import hazardImg from '../../assets/eden-hazard.jpg';
import zlatanImg from '../../assets/zlatan-ibrahimovic.jpg';
import gotzeImg from '../../assets/mario-gotze.jpg';
import yayaImg from '../../assets/yaya-toure.jpg';
import diegoImg from '../../assets/diego-costa.jpg';
import lahmImg from '../../assets/phillip-lahm.jpg';
import rodriguezImg from '../../assets/james-rodriguez.jpg';
import neymarImg from '../../assets/neymar.jpg';
import iniestaImg from '../../assets/andres-iniesta.jpg';
import cechImg from '../../assets/petr-cech.jpg';
import kompanyImg from '../../assets/vincent-kompany.jpg';
import alvesImg from '../../assets/daniel-alves.jpg';
import neuerImg from '../../assets/manuel-neuer.jpg';
import alabaImg from '../../assets/david-alaba.jpg';
import piqueImg from '../../assets/gerard-pique.jpg';
import derossiImg from '../../assets/danielle-derossi.jpg';

export default [
  { 
    id: 1,
    firstName: 'Lionel', 
    lastName: 'Messi', 
    image: messiImg,
    validPositions: [ POSITIONS.AM, POSITIONS.MF ],
    assignedSector: null
  },
  { 
    id: 2,
    firstName: 'Cristiano', 
    lastName: 'Ronaldo', 
    image: ronaldoImg,
    validPositions: [ POSITIONS.AM, POSITIONS.MF ],
    assignedSector: null
  },
  { 
    id: 3,
    firstName: 'Harry', 
    lastName: 'Kane', 
    image: kaneImg,
    validPositions: [ POSITIONS.ST ],
    assignedSector: null
  },
  { 
    id: 4,
    firstName: 'Gareth', 
    lastName: 'Bale', 
    image: baleImg,
    validPositions: [ POSITIONS.AM, POSITIONS.MF ],
    assignedSector: null
  },
  { 
    id: 5,
    firstName: 'Gary', 
    lastName: 'Cahill', 
    image: cahillImg,
    validPositions: [ POSITIONS.DF ],
    assignedSector: null
  },
  { 
    id: 6,
    firstName: 'Thiago', 
    lastName: 'Silva', 
    image: silvaImg,
    validPositions: [ POSITIONS.DF ],
    assignedSector: null
  },
  { 
    id: 7,
    firstName: 'Jon', 
    lastName: 'Obi Mikel', 
    image: mikelImg,
    validPositions: [ POSITIONS.DM, POSITIONS.MF ],
    assignedSector: null
  },
  { 
    id: 8,
    firstName: 'Marcelo', 
    lastName: null, 
    image: marceloImg,
    validPositions: [ POSITIONS.DF, POSITIONS.DM ],
    assignedSector: null
  },
  { 
    id: 9,
    firstName: 'Thibault', 
    lastName: 'Courtois', 
    image: courtoisImg,
    validPositions: [ POSITIONS.GK ],
    assignedSector: null
  },
  { 
    id: 10,
    firstName: 'Eden', 
    lastName: 'Hazard', 
    image: hazardImg,
    validPositions: [ POSITIONS.AM ],
    assignedSector: null
  },
  { 
    id: 11,
    firstName: 'Zlatan', 
    lastName: 'Ibrahimovic', 
    image: zlatanImg,
    validPositions: [ POSITIONS.ST ],
    assignedSector: null
  },
  { 
    id: 12,
    firstName: 'Mario', 
    lastName: 'Götze', 
    image: gotzeImg,
    validPositions: [ POSITIONS.AM, POSITIONS.ST ],
    assignedSector: null
  },
  { 
    id: 13,
    firstName: 'Yaya', 
    lastName: 'Toure', 
    image: yayaImg,
    validPositions: [ POSITIONS.AM, POSITIONS.MF, POSITIONS.DM ],
    assignedSector: null
  },
  { 
    id: 14,
    firstName: 'Diego', 
    lastName: 'Costa', 
    image: diegoImg,
    validPositions: [ POSITIONS.ST ],
    assignedSector: null
  },
  { 
    id: 15,
    firstName: 'Phillip', 
    lastName: 'Lahm', 
    image: lahmImg,
    validPositions: [ POSITIONS.DF ],
    assignedSector: null
  },
  { 
    id: 16,
    firstName: 'James', 
    lastName: 'Rodriguez', 
    image: rodriguezImg,
    validPositions: [ POSITIONS.AM ],
    assignedSector: null
  },
  { 
    id: 17,
    firstName: 'Neymar', 
    lastName: null,
    image: neymarImg,
    validPositions: [ POSITIONS.AM, POSITIONS.ST ],
    assignedSector: null
  },
  { 
    id: 18,
    firstName: 'Andres', 
    lastName: 'Iniesta',
    image: iniestaImg,
    validPositions: [ POSITIONS.MF ],
    assignedSector: null
  },
  { 
    id: 19,
    firstName: 'Petr', 
    lastName: 'Cech',
    image: cechImg,
    validPositions: [ POSITIONS.GK ],
    assignedSector: null
  },
  { 
    id: 20,
    firstName: 'Vincent', 
    lastName: 'Kompany',
    image: kompanyImg,
    validPositions: [ POSITIONS.DF ],
    assignedSector: null
  },
  { 
    id: 21,
    firstName: 'Daniel', 
    lastName: 'Alves',
    image: alvesImg,
    validPositions: [ POSITIONS.DF ],
    assignedSector: null
  },
  { 
    id: 22,
    firstName: 'David', 
    lastName: 'Silva',
    image: dSilvaImg,
    validPositions: [ POSITIONS.AM, POSITIONS.MF ],
    assignedSector: null
  },
  { 
    id: 23,
    firstName: 'Manuel', 
    lastName: 'Neuer',
    image: neuerImg,
    validPositions: [ POSITIONS.GK ],
    assignedSector: null
  },
  { 
    id: 24,
    firstName: 'Gerard', 
    lastName: 'Pique',
    image: piqueImg,
    validPositions: [ POSITIONS.DF ],
    assignedSector: null
  },
  { 
    id: 25,
    firstName: 'David', 
    lastName: 'Alaba',
    image: alabaImg,
    validPositions: [ POSITIONS.DF ],
    assignedSector: null
  },
  { 
    id: 26,
    firstName: 'Danielle', 
    lastName: 'De Rossi',
    image: derossiImg,
    validPositions: [ POSITIONS.DM ],
    assignedSector: null
  }
];