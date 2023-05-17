export type GeodecodeResponse = {
  place_id: number
  display_name: string
  lon: number
  lat: number
};

export type GeoencodeResponse = Array<{
  place_id: number
  display_name: string
  lon: number
  lat: number
}>;
