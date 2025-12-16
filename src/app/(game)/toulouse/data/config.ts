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
  ToulouseMetroA: {
    name: 'A',
    osm: {
      relationIds: [1557179],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#DB001B',
  },
  ToulouseMetroB: {
    name: 'B',
    osm: {
      relationIds: [1557177],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#FFD900',
  },
  ToulouseTramT1: {
    name: 'M3',
    osm: {
      relationIds: [1557178],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#004687',
  },
}

// // ----------------------------------------
// // alternate names
// // ----------------------------------------
export const alternateNames: { [stationName: string]: string[] | undefined } = {}
