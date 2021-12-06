import React, { useState, useEffect } from "react";

export default function Journal() {
    const akun = [
        {
            kode: 101,
            name: "kas",
        },
        {
            kode: 112,
            name: "piutang usaha",
        },
        {
            kode: 157,
            name: "peralatan usaha",
        },
        {
            kode: 201,
            name: "Utang Usaha",
        },
        {
            kode: 301,
            name: "Modal Pemilik",
        },
    ];
    const [data, setData] = useState([]);
    const [permintaan, setPermintaan] = useState("");
    const [probabilitas, setProbabilitas] = useState("");
    const [display, setDisplay] = useState(false);
    const [id, setId] = useState(0);
    const handleDeleteData = (i) => {
        const itemRemoved = data.splice(i, 1);
        setData(data.filter((data) => data !== itemRemoved));
    };
    const handleKeyPress = (code) => {
        if (code === "Enter") {
            addData();
        }
    };
    const addData = () => {
        if (permintaan !== "" && probabilitas !== "") {
            setData([
                ...data,
                {
                    id,
                    permintaan: parseInt(permintaan),
                    probabilitas: parseFloat(probabilitas),
                },
            ]);
            setId(id + 1);
        }
        setPermintaan("");
        setProbabilitas("");
    };
    return (
        <div>
            <div>
                <div className="inline-flex flex-col gap-4 border-2 p-6 rounded-xl drop-shadow">
                    <p className="font-bold text-gray-700">
                        Data Permintaan dan Probabilitas
                    </p>
                    <table className="divide-y divide-gray-200 w-auto bg-white ">
                        <thead className="bg-blue-200">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                                >
                                    No.
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                                >
                                    Permintaan (Unit/Hari)
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                                >
                                    Probabilitas
                                </th>
                                <th scope="col" className="relative px-6"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {(data?.length &&
                                data.map((list, i) => (
                                    <tr key={i}>
                                        <td className="px-6 whitespace-nowrap py-4">
                                            {i + 1}.
                                        </td>
                                        <td className="px-6 whitespace-nowrap py-4">
                                            {list.permintaan}
                                        </td>
                                        <td className="px-6 whitespace-nowrap py-4">
                                            {list.probabilitas}
                                        </td>
                                        <td className="items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-red-600 cursor-pointer mx-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={() =>
                                                    handleDeleteData(i)
                                                }
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </td>
                                    </tr>
                                ))) ||
                                null}
                            <tr>
                                <td className="px-6 whitespace-nowrap">
                                    {(data?.length && data.length + 1) || 1}.
                                </td>
                                <td className="px-4 py-4">
                                    <input
                                        className="w-full px-2 rounded-xl border-gray-300 placeholder-gray-300"
                                        type="number"
                                        value={permintaan}
                                        placeholder="Isi Permintaan"
                                        onChange={(e) =>
                                            setPermintaan(e.target.value)
                                        }
                                    />
                                </td>
                                <td className="px-4 py-4">
                                    <input
                                        className="w-full px-2 rounded-xl border-gray-300 placeholder-gray-300"
                                        type="number"
                                        value={probabilitas}
                                        placeholder="Isi Prob (Total <= 1.00)"
                                        onChange={(e) =>
                                            setProbabilitas(e.target.value)
                                        }
                                        onKeyPress={(e) =>
                                            handleKeyPress(e.key)
                                        }
                                    />
                                </td>
                                <td className="items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-green-600 cursor-pointer mx-1"
                                        onClick={addData}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => {
                            setDisplay(!display);
                        }}
                    >
                        Hitung!
                    </button>
                </div>
            </div>
        </div>
    );
}
