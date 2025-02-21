import { Avatar as RadixAvatar } from 'radix-ui';
import { useStyleAttributes } from '../utils/style';

export type AvatarRootProps = RadixAvatar.AvatarProps;

export function AvatarRoot({
  children,
  className,
  ...props
}: AvatarRootProps) {
  const attributes = useStyleAttributes(
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
  const attributes = useStyleAttributes(
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
  const attributes = useStyleAttributes(
    { 'avatar-fallback': true },
    className,
  );

  return (
    <RadixAvatar.Fallback {...attributes} {...props}>
      {children}
    </RadixAvatar.Fallback>
  );
}
