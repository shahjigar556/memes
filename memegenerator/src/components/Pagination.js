import React from 'react'

export default function Pagination({postPerPage,totalPost,handlePaginate}) {
    console.log(postPerPage);
    console.log(totalPost);
    const noOfPages=Math.ceil(totalPost/postPerPage)
    let pageNumbers=[];
    for(let i=1;i<=noOfPages;i++)
    {
          pageNumbers.push(i);
    }
    return (
        <div>
            <ul className="pagination">
            {pageNumbers.map(page=>{
                return (
                    <li className="page-item">
                        <a className="page-link" onClick={()=>handlePaginate(page)}>{page}</a>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}
