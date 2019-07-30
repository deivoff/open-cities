interface IQuery {
  query?: any;
}

export function withSSR() {
  return function adapter(ScreenComponent: any) {
    // eslint-disable-next-line no-param-reassign
    ScreenComponent.getInitialProps = function getInitialProps({
      query
    }: IQuery) {
      return query;
    };
    return ScreenComponent;
  };
}
