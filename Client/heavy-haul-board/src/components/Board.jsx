import React, { useState, useEffect } from "react";
import "./Board.css";

const Board = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const shipments = [
        {
            id: 1,
            type: "Electrónica",
            location: "San Salvador → Santa Tecla",
            distance: "15 km",
            rate: "$300",
            date: "2024-02-24",
            weight: "1.2 ton",
            contact: { name: "Juan Pérez", phone: "1234-5678" },
            truckType: "Caja Seca"
        },
        {
            id: 1,
            type: "Electrónica",
            location: "San Salvador → Santa Tecla",
            distance: "15 km",
            rate: "$300",
            date: "2024-02-24",
            weight: "1.2 ton",
            contact: { name: "Juan Pérez", phone: "1234-5678" },
            truckType: "Caja Seca"
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-SV', options);
    };

    return (
        <div className="board-container">
            <h2>Tablero de Cargas</h2>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Ruta</th>
                            {!isMobile && <th>Distancia</th>}
                            <th>Tarifa</th>
                            <th>Fecha</th>
                            {!isMobile && <th>Peso</th>}
                            <th>Contacto</th>
                            <th>Camion</th>
                        </tr>
                    </thead>

                    <tbody>
                        {shipments.map((shipment) => (
                            <tr key={shipment.id} className="data-row">
                                <td>{shipment.type}</td>
                                <td>{shipment.location}</td>
                                {!isMobile && <td>{shipment.distance}</td>}
                                <td>{shipment.rate}</td>
                                <td>{formatDate(shipment.date)}</td>
                                {!isMobile && <td>{shipment.weight}</td>}
                                <td>
                                    <div className="contact-info">
                                        <span>{shipment.contact.name}</span>
                                        <a href={`tel:${shipment.contact.phone}`}>
                                            {shipment.contact.phone}
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <span className="truck-badge">
                                        {shipment.truckType}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Board;