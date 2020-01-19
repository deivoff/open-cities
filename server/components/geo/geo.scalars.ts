import { GraphQLScalarType, Kind } from 'graphql';

export function parseLiteral(ast, variables) {
  switch (ast.kind) {
    case Kind.STRING:
    case Kind.INT:
    case Kind.FLOAT:
      return parseFloat(ast.value);
    case Kind.LIST:
      return ast.values.map(n => parseLiteral(n, variables));
    case Kind.NULL:
      return null;
    case Kind.VARIABLE: {
      const name = ast.name.value;
      return variables ? variables[name] : undefined;
    }
    default:
      return undefined;
  }
}

export const GeometryCoords = new GraphQLScalarType({
  name: 'GeometryCoords',
  description: 'Coordinates scalar type',
  serialize(value: any) {
    return value; // value sent to the client
  },
  parseValue(value: any) {
    return value;
  },
  parseLiteral,
});
