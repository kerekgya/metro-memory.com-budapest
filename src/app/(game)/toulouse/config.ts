import { Config, Line } from '@/lib/types'
import { MapboxOptions } from 'mapbox-gl'
import { Metadata } from 'next'

export const BEG_THRESHOLD = 0.5

export const LINES: {
  [name: string]: Line
} = {
  "ToulouseMetroA": {
    "name": "A",
    "color": "#DB001B",
    "backgroundColor": "#6E000D",
    "textColor": "#FFFFFF",
    "order": 1
  },
  "ToulouseMetroB": {
    "name": "B",
    "color": "#FFD900",
    "backgroundColor": "#806D00",
    "textColor": "#FFFFFF",
    "order": 2
  },
  "ToulouseTramT1": {
    "name": "M3",
    "color": "#004687",
    "backgroundColor": "#002344",
    "textColor": "#FFFFFF",
    "order": 3
  }
}

export const METADATA: Metadata = {
  title: 'Toulouse Metro Memory',
  description: 'Quel pourcentage des stations de métro de Toulouse connaissez-vous de tête?',
  openGraph: {
    title: 'Toulouse Metro Memory',
    description:
      'Quel pourcentage des stations de métro de Toulouse connaissez-vous de tête?',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://metro-memory.com/toulouse',
  },
}

export const MAP_CONFIG: MapboxOptions = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', // Mapbox Streets
  // style: 'mapbox://styles/benjamintd/clneoq08i03y101r7ek1z305r', // generic
  // style: 'mapbox://styles/benjamintd/cls4h02hy019201qygvumc0nb', // generic

  minZoom: 6,
  fadeDuration: 50,
  dragRotate: false,
  // container: 'map',
  // // style: 'mapbox://styles/mapbox/standard', // Use the standard style for the map
  // // projection: 'globe', // display the map as a globe
  // zoom: 1, // initial zoom level, 0 is the world view, higher values zoom in
  // center: [30, 15] // center the map on this longitude and latitude
}
// export const MAP_CONFIG: MapboxOptions = {
//   container: 'map',
//   style: 'mapbox://styles/benjamintd/cls4h02hy019201qygvumc0nb', // generic
//   minZoom: 6,
//   fadeDuration: 50,
//   dragRotate: false,
// }

export const STRIPE_LINK = 'https://buy.stripe.com/cN2aFb0nI1rI9bi5km'

export const CITY_NAME = 'toulouse'

export const LOCALE = 'fr'

export const MAP_FROM_DATA = true

const config: Config = {
  GAUGE_COLORS: 'inverted',
  MAP_FROM_DATA,
  LOCALE,
  STRIPE_LINK,
  CITY_NAME,
  MAP_CONFIG,
  METADATA,
  LINES,
  BEG_THRESHOLD,
}

export default config
