import * as POSITIONS from './positions';
import messiImg from '../../assets/leo-messi.jpg';
import ronaldoImg from '../../assets/ronaldo.jpg';
import kaneImg from '../../assets/harry-kane.jpg';
import cahillImg from '../../assets/gary-cahill.jpg';
import courtoisImg from '../../assets/courtois.jpg';
import marceloImg from '../../assets/marcelo.jpg';
import mikelImg from '../../assets/obi-mikel.jpg';
import silvaImg from '../../assets/thiago-silva.jpg';
import baleImg from '../../assets/gareth-bale.jpg';
import hazardImg from '../../assets/eden-hazard.jpg';
import zlatanImg from '../../assets/zlatan-ibrahimovic.jpg';
import gotzeImg from '../../assets/mario-gotze.jpg';
import yayaImg from '../../assets/yaya-toure.jpg';
import diegoImg from '../../assets/diego-costa.jpg';

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
  }
];