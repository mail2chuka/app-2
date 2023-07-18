// pages/reportView.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import db from "@/utils/db";

const ReportView = () => {
  const router = useRouter();
  const { startDate, endDate, userId, userName } = router.query;
  const [reportData, setReportData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        db.connect();
        const purchases = await db
          .collection("purchases")
          .find({
            user_id: userId,
            createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
          })
          .toArray();
        const paymentHistory = await db
          .collection("paymentHistory")
          .find({
            user_id: userId,
            createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
          })
          .toArray();
        setReportData([...purchases, ...paymentHistory]);
        db.disconnect();
        console.log(reportData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (startDate && endDate && userId) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, userId]);
  return (
    <div>
      <h1>Transaction History for {userName}</h1>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Date</th>
            <th>Purchase Data</th>
            <th>Payment Data</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.createdAt}</td>
              <td>{row.purchaseData || "-"}</td>
              <td>{row.paymentData || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportView;
