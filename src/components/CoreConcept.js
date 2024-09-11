// Using Destructoring to get image, title, descriptio
// this prevents us from having to use props.image, props.title...
const CoreConcept = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
