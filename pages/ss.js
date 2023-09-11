import { ProductService } from "@/service/ProductService";
import { ColorPicker } from "primereact/colorpicker";

export default function Ss() {
  const hoje = new Date();
  const mesAtual = hoje.getMonth();
  const diaFinal = new Date(hoje.getFullYear(), mesAtual + 1, 0).getDate();
  const diasDoMes = [];

  for (let index = 1; index <= diaFinal; index++) {
    diasDoMes.push(index);
  }

  const products = ProductService.getProductsData();

  return (
    <div className="border flex p-[2em]">
      <div className="max-w-screen-lg mx-auto overflow-x-auto">
        <table className="border">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Salas</th>
              {diasDoMes.map((day) => (
                <th key={day} className="px-4 py-2">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.room} >
                <td className="px-4 py-2 border">{product.room}</td>
                {diasDoMes.map((day) => (
                  <td
                    key={day}
                    className=" border  font-bold"
                    style={{ 
                        width: "10em",
                        
                    }}
                  >
                   <div className={`p-2 w-[5.5em] ${product[day] ? 'bg-red-500 text-white items-center'  : 'bg-white'}`} >{product[day] || ""}</div> 
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
