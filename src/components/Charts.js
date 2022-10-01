import userData from './../users.json';
import { CartesianGrid, AreaChart, Area, XAxis, Tooltip } from 'recharts';

export default function Chart() {
  const users = userData;

  return (
    <>
      <div>
       
        <h3>Users in .Json</h3>

        <AreaChart
          width={800}
          height={500}
          data={users}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#eee" strokeDasharray="1 1"/>
          <XAxis dataKey="id" />
          <Tooltip />
          <Area type="monotone" dataKey="id" stroke="#0000FF" fill="#FFFF00" />
        </AreaChart>
      </div>
    </>
  );
}