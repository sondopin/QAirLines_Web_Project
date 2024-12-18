import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as apiClient from '../apis/admin.api';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const DestinationChart: React.FC = () => {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiClient.getPopular({ year });
                const data = response.data; // Mảng 12 phần tử, mỗi phần tử chứa top 3 địa điểm của từng tháng

                const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const datasets: any[] = [];
                let maxBooking = 0;

                // Chuẩn bị dữ liệu cho biểu đồ
                data.forEach((monthData: any[], monthIndex: number) => {
                    monthData.forEach(([destination, count], destIndex) => {
                        maxBooking = Math.max(maxBooking, count);
                        if (!datasets[destIndex]) {
                            datasets[destIndex] = {
                                label: `Destination ${destIndex + 1}`, // Chú thích cố định theo màu
                                backgroundColor: `rgba(${50 + destIndex * 70}, 150, ${200 - destIndex * 50}, 0.6)`,
                                borderColor: `rgba(${50 + destIndex * 70}, 150, ${200 - destIndex * 50}, 1)`,
                                borderWidth: 1,
                                data: Array(12).fill(0), // Giá trị ban đầu là 0
                                datalabels: {
                                    display: true,
                                    align: 'top',
                                    anchor: 'end',
                                    color: 'black',
                                    font: {
                                        size: 10,
                                        weight: 'bold',
                                    },
                                },
                            };
                        }
                        datasets[destIndex].data[monthIndex] = count; // Gắn giá trị booking cho tháng tương ứng
                    });
                });

                // Làm tròn maxBooking lên bậc trăm
                maxBooking = Math.ceil(maxBooking / 100) * 100;

                // Cấu hình dữ liệu biểu đồ
                setChartData({
                    labels,
                    datasets,
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top',
                            },
                            datalabels: {
                                formatter: (value: any, context: any) => {
                                    const cityName = data[context.dataIndex][context.datasetIndex]?.[0] || '';
                                    return cityName; // Hiển thị tên thành phố
                                },
                            },
                            tooltip: {
                                callbacks: {
                                    label: (context: any) => {
                                        const { label, raw } = context;
                                        const cityName = data[context.dataIndex][context.datasetIndex]?.[0] || 'N/A';
                                        return `${label} (${cityName}): ${raw} bookings`;
                                    },
                                },
                            },
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Months',
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Bookings',
                                },
                                beginAtZero: true,
                                max: maxBooking,
                            },
                        },
                    },
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [year]);

    return (
        <div>
            <h1 className='text-center'>Top Destinations in {year} Chart</h1>
            <div>
                <label htmlFor="year">Year: </label>
                <input
                    type="number"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                />
            </div>
            {chartData && (
                <Bar
                    data={{
                        labels: chartData.labels,
                        datasets: chartData.datasets,
                    }}
                    options={chartData.options}
                />
            )}
        </div>
    );
};

export default DestinationChart;
