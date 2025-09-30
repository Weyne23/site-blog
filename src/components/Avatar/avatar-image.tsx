import Image, { ImageProps } from "next/image"

type AvatarImageProps = ImageProps;

export const AvatarImage = ({ src, alt, width = 40, height = 40, ...rest }: AvatarImageProps) => {
    return(
        <Image src={src} alt={alt} width={width} height={height} {...rest} className={`h-9 w-9 overflow-hidden rounded-full border-blue-200 border-[1px]`}/>
    )
}