function ArtItem({itemsForSale}){
    return(
        <div className="products">
            {itemsForSale.map((element=>{
                const{ id, name, price, image }=element;
                return(
                    <div key={id} className='product-card'>
                        <img  src={`./${image}.jpg` }width='400px' height='500px' alt='art'/>
                        <div className="container-card">
                            <h3>{name}</h3>
                            <h4>${price}</h4>
                        </div>
                    </div>
                    
                )
            }))}
        </div>
    )
}
export default ArtItem;