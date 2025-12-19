import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({pg: '1'});
    let currentPage = Number(query.get('pg') || '1');

    return (
        <div>
            <button className="bg-blue-500 text-white border-b-blue-400 p-4"
                    onClick={() => {
                        if (currentPage > 1) {
                            setQuery({pg: (--currentPage).toString()});
                        }
                    }}
            >left
            </button>

            <button className="bg-blue-500 text-white border-b-blue-400 p-4"
                    onClick={() => {
                        setQuery({pg: (++currentPage).toString()});
                    }}
            >right
            </button>

        </div>
    );
};

export default PaginationComponent;