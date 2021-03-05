

function Paginate(props) {
    return (
        <div>

            <button

                onClick={(e) => props.setPaginate(props.paginate + 5)}
            >Show More!</button>


        </div>

    )
}

export default Paginate;