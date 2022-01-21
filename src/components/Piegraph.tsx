import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

export default function Piegraph() {
  const bug = useSelector((state: RootState) => state.bug.bug);
  const open = bug.filter(
    (b: { category: string; status: string }) => b.status === 'Open'
  );
  const close = bug.filter(
    (b: { category: string; status: string }) => b.status === 'Close'
  );
  const inprog = bug.filter(
    (b: { category: string; status: string }) => b.status === 'Inprogress'
  );
  const openf = bug.filter(
    (b: { category: string; status: string }) =>
      b.category === 'Frontend' && b.status === 'Open'
  );
  const openb = bug.filter(
    (b: { category: string; status: string }) =>
      b.category === 'Backend' && b.status === 'Open'
  );
  return (
    <div className='text-blue-200 rounded-2xl bg-blue-500 p-2 w-[40rem]'>
      <div>
        <h2 className='text-lx pb-2'>Bug status graph</h2>
        <div>
          <Pie
            data={{
              labels: ['Closed', 'In Progress', 'Open'],
              datasets: [
                {
                  label: 'My First Dataset',
                  data: [close.length, inprog.length, open.length],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                  ],
                  hoverOffset: 4,
                },
              ],
            }}
            height={200}
            width={400}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    font: { size: 20, weight: 'bolder' },
                    color: 'rgb(191,219,254)',
                  },
                },
              },
            }}
          />
        </div>
        <h2 className='text-lx pb-2 pt-4'>Stack Status graph</h2>
        <div className=''>
          <Pie
            data={{
              labels: ['Frontend Open', 'Backend Open'],
              datasets: [
                {
                  label: 'My First Dataset',
                  data: [openf.length, openb.length],
                  backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'],
                  hoverOffset: 4,
                },
              ],
            }}
            height={200}
            width={400}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    font: { size: 20, weight: 'bolder' },
                    color: 'rgb(191,219,254)',
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
