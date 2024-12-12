import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PopulationChartProps {
  populationCounts: {
    year: string;
    value: string;
  }[];
}

export default function Population({ populationCounts }: PopulationChartProps) {
  // Parse the data to ensure year and value are numbers
  const parsedData = populationCounts.map(item => ({
    year: parseInt(item.year, 10),
    value: parseInt(item.value, 10)
  }));

  console.log('Parsed Population data:', parsedData); // Debugging log

  return (
    <div className="w-full h-[400px]">
      <h1>Population Over Time</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart 
          data={parsedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#8884d8" 
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}