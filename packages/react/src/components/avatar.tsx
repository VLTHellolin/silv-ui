import { Avatar as RadixAvatar } from 'radix-ui';
import { getStyleAttributes } from '../utils/style';

export type AvatarRootProps = RadixAvatar.AvatarProps;

export function AvatarRoot({
  children,
  className,
  ...props
}: AvatarRootProps) {
  const attributes = getStyleAttributes(
    { avatar: true },
    className,
  );

  return (
    <RadixAvatar.Root {...attributes} {...props}>
      {children}
    </RadixAvatar.Root>
  );
}

export type AvatarImageProps = RadixAvatar.AvatarImageProps;

export function AvatarImage({
  className,
  ...props
}: AvatarImageProps) {
  const attributes = getStyleAttributes(
    { 'avatar-image': true },
    className,
  );
  return (
    <RadixAvatar.Image {...attributes} {...props} />
  );
}

export type AvatarFallbackProps = RadixAvatar.AvatarFallbackProps;

export function AvatarFallback({
  children,
  className,
  ...props
}: AvatarFallbackProps) {
  const attributes = getStyleAttributes(
    { 'avatar-fallback': true },
    className,
  );

  return (
    <RadixAvatar.Fallback {...attributes} {...props}>
      {children}
    </RadixAvatar.Fallback>
  );
}
