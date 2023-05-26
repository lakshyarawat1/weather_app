import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'
import { data } from '../constants/chartData'

const homeChart = () => {
    console.log(data)
  return (
    <div className="m-5 rounded-xl p-2">
      <div className="flex mb-10 gap-24">
        <div className="text-xl font-bold">Weekly temperature report</div>
        <div className="text-blue-600 font-semibold flex gap-5">
          New Delhi, India
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </div>
      </div>
      <AreaChart width={500} height={300} data={data} margin={{ top: 10 }}>
        <CartesianGrid strokeDasharray="15 15" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area type="natural" dataKey="temperature" stroke="#8884d8" />
      </AreaChart>
    </div>
  );
}

export default homeChart