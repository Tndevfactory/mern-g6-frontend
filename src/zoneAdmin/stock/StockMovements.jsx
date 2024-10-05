import { useEffect, useState } from "react";
import { Eye, Pencil, Trash, TriangleAlert } from "lucide-react";
import { useDispatch } from "react-redux";
import { getStockMovements } from "../../features/stock/stockSlice";
import moment from "moment";

const StockMovements = () => {
  const dispatch = useDispatch();
  const [stockMovements, setStockMovements] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGetStockMovements = (data) => {
    setLoading(true);
    dispatch(getStockMovements(data))
      .then((res) => {
        console.log(res);
        setStockMovements(res.payload.stockMovements);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const data = e.target.search.value;
    handleGetStockMovements(data);
  };
  useEffect(() => {
    handleGetStockMovements();
  }, []);
  return (
    <div className="px-3">
      <h1 className="text-2xl pt-2">Mouvements de stock</h1>
      <div id="search" className="flex justify-start items-center mt-2">
        <form onSubmit={handleSearch}>
          <input
            name="search"
            type="search"
            placeholder="rechercher "
            className="w-[16rem]  border border-gray-500 rounded  px-2 p-1"
          />
        </form>
      </div>
      {loading ? (
        <div className="absolute top-[30%] right-[50%]">
          <div className="loader"> </div>
        </div>
      ) : (
        <div id="list-product" className="mt-4">
          <table className="w-full">
            <thead className="bg-gray-300 h-10">
              <tr>
                <th className="border border-gray-600 w-12 px-2" width="8%">
                  ID
                </th>
                <th className="border border-gray-600">SENS</th>
                <th className="border border-gray-600 ">QUANTITY</th>
                <th className="border border-gray-600 ">PRODUCT</th>
                <th className="border border-gray-600 ">COMMENT</th>
                <th className="border border-gray-600 text-center">
                  CREATED-BY
                </th>
                <th className="border border-gray-600 text-center" width="15%">
                  DATE
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {stockMovements.map((v) => (
                <tr key={v._id} className="h-10">
                  <td className="border border-gray-600 text-center">
                    {v._id.slice(-10)}
                  </td>
                  <td className={`border border-gray-600 text-center`}>
                    <span
                      className={`${
                        v.sens === "in"
                          ? "text-black ring-green-700 ring-2 w-10  "
                          : "text-black ring-red-500 ring-2 w-10"
                      }  rounded-full inline-block font-medium`}
                    >
                      {v.sens}
                    </span>
                  </td>
                  <td className="border border-gray-600 text-center pl-1">
                    {v.quantity}
                  </td>
                  <td className="border border-gray-600 text-center ">
                    {v.productId.designation}
                  </td>
                  <td className="border border-gray-600 text-center ">
                    {v.comment}
                  </td>
                  <td className="border border-gray-600 text-center capitalize">
                    {v.createdBy.name}
                  </td>
                  <td className="border border-gray-600 text-center ">
                    {moment(v.createdAt).format("DD-MM-YYYY")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StockMovements;
