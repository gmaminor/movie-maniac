
export default function Rating({rate,selected,handleFilter}){
    return(

        <li className=" nav-item text-white  ">
            <button className={rate === selected ? 'nav-link active':'nav-link'} data-bs-target="tab" 
            onClick={() => handleFilter(rate)}>{rate}+ star</button>
        </li>

    )
}