import _ from 'lodash';

import { POSITIONALS, OUTFIELD_POSITION_TYPES, GK, C} from './constants/positions';

export const SECTORS = 35;
export const ROWS = 7;
export const KEY_DELTA = 2;

export const VALID_TEAM_SIZE = 11;

/**
 * If there is a player inside the supplied sector then return this player,
 * if not return null
 * 
 * @param  {Object} sector
 * 
 * @return {Object|null}
 */
export function getPlayerInSector(sector) {
  let playerInSectorArr = sector.playersOnPitch.filter((p) => p.assignedSector === sector.id);
  
  if (playerInSectorArr.length === 1) {
    return playerInSectorArr.pop()
  }

  return null;
};

/**
 * Return whether player is allowed in given sector or not
 * 
 * @param  {Object}  sector
 * @param  {Object}  player
 * 
 * @return {Boolean}
 */
export function isValidSectorForPlayer(sector, player) {
    return player.validPositions.filter((v) => v === sector.position).length === 1;
};

export function getFormation(players) {
  var formation = {
    GK: 0,
    DF: 0,
    DM: 0,
    MF: 0,
    AM: 0,
    ST: 0
  };

  players.forEach((player) => {
    var playerSectorInfo = getSectorInfo(player.assignedSector);
    formation[playerSectorInfo.position.key]++;
  });

  return formation;
};

export function printFormationString(formation) {
  var outfieldKeys = Object.keys(formation).filter((key) => key !== 'GK');
  var nonZeroKeys = outfieldKeys.filter((key) => formation[key] > 0);

  return nonZeroKeys.map((key) => formation[key]).join('-');
}

/**
 * Retrieve information about a sector by providing the sector id
 * 
 * @param  {Number} sectorId
 * 
 * @return {Object}
 */
export function getSectorInfo(sectorId) {
  let adjusted = sectorId - KEY_DELTA;
  let id = (OUTFIELD_POSITION_TYPES.length -1 ) - Math.floor(adjusted/ROWS); 
  let position = OUTFIELD_POSITION_TYPES[id];
  let side = POSITIONALS[adjusted%ROWS];
  
  if (adjusted < 0) {
    id = -1;
    position = GK;
    side = C;
  } 

  return {
    id,
    position,
    side
  };
};

/**
 * Sort function for a list of players by position and then side
 * 
 * @param  {Object} a a player
 * @param  {Object} b a player
 * 
 * @return {Number}
 */
export function sortAvailableList(a,b) {
  var aBasePosition = _.minBy(a.validPositions, (position) => position.order);
  var bBasePosition = _.minBy(b.validPositions, (position) => position.order);

  return aBasePosition.order - bBasePosition.order;
}

/**
 * Sort function for a list of players by position and then side
 * 
 * @param  {Object} a a player
 * @param  {Object} b a player
 * 
 * @return {Number}
 */
export function sortTeamList(a,b) {
  var aSectorInfo = getSectorInfo(a.assignedSector);
  var bSectorInfo = getSectorInfo(b.assignedSector);

  var x = aSectorInfo.position.order - bSectorInfo.position.order;
  return x === 0 ? aSectorInfo.side.order - bSectorInfo.side.order : x;
}