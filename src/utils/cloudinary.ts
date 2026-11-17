export function optimizeCloudinaryImage(src: string, width: number): string {
  let url: URL;

  try {
    url = new URL(src);
  } catch {
    return src;
  }

  if (url.hostname !== 'res.cloudinary.com') return src;

  const uploadPath = '/image/upload/';
  const uploadIndex = url.pathname.indexOf(uploadPath);
  if (uploadIndex === -1) return src;

  const pathParts = url.pathname.split(uploadPath);
  const assetParts = pathParts[1].split('/');
  const firstPart = assetParts[0] ?? '';
  const hasTransformation = firstPart
    .split(',')
    .some((part) => /^(?:a|ar|c|dpr|e|f|fl|g|h|q|t|w)_[\w:-]+$/.test(part));
  const transformParts = hasTransformation ? firstPart.split(',') : [];

  if (!transformParts.some((part) => part.startsWith('f_'))) {
    transformParts.push('f_auto');
  }
  if (!transformParts.some((part) => part.startsWith('q_'))) {
    transformParts.push('q_auto:good');
  }
  if (!transformParts.some((part) => part.startsWith('c_'))) {
    transformParts.push('c_limit');
  }

  const widthIndex = transformParts.findIndex((part) => /^w_\d+$/.test(part));
  if (widthIndex === -1) {
    transformParts.push(`w_${width}`);
  } else {
    const existingWidth = Number(transformParts[widthIndex].slice(2));
    if (existingWidth > width) transformParts[widthIndex] = `w_${width}`;
  }

  if (hasTransformation) {
    assetParts[0] = transformParts.join(',');
  } else {
    assetParts.unshift(transformParts.join(','));
  }
  url.pathname = `${pathParts[0]}${uploadPath}${assetParts.join('/')}`;
  return url.toString();
}
