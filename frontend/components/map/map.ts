export abstract class OSMap<T> {
  public map: T;

  public constructor(map: T) {
    this.map = map;
  }

  public static stringToCoordinates(str: string | undefined): [number, number] | undefined {
    if (str) {
      const arr = str.split(', ').map((elem: string) => {
        return Number.parseFloat(elem);
      });
      return [arr[0], arr[1]];
    }
  }
}
