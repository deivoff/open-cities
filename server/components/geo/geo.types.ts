import { GeometryType } from '.';

export type GeometryJson = Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon;

export interface Point {
  type: GeometryType.Point;
  coordinates: Position;
}

export interface MultiPoint {
  type: GeometryType.MultiPoint;
  coordinates: Position[];
}

export interface LineString {
  type: GeometryType.LineString;
  coordinates: Position[];
}

export interface MultiLineString {
  type: GeometryType.MultiLineString;
  coordinates: Position[][];
}

export interface Polygon {
  type: GeometryType.Polygon;
  coordinates: Position[][];
}

export interface MultiPolygon {
  type: GeometryType.MultiPolygon;
  coordinates: Position[][][];
}

export type Position = [number, number] | [number, number, number];
