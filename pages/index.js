import { useState } from "react";
import { ClassService } from "@/service/ClassService";
import ClassGrid from "@/components/ClassGrid";

export default function Home() {
  const hoje = new Date();
  const mesAtual = hoje.getMonth();
  const diaFinal = new Date(hoje.getFullYear(), mesAtual + 1, 0).getDate();
  const diasDoMes = Array.from({ length: diaFinal }, (_, index) => index + 1);
  const classes = ClassService.getProductsData();

  return (
    <>
      <div className="w-full h-full p-4 overflow-x-auto">
        <div className="w-full">
          <table className="table-auto border-collapse">
            <thead>
              <tr>
                <th className="border p-2"></th>
                {diasDoMes.map((day) => (
                  <th key={day} className="border p-2">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {classes.map((classe) => (
                <tr key={classe.room}>
                  <td className="border p-2">{classe.room}</td>
                  {diasDoMes.map((day) => {
                    const dayData = classe.days.find(d => d.day === day);
                    if (!dayData) return null;

                    return (
                      <td
                        key={day}
                        className="border p-2"
                        style={{ minWidth: "12em" }}
                      >
                        <ClassGrid periods={["morning", "afternoon", "evening"]} data={dayData.hour} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

