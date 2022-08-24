// consider using TypeScript for checking all these props!
const Image = ({ fileName, sizes, ...imageProps }) => (
	<picture>
	  <source
		type="image/webp"
		srcSet={`/img/optimized/${fileName}-600.webp 600w, /img/optimized/${fileName}-1000.webp 1000w`}
		sizes={sizes}
	  />
	  <source
		type="image/jpeg"
		srcSet={`/img/optimized/${fileName}-600.jpeg 600w, /img/optimized/${fileName}-1000.jpeg 1000w`}
		sizes={sizes}
	  />
	  <img src={`/img/optimized/${fileName}-600.jpeg`} {...imageProps} />
	</picture>
)

export default Image;