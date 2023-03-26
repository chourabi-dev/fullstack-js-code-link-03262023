// informations passed from the parent compoenent we find them in a var called props !!

function ContactItem(props){

    console.log(props);


    return(
        <div>
          <h3>{ props.fullname }</h3>
          <p>{ props.email }</p>
          <p>{ props.phone }</p>
          
        </div>
    );
}



// EXPORT !!!!!!!

export default ContactItem;