import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as apiClient from '../apis/admin.api';
import { useQuery } from "@tanstack/react-query";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);


const RevenueChart: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear()); 
  let revenueData: number[] = [];
  const { data: revenue } = useQuery({
    queryKey: ['get-revenue', year],
    queryFn: () => apiClient.getRevenue({year}).then(response => response.data),
  });
  if (revenue) {
    revenueData = revenue;
  }

  // Tìm giá trị lớn nhất và làm tròn lên hàng trăm
  const maxValue = Math.max(...revenueData);
  const roundedMax = Math.ceil(maxValue / 1000000) * 1000000; 

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: `Revenue of months`,
        data: revenueData,
        backgroundColor: 'rgba(62, 180, 244, 0.5)'
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const, // Hiển thị chú thích ở phía trên
      },
      datalabels: {
        display: (context: any) => context.dataset.data[context.dataIndex] > 0, // Chỉ hiển thị nhãn khi doanh thu > 0
        color: '#000', // Màu của nhãn
        font: {
          size: 12,
          weight: 'bold' as 'bold',
        },
        formatter: (value: number) => value.toLocaleString('vi-VN'), // Định dạng số
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Revenue (VND)', // Nhãn cột dọc
          font: {
            size: 14,
            weight: 'bold' as 'bold',
          },
        },
        ticks: {
          beginAtZero: true, // Bắt đầu từ 0
          stepSize: roundedMax / 5, // Chia khoảng trên trục y thành 5 phần
        },
        suggestedMax: roundedMax, // Đặt giá trị tối đa của cột dọc
      },
      x: {
        title: {
          display: true,
          text: 'Months', // Nhãn cột ngang
          font: {
            size: 14,
            weight: 'bold' as 'bold',
          },
        },
      },
    },
  };
  


return (
  <div>
    <h1 className='text-center'>Revenue in {year} Chart </h1>
    <div>
        <label htmlFor="year">Year: </label>
        <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
        />
    </div>
    <Bar data={data} options={options} />
  </div>
  
);
};

export default RevenueChart;
