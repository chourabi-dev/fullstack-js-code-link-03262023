import '../compoenents/cook.css';

const style = {
    contentStyle: { color:'gray', fontSize:20 },
    titleStyle: { color:'orange' }
}

export default function CookBookItem(props){

    let blocImg = null;

    if (props.imageURL != null) {
        blocImg= <img src={ props.imageURL }  width="100%" />
    }else{
        blocImg =  <p>Image non disponible</p>
    }



    return(
        <div>
            { blocImg }
            <h3 style={ style.titleStyle }>{ props.title }</h3>
            <p  style={ style.contentStyle }  >{ props.content }</p>
        </div>
    );
}