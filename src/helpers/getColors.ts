import ImageColors from 'react-native-image-colors';

// FIXME: fix the getUri helper
// export const getUriImage = (path: string | null): string | undefined => {
//   if (!path) {
//     return;
//   }
//   const uri = `https://image.tmdb.org/t/p/w500${path}`;
//   return uri;
// };

export const getImageColors = async (uri: string) => {
  const result = await ImageColors.getColors(uri, {
    fallback: '#000',
    cache: true,
    key: 'unique_key',
  });

  let primary: string | undefined;
  let secondary: string | undefined;

  switch (result.platform) {
    case 'android':
      // android result properties
      primary = result.dominant;
      secondary = result.average;
      break;
    case 'ios':
      // iOS result properties
      primary = result.primary;
      secondary = result.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return {
    primary,
    secondary,
  };
};
