const LeftNavLink = (props) => {
  const { href, src, alt, id } = props.data;
  
  return ( 
    <a href={ href }>
      <img 
        src={ src } 
        alt={ alt } 
        id={ id }
      />
    </a>
  );
}

export default LeftNavLink;