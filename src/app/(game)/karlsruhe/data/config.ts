export type SourceJson = {
  lines: {
    lineId: string
    relations: {
      relationId: number
      stationsNodeIds: number[]
      routesWayIds: number[]
    }[]
    extraStationNodeIds: number[]
    extraRouteWayIds: number[]
  }[]
  ways: { wayId: number; nodeIds: number[] }[]
  nodes: { nodeId: number; name?: string; lat: number; lon: number }[]
}

// ----------------------------------------
// line configuration
// ----------------------------------------
export const linesMetadata: {
  [id: string]: {
    name: string
    osm: {
      relationIds: number[]
      extraStationNodeIds: number[]
      extraRouteWayIds: number[]
    }
    color: string
  }
} = {
  Karlsruhe1: {
    name: '1',
    osm: {
      relationIds: [176700],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#ed1c24',
  },
  Karlsruhe2: {
    name: '2',
    osm: {
      relationIds: [174426],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#0071bc',
  },
  Karlsruhe3: {
    name: '3',
    osm: {
      relationIds: [165332],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#947139',
  },
  Karlsruhe4: {
    name: '4',
    osm: {
      relationIds: [174632],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#ffcb04',
  },
  Karlsruhe5: {
    name: '5',
    osm: {
      relationIds: [175161],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#00c0f3',
  },
  Karlsruhe8: {
    name: '8',
    osm: {
      relationIds: [175190],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#f7931d',
  },

  Karlsruhe17: {
    name: '17',
    osm: {
      relationIds: [16291132],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#660000',
  },
  Karlsruhe18: {
    name: '18',
    osm: {
      relationIds: [6061799],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#197248',
  },
  KarlsruheS1: {
    name: 'S1',
    osm: {
      relationIds: [169136],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#00A76D',
  },
  KarlsruheS11: {
    name: 'S11',
    osm: {
      relationIds: [173173],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#00A76D',
  },
  KarlsruheS12: {
    name: 'S12',
    osm: {
      relationIds: [5976991],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#00A76D',
  },
  KarlsruheS2: {
    name: 'S2',
    osm: {
      relationIds: [177453],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#A065AB',
  },

  KarlsruheS31: {
    name: 'S31',
    osm: {
      relationIds: [6027183],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#00A99D',
  },
  KarlsruheS32: {
    name: 'S32',
    osm: {
      relationIds: [15009870],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#00A99D',
  },
  KarlsruheS4: {
    name: 'S4',
    osm: {
      relationIds: [2395144],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#9E184D',
  },
  KarlsruheS5: {
    name: 'S5',
    osm: {
      relationIds: [2083867],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#F69897',
  },
  KarlsruheS51: {
    name: 'S51',
    osm: {
      relationIds: [6063258],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#F69897',
  },
  KarlsruheS52: {
    name: 'S52',
    osm: {
      relationIds: [1622732],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#F69897',
  },
  KarlsruheS6: {
    name: 'S6',
    osm: {
      relationIds: [192247],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#301747',
  },
  KarlsruheS7: {
    name: 'S7',
    osm: {
      relationIds: [182371],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#fff200',
  },
  KarlsruheS71: {
    name: 'S71',
    osm: {
      relationIds: [6796258],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#fff200',
  },
  KarlsruheS8: {
    name: 'S8',
    osm: {
      relationIds: [190111],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#6e692a',
  },
  KarlsruheS81: {
    name: 'S81',
    osm: {
      relationIds: [6027181],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#6e692a',
  },

  /*
  PotsdamTram98: {
    name: '98',
    osm: {
      // route_master (1490387) contains old/incorrect relations from/to Schloss Charlottenhof
      relationIds: [
        // Bisamkiez => Platz der Einheit/Nord (missing alternative Bhf Rehbrücke => Waldstr./Horstweg)
        12013203,
        // Platz der Einheit/Nord => Bahnhof Rehbrücke (missing alternative Waldstr./Horstweg => Bisamkiez)
        12013205,
        // missing parts / alternative routes are added below
      ],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#009edd',
  },
  */
}

// ----------------------------------------
// extra nodes/ways (not included in relations)
// ----------------------------------------

/*
// 91 route_master is missing alternative Platz der Einheit/Nord => Platz der Einheit/West (to Bahnhof Rehbrücke)
linesMetadata.PotsdamTram91.osm.extraStationNodeIds.push(288588455)
linesMetadata.PotsdamTram91.osm.extraRouteWayIds.push(49982660)
// 91 route_master is missing alternative Alter Markt/Landtag => Platz der Einheit/Nord (from Bahnhof Rehbrücke)
linesMetadata.PotsdamTram91.osm.extraStationNodeIds.push(1456277747, 288588455)
linesMetadata.PotsdamTram91.osm.extraRouteWayIds.push(
  132376260,
  1353033951,
  884313069,
  884337338,
  37914110,
  1242367276,
  132378596,
  1354490324,
)

// 92 relation 300929 is missing stop Alter Markt/Landtag
linesMetadata.PotsdamTram92.osm.extraStationNodeIds.push(2261350036)
// 92 relations are missing stop Reiterweg/Alleestraße
linesMetadata.PotsdamTram92.osm.extraStationNodeIds.push(252492610, 473713857)
// 92 relations are missing alternative/stop S Potsdam Hauptbahnhof/Friedrich-Engels-Straße
linesMetadata.PotsdamTram92.osm.extraStationNodeIds.push(9802947785)
linesMetadata.PotsdamTram92.osm.extraRouteWayIds.push(1016394760, 1016394761)

// 93 relations are missing alternative/stop S Potsdam Hauptbahnhof/Friedrich-Engels-Straße
linesMetadata.PotsdamTram93.osm.extraStationNodeIds.push(9802947785)
linesMetadata.PotsdamTram93.osm.extraRouteWayIds.push(1016394760, 1016394761)
// 93 route_master is missing alternative Waldstr./Horstweg => Bisamkiez (only includes relation for Bisamkiez => Glienicker Brücke but not return direction; rest of the route (in that direction) is covered by other relations)
linesMetadata.PotsdamTram93.osm.extraStationNodeIds.push(
  1139573471,
  30622561,
  1193433542,
)
linesMetadata.PotsdamTram93.osm.extraRouteWayIds.push(
  132574454,
  242451428,
  1241776627,
  242451430,
)
// 93 paths around Platz der Einheit are not fully correct, but that's not too important

// 98 relations are missing alternative Bhf Rehbrücke => Waldstr./Horstweg
linesMetadata.PotsdamTram98.osm.extraStationNodeIds.push(
  349113757,
  2255903955,
  2255903956,
  1149196891,
  1142818669,
  30622461,
)
linesMetadata.PotsdamTram98.osm.extraRouteWayIds.push(205399268, 216253182)
// 98 relations are missing alternative Waldstr./Horstweg => Bisamkiez
linesMetadata.PotsdamTram98.osm.extraStationNodeIds.push(
  1139573471,
  30622561,
  1193433542,
)
linesMetadata.PotsdamTram98.osm.extraRouteWayIds.push(
  132574454,
  242451428,
  1241776627,
  242451430,
)

// 99 relations are missing alternative/stop S Potsdam Hauptbahnhof/Friedrich-Engels-Straße
linesMetadata.PotsdamTram99.osm.extraStationNodeIds.push(9802947785)
linesMetadata.PotsdamTram99.osm.extraRouteWayIds.push(1016394760, 1016394761)

*/

// ----------------------------------------
// alternate names
// ----------------------------------------
export const alternateNames: { [stationName: string]: string[] | undefined } = {
  'Karlsruhe Hauptbahnhof': ['Hauptbahnhof'],
  Bahnhofsvorplatz: ['Hauptbahnhof'],
  'Neureut-Heide': ['Heide'],
  'Mühlburger Tor (Grashofstraße)': ['Mühlburger Tor'],
  'Europaplatz (U)': ['Europaplatz'],
  'Marktplatz (Kaiserstraße U)': ['Marktplatz'],
  'Kronenplatz (U)': ['Kronenplatz'],
  'Durlacher Tor - KIT Campus Süd (U)': ['Durlacher Tor - KIT Campus Süd'],
  'Europaplatz (Kaiserstraße)': ['Europaplatz'],
  'Europaplatz (Karlstraße)': ['Europaplatz'],
  'Kongresszentrum (U)': ['Kongresszentrum'],
  'Ettlinger Tor (U)': ['Ettlinger Tor'],
  'Marktplatz (Pyramide U)': ['Marktplatz'],
  'Pforzheim Hauptbahnhof': ['Pforzheim Hbf'],
}
